import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AuthenticationService } from '../../services/authentication.service';
import { UserI }  from '../../models/user';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  imageChangedEvent: any = '';
    croppedImage: any = '';
    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    
  constructor( private authService : AuthenticationService,
    private router:Router) { }

  ngOnInit() {
    
  }

  onLogin(form):void{
      this.authService.login(form.value).subscribe(res=>{
        //this.router.navigateByUrl('/');
        window.location.href = "/"
      },
      err => console.log(err),);
  }

  onRegister(form):void{ 
    if(form.value.password == form.value.password_confirmation){
    this.authService.register(form.value).subscribe(res=>{
      this.router.navigateByUrl('/');
    });
  }
  }
}
