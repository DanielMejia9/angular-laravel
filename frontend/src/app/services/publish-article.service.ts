import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemsI } from '../models/items'

@Injectable({
  providedIn: 'root'
})
export class PublishArticleService {

  //AUTH_SERVER: string = "http://127.0.0.1:8000/api/auth/";
  //URL: string = "http://127.0.0.1:8000/api/";

  AUTH_SERVER: string = "https://backarriendo.arriendoen.com/api/auth/";
  URL: string = "https://backarriendo.arriendoen.com/api/";
  constructor(private http : HttpClient) { }

   // You could upload it like this:
   
   // Headers
  /* const headers = new HttpHeaders({
     'security-token': 'mytoken'
   })
*/
   addImage(imagen: File){
    const formData = new FormData()
    formData.append('name', imagen,)
    return this.http.post(this.AUTH_SERVER +'addImages', formData);
    
    

   }

   savePlaces(data){
    console.log(data)
    return this.http.post(this.URL +'savePlaces', data);

   }

   saveImg(data){
    console.log(data)
    return this.http.post(this.URL +'saveImagen', data);

   }

   listPlaces(){
    return this.http.get(this.URL +'showPlaces');
   }

   itemById(id){
    return this.http.post(this.URL +'itemById', id);
   }

   imgById(id){
    return this.http.post(this.URL +'imgById', id);
   }

   filterPlaces(data){
    return this.http.post(this.URL +'filterPlaces', data);

   }

   
   
   
}
