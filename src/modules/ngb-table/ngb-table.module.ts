import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTableComponent } from './components/ngb-table/ngb-table.component';
import { NgbPaginationTableComponent } from './components/ngb-pagination-table/ngb-pagination-table.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NgbPaginationComponent} from './components/ngb-pagination/ngb-pagination.component';



@NgModule({
    declarations: [
        NgbTableComponent,
        NgbPaginationTableComponent,
        NgbPaginationComponent
    ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule
  ],
  exports: [
    NgbTableComponent,
    NgbPaginationTableComponent,
    NgbPaginationComponent
  ]
})
export class NgbTableModule { }
