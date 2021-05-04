import { environment } from '@src/environments/environment';

export const UrlGenerator = (urlKind, sectionName, restUrlValue = ''): string => {
  // # Todo
  // # collect the url's Material
  // Enviroment params
  const urlBase = environment.apiConfig.url;
  const urlConfigBase = environment.apiConfig.urlConfig;
  const apiKey = environment.apiConfig.apikey;

  // Input params
  // in argument

  // # combine them together
  let url = '';
  switch (urlKind) {
    case 'normal':
      url = `${urlBase}${sectionName}?api_key=${apiKey}${restUrlValue}`;
      break;
    case 'config':
      url = `${urlConfigBase}${sectionName}?api_key=${apiKey}${restUrlValue}`;
      break;
    default:
      return '';
  }

  // # output as String
  return url;
  // Check the Result
  // console.log(`Result: ${Days}`);

  return;
};
