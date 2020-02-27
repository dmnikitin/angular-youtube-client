const newDate: number = +new Date();
export const dateValues: { [key: string]: number } = {
  sixMonths: newDate - 15768000000,
  month: newDate - 2628000000,
  week: newDate - 604800000
};
export const colors: { [key: string]: string } = {
  red: '#A54342',
  blue: '#2F80EC',
  green: '#27AE61',
  gold: '#F2C94D',
  transparent: 'transparent'
};

export const numbers: { [key: string]: number } = {
  thousand: 1000,
  million: 1000000,
  billion: 1000000000
};
