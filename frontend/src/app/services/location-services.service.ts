import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class LocationServicesService {
  //URL: string = "http://127.0.0.1:8000/api/";
  URL: string = "https://apis.arriendoen.com/api/";

  constructor(private http : HttpClient) { }

  selectDepartament(){
    return this.http.get(this.URL +'selectDepartamentos');
  }

  selectMunicipio(value){
    return this.http.post(this.URL +'selectMunicipioByDep',value);
  }

  selectDepartamentById(value){
    return this.http.post(this.URL +'selectDepartamentosById', value);
  }

  selectMunicipioById(value){
    return this.http.post(this.URL +'selectMunicipioById',value);
  }

}
