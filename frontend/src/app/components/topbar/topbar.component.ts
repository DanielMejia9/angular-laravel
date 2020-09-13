  import { Component, OnInit,Input } from '@angular/core';
  import { Router } from '@angular/router';
  import { AuthenticationService } from '../../services/authentication.service';


  @Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
  })
  export class TopbarComponent implements OnInit {

    constructor(private router: Router, private authenticationService : AuthenticationService) { }
    hidden: boolean = false;
    btnHidden : boolean = true;
    nameUser:any;

    login(){
      this.router.navigate(['/login']);

    }

    ngOnInit() {
      if(localStorage.getItem("ACCESS_TOKEN") && localStorage.getItem("EXPIRES_IN")){
        this.hidden = true;
        this.btnHidden= false;
      }

      this.nameUser = localStorage.getItem("name");
      console.log(this.nameUser)
    }

    logout(){
    
      this.authenticationService.logout();
      window.location.href = "/"
      
    }

    tosell(){
      this.router.navigateByUrl('vender');
    }

    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/2150/300`);
  }
