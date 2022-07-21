/** check */
import {NgModule} from '@angular/core';
import {FormModule} from './modules/form/form.module';
import {BootstrapFormModule} from './modules/ngb-form/bootstrap-form.module';
import {NgbTableModule} from './modules/ngb-table/ngb-table.module';
import {EventListenerModule} from './modules/event-listener/event-listener.module';
import {LoadingModule} from './modules/loading/loading.module';



const MODULES = [
  FormModule,
  BootstrapFormModule,
  NgbTableModule,
  LoadingModule,
  EventListenerModule,
];

@NgModule({imports: MODULES, exports: MODULES})
export class MwModule {
}
