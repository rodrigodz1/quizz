import ITheme from './dtos/ITheme';

export default {
  title: 'dark',

  colors: {
    green: '#01E9B5',
    lightGreen: '#A4FFEB',
    darkGreen: '#00BC92',

    red: '#EB5757',
    lightRed: '#FF8F8F',
    darkRed: '#c53030',

    purple: '#7051DC',
    lightPurple: '#D2C5FF',

    orange: '#FF9000',
    lightOrange: '#FFD8A5',

    blue: '#4198F7',
    lightBlue: '#96C8FF',

    background: '#312E38',
    backgroundSecondary: '#3E3B47',

    backgroundGray: '#ecf0f5',

    text: '#f5ede8',
    lightText: '#A3A8B0',
    veryLightText: '#DDDDDD',
  },

  gradients: {
    green: 'linear-gradient(145.03deg, #01e9b5 -31.84%, #40ddff 137.87%)',
    blue: '#00c9ff',
    red: 'linear-gradient(to left, #ff512f, #dd2476)',
    orange: 'linear-gradient(to right, #ff512f, #f09819)',
    skyblue: 'linear-gradient(to right, #a8c0ff, #3f2b96)',
  },
} as ITheme;
