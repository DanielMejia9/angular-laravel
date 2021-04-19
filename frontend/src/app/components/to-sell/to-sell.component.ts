import { Component, OnInit, ɵConsole, ViewChild } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { PublishArticleService } from '../../services/publish-article.service';
import { FilePickerComponent } from 'ngx-awesome-uploader';
import { ValidationError } from 'ngx-awesome-uploader';
import { FilePreviewModel } from 'ngx-awesome-uploader';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { DemoFilePickerAdapter } from '../demo-file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { LocationServicesService } from '../../services/location-services.service'

@Component({
  selector: 'app-to-sell',
  templateUrl: './to-sell.component.html',
  styleUrls: ['./to-sell.component.css']
})
export class ToSellComponent implements OnInit {
  showImagen: any;
  nameImagen: any;
  btnFile: boolean = false;
  caja: boolean = true;
  arrayContenedor: any = [];
  arrayName: any = [];
  id: any;
  items: any[] = [
    { id: 0, name: "imagen0" },
    { id: 1, name: "imagen1" },
    { id: 2, name: "imagen2" },
    { id: 3, name: "imagen3" },
    { id: 4, name: "imagen4" },
    { id: 5, name: "imagen5" },
    { id: 6, name: "imagen6" },
    { id: 7, name: "imagen7" },
    { id: 8, name: "imagen8" },
    { id: 9, name: "imagen9" },
    { id: 10,name: "imagen10" },
    { id: 11,name: "imagen11" }

  ];
  departamentos: any;
  muni: any = {
    id_departamentos: 0
  };

  image:any = {
    id:0,
    img:0,
  }

  municipios: any;
  showSpinner: boolean = true;
  isDisabled: boolean = true;

  constructor(private publish: PublishArticleService,
    private location: LocationServicesService,
    private http: HttpClient) { }

  ngOnInit() {

    this.id = localStorage.getItem("id");

    this.location.selectDepartament()
      .subscribe(data => {
        this.showSpinner = false;
        this.departamentos = data['data'];
      });
  }


  onSubmit(form) {
    this.publish.savePlaces(form.value)
      .subscribe(data => {
        this.image.id = data['id'];
        
        let i = 0;
        for(i=0; i<11; i++){
          
          if(form.value['imagen'+i] != null){
            this.image.img  = form.value['imagen'+i];
            /** Guardamos el nombre de las imagenes en la bd*/
  
            this.publish.saveImg(this.image)
            .subscribe(data => {
              //this.router.navigateByUrl('/');
              //window.location.href = "/"
            }, error => console.log('Error'));
           /** */
          }
        }
      }, error => console.log('Error'));
  }

  uploadImages(value, id) {
    this.publish.addImage(value[0])
      .subscribe(data => {
        this.showImagen = data['url'];
        this.nameImagen = data['name'];
        this.btnFile = true;
        this.caja = false;
        this.arrayContenedor.splice(id, 1, this.showImagen);
        this.arrayName.splice(id, 1, this.nameImagen);
      }, error => console.log('Error'));
  }

  onChangeDepartment(value) {

    this.muni.id_departamentos = value;

    if (this.muni.id_departamentos != 'Seleccione...') {
      this.location.selectMunicipio(this.muni)
        .subscribe(data => {
          this.isDisabled = false;
          this.municipios = data['data'];
        })
    }
    else {
      this.isDisabled = true;
    }
  }




}
