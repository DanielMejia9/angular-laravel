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

  constructor( private http : HttpClient) { }
  
   register(register: RegisterI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,
      register).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            //this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            this.saveToken(res.token, res.success,res.id, res.name);
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            //this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            this.saveToken(res.token, res.success,res.id, res.name);
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
    localStorage.removeItem("name");
    localStorage.removeItem("id");
  }

  private saveToken(token: string, expiresIn: string, id: string,name: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    localStorage.setItem("name", name);
    localStorage.setItem("id", id);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
