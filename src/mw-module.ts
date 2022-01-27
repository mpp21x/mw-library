/** check */
import {NgModule} from '@angular/core';
import {FormModule} from './modules/form/form.module';
import {BootstrapFormModule} from './modules/bootstrap-form/bootstrap-form.module';
import {BootstrapTableModule} from './modules/bootstrap-table/bootstrap-table.module';
import {SpinnerModule} from './modules/spinner/spinner.module';
import {EventListenerModule} from './modules/event-listener/event-listener.module';



const MODULES = [
  FormModule,
  BootstrapFormModule,
  BootstrapTableModule,
  SpinnerModule,
  EventListenerModule,
];

@NgModule({imports: MODULES, exports: MODULES})
export class MwModule {
}
