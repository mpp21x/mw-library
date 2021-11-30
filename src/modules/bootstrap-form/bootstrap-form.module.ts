import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BootstrapInputComponent} from './components/bootstrap-input/bootstrap-input.component';
import {FormModule} from '../form/form.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BootstrapSelectComponent} from './components/bootstrap-select/bootstrap-select.component';
import {BootstrapTextareaComponent} from './components/bootstrap-textarea/bootstrap-textarea.component';
import {BaseComponent} from './components/base.component';


@NgModule({
  declarations: [
    BaseComponent,
    BootstrapInputComponent,
    BootstrapSelectComponent,
    BootstrapTextareaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
  ],
  exports: [
    BaseComponent,
    BootstrapInputComponent,
    BootstrapSelectComponent,
    BootstrapTextareaComponent,
  ]
})
export class BootstrapFormModule {
}
