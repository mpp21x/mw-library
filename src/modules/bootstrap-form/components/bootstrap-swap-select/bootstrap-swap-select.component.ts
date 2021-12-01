import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'mw-bootstrap-swap-select',
  templateUrl: './bootstrap-swap-select.component.html',
  styleUrls: ['./bootstrap-swap-select.component.scss']
})
export class BootstrapSwapSelectComponent {

  @Output() filterName = new EventEmitter<string>();

  nameFilterInput = '';

}
