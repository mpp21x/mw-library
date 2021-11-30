import * as moment_ from 'moment';

const moment = moment_;

export function oneDayPeriod(date: moment.Moment): [string, string] {
  return [
    date.format('YYYY-MM-DDT00:00:00'),
    date.format('YYYY-MM-DDT23:59:59'),
  ];
}

export function fromStartToEndPeriod(startDateTime: string, endDateTime: string): [string, string] {
  return [
    moment(new Date(startDateTime)).format('YYYY-MM-DDT00:00:00'),
    moment(new Date(endDateTime)).format('YYYY-MM-DDT23:59:59'),
  ];
}

export function startDay(dateTime: string) {
  return moment(new Date(dateTime)).format('YYYY-MM-DDT00:00:00');
}

export function endDay(dateTIme: string) {
  return moment(new Date(dateTIme)).format('YYYY-MM-DDT23:59:59');
}
