import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as R from 'ramda';
import {SelectOption} from '../../lib/bootstrap-select/select-option';
import {BaseComponent} from '../base.component';

@Component({
  selector: 'mw-bootstrap-select',
  templateUrl: './bootstrap-select.component.html',
  styleUrls: ['./bootstrap-select.component.scss']
})
export class BootstrapSelectComponent extends BaseComponent {
  @Input() name = '';
  @Input() isMultiple = false;
  @Input() options: SelectOption[] = [];
  @Input() size = 5;
  @Output() changeSelect = new EventEmitter<Event>();

  isSelected(option: SelectOption): boolean {
    if (!this.isMultiple) {
      return option.value === this.getControl().value;
    }

    if (!R.is(Array, this.getControl().value)) {
      throw new Error(`${this.name} is not array(bg select input component)`);
    }
    return this.getControl().value.includes(option.value);
  }
}
