import { Component, OnInit } from '@angular/core';
import {LogInServiceService} from "../../../service/login.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  selectedRouter: string | undefined;
  username: any;
  password: any;

  constructor(private loginService: LogInServiceService) {
  }

  ngOnInit(): void {

  }

  onSubmit(f: any) {
    console.log(this.username);
    this.loginService.signIn(this.username).subscribe(respone => {

      if(respone.data.password == this.password){
        Swal.fire({
          title: 'Success!',
          text: 'User login Success',
          icon: 'success',
          confirmButtonText: 'done'
        })
      }else{
        Swal.fire({
          title: 'Error!',
          text: 'User Name Or Password Invaild',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
      console.log(this.password);
      console.log(respone.data.password);

    })
  }
}
