import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DateUserService {
  //URL: string = "http://127.0.0.1:8000/api/auth/";
  URL: string = "http://backarriendo.arriendoen.com/api/auth";
  constructor(private http : HttpClient) { }

  selectUserById(id){
    return this.http.get(this.URL +'profile');
  }


}
