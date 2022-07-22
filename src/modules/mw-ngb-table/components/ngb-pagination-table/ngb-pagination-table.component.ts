import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'mw-ngb-pagination-table',
  templateUrl: './ngb-pagination-table.component.html',
  styleUrls: ['./ngb-pagination-table.component.scss'],
})
export class NgbPaginationTableComponent {

  @Input() isNotEmpty = true;
  @Input() perPage = 10;
  @Input() currentPage = 1;
  @Input() total = 0;
  @Input() tableClass = 'table-striped';
  @Input() inputClass = '';
  @Input() isShowHeader = true;
  @Input() isShowInputFilter = true;
  @Input() isShowPluginHeader = false;
  @Input() fontSize = 14;

  @Output() changePage = new EventEmitter<number>();
  @Output() changeInputFilter = new EventEmitter<string>();

  inputFilter: string;

  onChangePage($event: number) {
    this.changePage.emit($event);
  }

  onChangeInputFilter() {
    this.changeInputFilter.emit(this.inputFilter);
  }

}
