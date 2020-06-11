import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublishArticleService {

  AUTH_SERVER: string = "http://127.0.0.1:8000/api/auth/";
  constructor(private http : HttpClient) { }

   // You could upload it like this:
   
   // Headers
  /* const headers = new HttpHeaders({
     'security-token': 'mytoken'
   })
*/
   addImage(imagen: File ){
    
    const formData = new FormData()
    formData.append('name', imagen,)
    
    console.log(formData)
    this.http.post(this.AUTH_SERVER +'addImages', formData)
   .subscribe(data => {
     console.log(data)
   })
   }
   
   
}
