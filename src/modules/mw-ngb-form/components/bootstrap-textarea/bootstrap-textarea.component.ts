import {Component, Input} from '@angular/core';
import {BaseComponent} from '../base.component';

@Component({
  selector: 'mw-bootstrap-textarea',
  templateUrl: './bootstrap-textarea.component.html',
  styleUrls: ['./bootstrap-textarea.component.scss']
})
export class BootstrapTextareaComponent extends BaseComponent {
  @Input() rows = 5;
  @Input() maxLength = 50;
  @Input() placeholder = '';

  constructor() {
    super();
  }
}

