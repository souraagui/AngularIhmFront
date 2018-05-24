import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/userservice/user.service";
import {AuthService} from "../services/authentication/auth.service";
import {
  HttpHandler,
  HttpHeaderResponse,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
  HttpResponseBase
} from "@angular/common/http";
import {HttpInterceptingHandler} from "@angular/common/http/src/module";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  response: HttpHeaderResponse;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
   // console.log(event);
    const target  = event.target;
    const username = target.querySelector('#username').value;
    const pass = target.querySelector('#password').value;
    //const hand = event.handler;
    this.auth.getUserDetails(username,pass);
  }


}
