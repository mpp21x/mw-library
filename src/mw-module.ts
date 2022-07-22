/** check */
import {NgModule} from '@angular/core';
import {FormModule} from './modules/form/form.module';
import {MwNgbFormModule} from './modules/mw-ngb-form/mw-ngb-form.module';
import {MwNgbTableModule} from './modules/mw-ngb-table/mw-ngb-table.module';
import {EventListenerModule} from './modules/event-listener/event-listener.module';
import {LoadingModule} from './modules/loading/loading.module';



const MODULES = [
  FormModule,
  MwNgbFormModule,
  MwNgbTableModule,
  LoadingModule,
  EventListenerModule,
];

@NgModule({imports: MODULES, exports: MODULES})
export class MwModule {
}
