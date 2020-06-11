import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from  'rxjs/operators'
import { Observable , BehaviorSubject} from 'rxjs';
import { RegisterI } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  AUTH_SERVER: string = "http://127.0.0.1:8000/api/auth";
  autSubject = new BehaviorSubject(false);

  private token : string;
  private expires : string;

  constructor( private httpClient : HttpClient) { }
  
   register(register: RegisterI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,
      register).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            //this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            this.saveToken(res.token, res.success);
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            //this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            this.saveToken(res.token, res.success);
          }
        })
      );
  }

  checkLogin(){
    this.token = localStorage.getItem("ACCESS_TOKEN");
    this.expires = localStorage.getItem("EXPIRES_IN");
    //Debes validar el token con el token de la BD
    if(this.token && this.expires == 'true'){
      return true;
    }
    else{
      return false;
    }
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
