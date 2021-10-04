import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { LoginDTO } from 'src/dto/loginDTO';


@Injectable({
  providedIn: 'root'
})
export class LogInServiceService {
  private baseURL="http://localhost:8080/login";
  constructor(private httpClient:HttpClient) {

  }

  signUp(dto: LoginDTO):Observable<any>{
    return this.httpClient.post(this.baseURL, {
      username: dto.userName,
      email: dto.email,
      password: dto.password,
  });
}

  signIn(username: string):Observable<any>{
    return this.httpClient.get(this.baseURL, {
      headers: {username}
    })
  }
}
