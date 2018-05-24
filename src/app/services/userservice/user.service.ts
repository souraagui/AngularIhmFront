import { Injectable } from '@angular/core';
import {UserModel} from "../../models/user-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class UserService {



  constructor(private http:HttpClient) { }

  getData(){
    return [
      {
        id:'1235',
        content:'abc',
        email:'sis@sdf.fr',
        lastName:'issa'
      },
      {
        id:'644',
        content:'ghfghfg',
        email:'hghgth@sdf.fr',
        lastName:'ihgghfssa'
      },
      {
        id:'68968',
        content:'rtrt',
        email:'oioi@sdf.fr',
        lastName:'iyiuy'
      },

    ];

  }
  Url = 'http://localhost:8080/angularsecuring/api';

  public getUsers() {
    return this.http.get<UserModel[]>(this.Url);
  }

  public deleteUser(user : UserModel, id: number) {
    return this.http.delete(this.Url + "/del/"+ id + "/"+ user);
  }

  public createUser(user) {
    return this.http.post<UserModel>(this.Url, user);
  }

  static getColumns(): string[]{
    return ["name", "age", "species", "occupation"]
  };


}
