import * as moment from 'moment';

const translationData: { [key: string]: string } = {
  'Monday': 'Poniedziałek',
  'Tuesday': 'Wtorek',
  'Wednesday': 'Środa',
  'Thursday': 'Czwartek',
  'Friday': 'Piątek',
  'Saturday': 'Sobota',
  'Sunday': 'Niedziela'
};
export const translateDayToPolish = (day: string) => translationData[day];
export const getDayFromDate = (date: Date) => moment(date).format('dddd');
export const formatDate = (date: Date) => moment(date).format('DD-MM-YYYY');
export const getKeys = (ob: any) => Object.keys(ob).sort();
export const getTime = (date: Date) => moment(date).format('HH:mm');
