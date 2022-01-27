import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {NgbDatepicker, NgbDatepickerI18n, NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {PopupWindow} from '../../../event-listener/lib/popup-window';
import {GlobalClickEventListener} from '../../../event-listener/lib/global-click-event-listener';
import {ValidatorsCheckDate} from '../../../form/validators/validators-check-date';
import {cleanSubscriptionToUnsub} from '../../../../lib/rxjs/helpers';
import {fillZeroWhenLessThanTen} from '../../../../lib/utils/fill-zero-when-less-than-ten';

@Component({
  selector: 'mw-bootstrap-datetime-picker',
  templateUrl: './bootstrap-datetime-picker.component.html',
  styleUrls: ['./bootstrap-datetime-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapDatetimePickerComponent extends PopupWindow implements OnInit, OnChanges, OnDestroy {

  @Input() timestamp = '';
  @Input() format: 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD' = 'YYYY-MM-DD HH:mm:ss';
  @Output() datetimeChange = new EventEmitter<string>();

  ngbDate: NgbDateStruct;
  ngbTime: NgbTimeStruct;
  readonly formControl: FormControl;

  @ViewChild('tNgbDatepicker', {static: true}) tNgbDatepicker: NgbDatepicker;

  readonly subscriptions: Subscription[] = [];

  constructor(
    ngbDatepickerI18n: NgbDatepickerI18n,
    readonly changeDetectorRef: ChangeDetectorRef,
    readonly listener: GlobalClickEventListener,
    readonly elementRef: ElementRef
  ) {
    super(listener);
    ngbDatepickerI18n.getMonthShortName =
      month => ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'][month - 1];
    ngbDatepickerI18n.getWeekdayLabel =
      weekday => ['一', '二', '三', '四', '五', '六', '日'][weekday - 1];
    this.formControl = new FormControl(
      moment().format(this.format),
      [ValidatorsCheckDate(this.format)]
    );
    this.subscribeClick(elementRef);

  }

  ngOnInit(): void {
    const formControl = this.formControl;
    this.setNgbDatetimePicker(this.formControl.value);
    this.subscriptions.push(formControl.valueChanges
      .pipe(
        filter((value: string) => moment(value, this.format, true).isValid()),
      )
      .subscribe((value) => {
        if (formControl.valid) {
          this.setNgbDatetimePicker(value);
          this.datetimeChange.emit(value);
        }
      }));

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('timestamp') && this.timestamp) {
      this.formControl.setValue(this.timestamp);
    }
  }


  ngOnDestroy(): void {
    cleanSubscriptionToUnsub(this.subscriptions);
  }

  pickDatetime() {
    const value =
      `${this.ngbDate.year}-${fillZeroWhenLessThanTen(this.ngbDate.month)}-${fillZeroWhenLessThanTen(this.ngbDate.day)} ${fillZeroWhenLessThanTen(this.ngbTime.hour)}:${fillZeroWhenLessThanTen(this.ngbTime.minute)}:${fillZeroWhenLessThanTen(this.ngbTime.second)}`;
    this.formControl.setValue(value);
    this.changeDetectorRef.markForCheck();
  }

  setNgbDatetimePicker(value: string) {
    const datetime = value.split(' ');
    const date = datetime[0].split('-');
    const time = datetime[1].split(':');

    this.ngbDate = {
      year: +date[0],
      month: +date[1],
      day: +date[2]
    };

    this.tNgbDatepicker.navigateTo(this.ngbDate);

    this.ngbTime = {
      hour: +time[0],
      minute: +time[1],
      second: +time[2]
    };
    this.changeDetectorRef.markForCheck();
  }

  protected subscribeClick(element: ElementRef<Element>) {
    this.targetElement = element;
    cleanSubscriptionToUnsub([this.subscription]);
    this.subscription = this.listener.getObservable()
      .pipe(filter(this.isNeedToCollapseFn()))
      .subscribe(($event) => this.collapse($event));
  }

  protected isNeedToCollapseFn() {
    return (event: MouseEvent) => {
      const node = event.target as Node | Element;
      return event instanceof MouseEvent &&
        this.isExpand &&
        !this.elementRef.nativeElement.contains(node);
    };
  }

  @HostListener('document:keydown.enter', ['$event'])
  @HostListener('document:keydown.escape', ['$event'])
  keydownToCollapse() {
    this.collapse();
  }

  collapse(event?: MouseEvent){
    super.collapse(event);
    this.changeDetectorRef.markForCheck();
  }
}
