import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {PAGE_REGEX} from '../../../../lib/utils/page-regex';

@Component({
  selector: 'mw-ngb-pagination',
  templateUrl: './ngb-pagination.component.html',
  styleUrls: ['./ngb-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgbPaginationComponent implements OnInit, OnChanges {

  @Input() page: number;
  @Input() perPage = 10;
  @Input() dataTotal: number;
  @Input() color = '#2196F3';
  @Input() hoverColor = '#2196F3';
  @Input() fontSize: number;
  @Output() changePage = new EventEmitter<number>();

  pageInputControl = new FormControl(1);

  private _lastPage: number;
  private _isLastPage: boolean;
  private _pageInputWidth: number;
  private _pageInputHeight: number;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.setPageInputWidth();
    this.pageInputControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(() => {
        if (!this.pageInputControl.value || !+this.pageInputControl.value) {
          this.page = 1;
          this.pageInputControl.setValue(`${this.page}`);
        } else if (this.pageInputControl.value > this._lastPage) {
          this.page = this._lastPage;
          this.pageInputControl.setValue(`${this.page}`);
        }
        this.page = +this.pageInputControl.value;
        this.setPageInputWidth();
        this.changeDetectorRef.markForCheck();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('page')) {
      this.pageInputControl.setValue(`${this.page}`);
      this.setLastPage();
    }
    if (changes.hasOwnProperty('dataTotal') || changes.hasOwnProperty('perPage')) {
      this.setLastPage();
    }
    this.setPageInputHeight();
    this.changeDetectorRef.markForCheck();
  }

  onChangePage(page: string | number) {
    this.changePage.emit(+page);
    this.changeDetectorRef.markForCheck();
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(PAGE_REGEX, '');
    this.changeDetectorRef.markForCheck();
  }

  @HostListener('document:keydown.enter')
  changePageByEnter() {
    this.onChangePage(this.page);
  }

  get isLastPage(): boolean {
    return this._isLastPage;
  }

  get lastPage(): number {
    return this._lastPage;
  }

  get pageInputWidth(): number {
    return this._pageInputWidth;
  }

  private setLastPage() {
    this._lastPage = Math.ceil(this.dataTotal / this.perPage);
    this._isLastPage = this.page === this._lastPage;
  }

  private setPageInputWidth() {
    this._pageInputWidth = this.pageInputControl.value.length * 10 + 24;
  }

  private setPageInputHeight() {
    this._pageInputHeight = (2 * this.fontSize) - 2;
  }

}
