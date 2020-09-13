import { Component, OnInit} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PublishArticleService } from '../../services/publish-article.service';
import { LocationServicesService } from 'src/app/services/location-services.service';


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
data:any;
showSpinner:boolean = true;
localidad:any = {
  id_departamentos : 0,
  id_municipios: 0,
  id:0
}
tipo:any;
color:any;
departamento:any;
municipio:any;
barrio:any;
nombreLugar:any;

  constructor(private router:Router,
   private publish:PublishArticleService,
   private location: LocationServicesService,
   private publisharticle : PublishArticleService) { }

  ngOnInit() {
   this.publish.listPlaces()
   .subscribe(res=>{
      this.showSpinner = false;
      this.data = res['data']
      
      if(this.data['type_operation'] == 1){
        this.tipo = "Venta"
        this.color = "rgb(244, 67, 54)"
      }
      if(this.data['type_operation'] == 2){
        this.tipo = "Arriendo"
        this.color = "rgb(255, 160, 0)"
      }
      else{
        this.tipo = "Vacacional"
        this.color = "rgb(30, 136, 229)"
      }

   });

   //Seteamos las variables en cero
   

  }

  idProduct(dep,mun,id){
    this.localidad.id_departamentos = dep;
    this.localidad.id_municipios = mun;
    this.localidad.id = id;
    

    this.location.selectDepartamentById(this.localidad)
    .subscribe(dep=>{
      this.departamento = 0;
      this.departamento = dep['data'][0]['departamento'];

      this.location.selectMunicipioById(this.localidad)
      .subscribe(mun=>{
        this.municipio = 0; 
        this.municipio = mun['data']['nombre'];
       
       this.publisharticle.itemById(this.localidad)
        .subscribe(data=>{
           this.barrio = data['data']['location'];
           this.nombreLugar = data['data']['title_places'];

          this.router.navigate(['/ciudad/' +this.departamento.replace(/\s/g, '_') + '/' + this.municipio.replace(/\s/g, '_') +'/'+ this.barrio.replace(/\s/g, '_') ,this.nombreLugar.replace(/\s/g, '_'), id]);
       
        });
      })
    })
  }


  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Bogotá'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Bogotá'},
  ];
 
}
