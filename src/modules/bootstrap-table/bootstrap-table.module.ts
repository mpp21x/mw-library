import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapTableComponent } from './components/bootstrap-table/bootstrap-table.component';
import { BootstrapPaginationTableComponent } from './components/bootstrap-pagination-table/bootstrap-pagination-table.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    BootstrapTableComponent,
    BootstrapPaginationTableComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule
  ],
  exports: [
    BootstrapTableComponent,
    BootstrapPaginationTableComponent
  ]
})
export class BootstrapTableModule { }
