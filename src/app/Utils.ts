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
export const getMonday = () => {
  const now = moment();
  const diff = now.day() === 0 ? 1 : 8 - now.day();
  return now.add({days: diff}).set('hours', 9).set('minutes', 0).set('seconds', 0).format('YYYY-MM-DDTHH:mm:ss');
};
