/** check */
import {NgModule} from '@angular/core';
import {FormModule} from './modules/form/form.module';
import {BootstrapFormModule} from './modules/bootstrap-form/bootstrap-form.module';
import {BootstrapTableModule} from './modules/bootstrap-table/bootstrap-table.module';
import {EventListenerModule} from './modules/event-listener/event-listener.module';
import {LoadingModule} from './modules/loading/loading.module';



const MODULES = [
  FormModule,
  BootstrapFormModule,
  BootstrapTableModule,
  LoadingModule,
  EventListenerModule,
];

@NgModule({imports: MODULES, exports: MODULES})
export class MwModule {
}
