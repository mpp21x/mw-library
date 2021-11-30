import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'mw-bootstrap-pagination-table',
  templateUrl: './bootstrap-pagination-table.component.html',
  styleUrls: ['./bootstrap-pagination-table.component.scss'],
})
export class BootstrapPaginationTableComponent {

  @Input() isNotEmpty = true;
  @Input() perPage = 10;
  @Input() currentPage = 1;
  @Input() total = 0;

  @Input() tableClass = 'table table-striped';
  @Input() totalClass = 'badge badge-primary badge-pill m-1';
  @Input() reloadButtonClass = 'btn btn-sm btn-primary rounded-pill m-1 ml-2';
  @Input() reloadButtonIconClass = 'fas fa-redo';

  @Output() changePage = new EventEmitter<number>();

  getTotal() {
    return this.total > 10000 ? 10000 : this.total;
  }

  onChangePage($event: number) {
    this.changePage.emit($event);
  }

  onSearch() {
    this.onChangePage(this.currentPage);
  }
}
