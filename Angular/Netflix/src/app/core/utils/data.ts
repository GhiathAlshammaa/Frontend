export const ExtractData = (res: any) => {
  let body = res;
  // console.log(body);
  return body.results || {};
};
