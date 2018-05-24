import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatTableModule} from "@angular/material";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  declarations: []
})
export class MaterialModule { }
