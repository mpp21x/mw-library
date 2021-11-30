import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'mw-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.scss']
})
export class BootstrapTableComponent {

  @Input() isShowTotal = true;
  @Input() isShowAmount = false;
  @Input() isShowReloadButton = true;
  @Input() total = 0;
  @Input() showAmount = 50;

  @Input() tableClass = 'table table-striped';
  @Input() totalClass = 'badge badge-primary badge-pill m-1';
  @Input() reloadButtonClass = 'btn btn-sm btn-primary rounded-pill m-1 ml-2';
  @Input() reloadButtonIconClass = 'fas fa-redo';

  @Output() reload = new EventEmitter();

  onReload() {
    this.reload.emit();
  }
}
