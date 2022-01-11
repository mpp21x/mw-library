import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequiredLabelDirective} from './directives/required-label.directive';
import {FormSubmitter} from './service/form-submitter.service';


@NgModule({
  providers: [
    FormSubmitter,
  ],
  declarations: [
    RequiredLabelDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RequiredLabelDirective,
  ]
})
export class FormModule {
}
