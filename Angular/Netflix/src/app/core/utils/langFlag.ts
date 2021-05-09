export const LangFlag = (lang): string => {
  // const movieDate = new Date(date as string);

  switch (lang) {
    case 'en':
      return 'gb';
    case 'ja':
      return 'jp';
    case 'zh':
      return 'cn';
    case 'ko':
      return 'kr';
    case 'ko':
      return 'kr';
    case 'hi':
      return 'in';
    default:
      return lang;
  }
};
