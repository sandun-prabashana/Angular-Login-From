import { Component, OnInit } from '@angular/core';
import { LogInServiceService } from '../../../service/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginDTO } from 'src/dto/loginDTO';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  userName: any;
  email: any;
  password: any;
  code: any;

  constructor(private loginService: LogInServiceService) {}

  ngOnInit(): void {}

  onSubmit(f: any) {
    const dto = new LoginDTO(this.userName, this.email, this.password);
    this.loginService.signUp(dto).subscribe(response => {
      // console.log(response);


      console.log(response.code);

        if (response.code == "201") {
        Swal.fire({
          title: 'Success!',
          text: 'User Save '+response.message,
          icon: 'success',
          confirmButtonText: 'done'
        })
      }
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
    }
    );

  }
}
