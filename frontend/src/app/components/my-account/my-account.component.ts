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


    this.datauser.selectUserById(this.user.id)
    .subscribe(data=>{

      this.showSpinner = false;
    })

  }

  onSubmit(form){

  }
}
