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
    { id: 0, name: "portada" },
    { id: 1, name: "imagen1" },
    { id: 2, name: "imagen2" },
    { id: 3, name: "imagen3" },
    { id: 4, name: "imagen4" },
    { id: 5, name: "imagen5" },

  ];
  departamentos: any;
  muni: any = {
    id_departamentos: 0
  };

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
        console.log(this.departamentos);

      });
  }


  onSubmit(form) {
    //let adapter = new DemoFilePickerAdapter(this.http);
    console.log(form.value);
    //console.log(adapter)

    this.publish.savePlaces(form.value)
      .subscribe(data => {
        console.log(data)
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
