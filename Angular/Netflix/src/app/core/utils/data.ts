import { Staff } from '../models';

export const ExtractData = (res: any) => {
  let body = res;

  // Check the Movies Array in the Console
  // console.log(body);
  return body.results || {};
};
export const ExtractDataCredits = (res: any): Staff[] => {
  let body = res;
  let staff: Staff[];

  // Check the Movies Array in the Console
  staff = body.cast;
  staff.push(...staff, ...body.crew);
  // console.log(`Staff: ${JSON.stringify(staff)}`);

  return staff;
};
export const SubtractDates = (date): number => {
  const today = new Date();
  const movieDate = new Date(date as string);

  const Time = today.getTime() - movieDate.getTime();
  const Days = Math.round(Time / (1000 * 3600 * 24));

  // Check the Result
  // console.log(`Result: ${Days}`);

  return Days;
};
