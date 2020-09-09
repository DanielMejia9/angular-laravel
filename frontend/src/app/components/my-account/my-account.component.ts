import { Component, OnInit } from '@angular/core';
import {DateUserService } from '../../services/date-user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
user:any={
  id:0,
};

showSpinner:boolean = true;

  constructor(private datauser:DateUserService) { }

  ngOnInit(): void {
    this.user.id = localStorage.getItem("id");
    console.log(this.user.id)

    this.datauser.selectUserById(this.user.id)
    .subscribe(data=>{
      console.log(data)
      this.showSpinner = false;
    })

  }

  onSubmit(form){

  }
}
