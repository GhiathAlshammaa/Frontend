import { Staff } from '../models';

export const ExtractData = (res: any) => {
  let body = res;

  return body.results || {};
};
export const ExtractDataCredits = (res: any): Staff[] => {
  let body = res;
  let staff: Staff[];

  staff = body.cast.slice(0, 7);
  staff.unshift(...body.crew.filter((x) => x.job === 'Director'));

  return staff;
};
export const SubtractDates = (date): number => {
  const today = new Date();
  const movieDate = new Date(date as string);

  const Time = today.getTime() - movieDate.getTime();
  const Days = Math.round(Time / (1000 * 3600 * 24));

  return Days;
};
