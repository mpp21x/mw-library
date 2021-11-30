import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequiredLabelDirective} from './directives/required-label.directive';


@NgModule({
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
