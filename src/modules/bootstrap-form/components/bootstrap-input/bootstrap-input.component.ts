import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'mw-bootstrap-input',
  templateUrl: './bootstrap-input.component.html',
  styleUrls: ['./bootstrap-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BootstrapInputComponent extends BaseComponent {
  @Input() type: 'text' | 'file' | 'number' | 'time' | 'email' | 'password' = 'text';
  @Input() maxLength = 50;
  @Input() placeholder = '';
}
