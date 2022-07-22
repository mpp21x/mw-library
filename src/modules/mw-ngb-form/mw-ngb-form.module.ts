import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BootstrapInputComponent} from './components/bootstrap-input/bootstrap-input.component';
import {FormModule} from '../form/form.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BootstrapSelectComponent} from './components/bootstrap-select/bootstrap-select.component';
import {BootstrapTextareaComponent} from './components/bootstrap-textarea/bootstrap-textarea.component';
import {BaseComponent} from './components/base.component';
import {BootstrapInputSelectComponent} from './components/bootstrap-input-select/bootstrap-input-select.component';
import {NgbDatetimePickerComponent} from './components/ngb-datetime-picker/ngb-datetime-picker.component';

import {NgbDatepickerModule, NgbTimepickerModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {BootstrapSwapSelectComponent} from './components/bootstrap-swap-select/bootstrap-swap-select.component';
import {NgbDatetimeFilterComponent} from './components/ngb-datetime-filter/ngb-datetime-filter.component';


@NgModule({
  declarations: [
    BaseComponent,
    BootstrapInputComponent,
    BootstrapSelectComponent,
    BootstrapTextareaComponent,
    BootstrapInputSelectComponent,
    NgbDatetimePickerComponent,
    BootstrapSwapSelectComponent,
    NgbDatetimeFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
    NgbTooltipModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    FormsModule,
  ],
  exports: [
    BaseComponent,
    BootstrapInputComponent,
    BootstrapSelectComponent,
    BootstrapTextareaComponent,
    BootstrapInputSelectComponent,
    NgbDatetimePickerComponent,
    BootstrapSwapSelectComponent,
    NgbDatetimeFilterComponent
  ]
})
export class MwNgbFormModule {
}
