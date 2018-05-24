import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserModel} from "../models/user-model";
import {Router} from "@angular/router";
import {UserService} from "../services/userservice/user.service";
import {MatButton, MatButtonBase, MatPaginator, MatRowDef, MatTable, MatTableDataSource} from '@angular/material';
import {SelectionModel} from "@angular/cdk/collections";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() character: UserModel[];
  @Input() columns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() users = Array<UserModel>() ;
  user: UserModel;
  displayedColumns = ['select','firstName', 'content', 'email', 'lastName','action'];
  dataSource = new MatTableDataSource<UserModel>(Array<UserModel>());

  selection = new SelectionModel<UserModel>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  constructor(private router: Router, private userService: UserService) {

  }


  ngOnInit() {

    this.userService.getUsers().subscribe(
     data =>{ console.log(data);
       this.character= data;
     //console.log( this.character);
       this.dataSource.data= this.character;
       console.log(this.dataSource);
       this.columns = UserService.getColumns();
       //["name", "age", "species", "occupation"]
       //this.character = this.users;
       //all data in mock-data.t
     this.dataSource.paginator = this.paginator;
     /*this.records = this.users.values().next();
       console.log(this.records.value.firstName);
       this.tab.push(this.records.value.firstName);
       console.log(this.tab);*/
   });
  }



  deleteUser(usere: UserModel, id : number) : void {
     this.userService.deleteUser(usere, id)
      .subscribe( data => {console.log(data);
        this.character = this.character.filter(u => u.firstName !== usere.firstName);
        //this.character = data;
      });

  };


  delete(usere: UserModel, id : number) : void{
    this.userService.deleteUser(usere, id)
      .subscribe( data => {console.log(data);
        this.character = this.character.filter(u => u.firstName !== usere.firstName);
        //this.character = data;
      });

  }

  createUser() {
    this.userService.createUser(this.user)
      .subscribe( data => { data= this.user;
        alert("User created successfully."+ data);
      });

  };
}
