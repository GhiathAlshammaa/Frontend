export const ExtractData = (res: any) => {
  let body = res;

  // Check the Movies Array in the Console
  // console.log(body);
  return body.results || {};
};
export const SubtractDates = (date) => {
  const today = new Date();
  const movieDate = new Date(date as string);

  const Time = today.getTime() - movieDate.getTime();
  const Days = Math.round(Time / (1000 * 3600 * 24));

  // Check the Result
  // console.log(today);
  // console.log(movieDate);
  // console.log(`Result: ${Days}`);

  return Days;
};
