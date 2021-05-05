import { Staff } from '../models';

export const ExtractData = (res: any) => {
  let body = res;
  // console.log(`Body: ${JSON.stringify(body)}`);
  return body.results || {};
};
export const ExtractDataCredits = (res: any): Staff[] => {
  let body = res;
  let staff: Staff[];

  staff = body.cast.slice(0, 7);
  staff.unshift(...body.crew.filter((x) => x.job === 'Director'));

  return staff;
};


