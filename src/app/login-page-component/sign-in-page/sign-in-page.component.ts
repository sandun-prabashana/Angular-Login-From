import { Component, OnInit } from '@angular/core';
import {LogInServiceService} from "../../../service/login.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import { LoginDTO } from 'src/dto/loginDTO';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  selectedRouter: string | undefined;
  username: any;
  password: any;
  email: any;

  constructor(private loginService: LogInServiceService) {
  }

  ngOnInit(): void {

  }

  onSubmit(f: any) {
    console.log(this.username);
    console.log(this.username);
    this.loginService.signIn(this.username,this.password).subscribe(respone => {

      if(respone.code == 200){
        Swal.fire({
          title: 'User login Success !',
          text: 'token : '+ respone.data,
          icon: 'success',
          confirmButtonText: 'done'
        })
      }
      //else{
      //   Swal.fire({
      //     title: 'Error!',
      //     text: 'User Name Or Password Invaild',
      //     icon: 'error',
      //     confirmButtonText: 'Ok'
      //   })
      // }
      console.log(respone)
      console.log(this.password);
      console.log(respone.data.password);

    }
    , error => {
      console.log("error")
      console.log(error.error.code)
      console.log(error.error.data)
      console.log(error.error.message)
      console.log(error.error)
      if (error.error.code == "500") {
        Swal.fire({
          title: 'Error!',
          text : error.error.data,
          icon : 'error',
          confirmButtonText : 'Ok'
        })
      }
    });

  }
}
