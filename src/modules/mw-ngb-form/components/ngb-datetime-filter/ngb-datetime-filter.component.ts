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
    this.changeDatetime.emit(event);
  }

  daysAgo(days: number) {
    this.startDateTime = moment().subtract(days, 'day').format(MOMENT_YYYYMMDDHHMMSS);
    this.endDateTime = moment().format(MOMENT_YYYYMMDDHHMMSS);

    this.changeDatetime.emit({
      startDateTime: this.startDateTime,
      endDateTime: this.endDateTime,
    });
    this.changeDetectorRef.markForCheck();
  }
}
