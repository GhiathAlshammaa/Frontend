export const ExtractData = (res: any) => {
  let body = res;

  // check the Movies Array in the Console
  // console.log(body);
  return body.results || {};
};
