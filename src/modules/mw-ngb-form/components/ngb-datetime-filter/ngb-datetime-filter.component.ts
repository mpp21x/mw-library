import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import * as moment from 'moment';
import {MOMENT_YYYYMMDDHHMMSS} from '../../../../lib/date/common-date-format';
import {IDatetimeEvent} from '../../lib/ngb-datetime-filter/i-datetime-event';

@Component({
  selector: 'mw-ngb-datetime-filter',
  templateUrl: './ngb-datetime-filter.component.html',
  styleUrls: ['./ngb-datetime-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgbDatetimeFilterComponent {

  @Input() startDateTime: string;
  @Input() endDateTime: string;
  @Input() format: 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD' = MOMENT_YYYYMMDDHHMMSS;
  @Input() maxRange: {
    value: number,
    unit: 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second',
  } = null;

  @Output() changeDatetime = new EventEmitter<IDatetimeEvent>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  onChangeDatetime(datetime: string, from: 'start' | 'end') {
    const isStartDate = from === 'start';
    const event = {} as IDatetimeEvent;

    if (isStartDate) {
      this.startDateTime = datetime;
      event[`startDateTime`] = this.startDateTime;
    } else {
      this.endDateTime = datetime;
      event[`endDateTime`] = this.endDateTime;
    }

    const isNeedAutoChange =
      (
        this.hasMaxRange &&
        moment(this.endDateTime).diff(moment(this.startDateTime)) > moment(this.startDateTime).add(this.maxRange.value, this.maxRange.unit).diff(moment(this.startDateTime))
      ) || moment(this.endDateTime).diff(moment(this.startDateTime)) < 0;

    if (isNeedAutoChange) {
      if (isStartDate) {
        this.endDateTime = moment(this.startDateTime).add((this.maxRange?.value ? this.maxRange.value : 30), (this.maxRange?.unit ? this.maxRange.unit : 'minute')).format(this.format);
        event[`endDateTime`] = this.endDateTime;
      } else {
        this.startDateTime = moment(this.endDateTime).subtract((this.maxRange?.value ? this.maxRange.value : 30), (this.maxRange?.unit ? this.maxRange.unit : 'minute')).format(this.format);
        event[`startDateTime`] = this.startDateTime;
      }
    }

    this.changeDatetime.emit(event);
  }

  daysAgo(days: number) {
    this.startDateTime = moment().subtract(days, 'day').format(this.format);
    this.endDateTime = moment().format(this.format);

    this.changeDatetime.emit({
      startDateTime: this.startDateTime,
      endDateTime: this.endDateTime,
    });
    this.changeDetectorRef.markForCheck();
  }


  get hasMaxRange(): boolean {
    return !!this.maxRange?.value;
  }

}
