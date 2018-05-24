import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {TabComponent} from "./tab/tab.component";
import {TabRowComponent} from "./tab-row/tab-row.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";

const routes:Routes=[
  { path: 'users', component: UserComponent },
  { path: 'tab', component: TabComponent },
  { path: 'tabrow', component: TabRowComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
