import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material";
import {UserModel} from "../models/user-model";
import {Router} from "@angular/router";
import {UserService} from "../services/userservice/user.service";
import {element} from "protractor";
import index from "@angular/cli/lib/cli";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {


  @Input() character: UserModel[];
  @Input() columns: string[];

  @Input() users = Array<UserModel>() ;
  user : UserModel;
  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {


        this.userService.getUsers().subscribe(
          data => {console.log(data);
            console.log(this.users);
        this.columns = UserService.getColumns();
        //["name", "age", "species", "occupation"]
        this.character = this.users;
        console.log(this.character);
        //all data in mock-data.t

    })


  }
}
