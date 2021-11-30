import * as  moment from 'moment';

export function checkIsOverOneDay(startTime: moment.Moment, endTime: moment.Moment): boolean {
  let isOverOneDay = false;

  if (((endTime.diff(startTime) / 1000) >= (24 * 60 * 60))) {
    isOverOneDay = true;
  }

  return isOverOneDay;
}

/**
 * chart lab
 * @param startTime
 * @param endTime
 */
export function overOneDayFormatByDateTime(startTime: moment.Moment, endTime: moment.Moment) {
  return overOneDayFormat(checkIsOverOneDay(startTime, endTime));
}

export function overOneDayFormat(isOverOneDay: boolean) {
  return isOverOneDay ? 'YYYY-MM-DD HH:mm' : 'HH:mm:ss';
}
