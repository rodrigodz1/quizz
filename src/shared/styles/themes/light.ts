import ITheme from './dtos/ITheme';

export default {
  title: 'light',

  colors: {
    green: '#01E9B5',
    lightGreen: '#A4FFEB',
    darkGreen: '#00BC92',

    red: '#EB5757',
    lightRed: '#FFB2B2',
    darkRed: '#c53030',

    purple: '#7051DC',
    lightPurple: '#D2C5FF',

    orange: '#FF9000',
    lightOrange: '#FFD8A5',

    blue: '#4198F7',
    lightBlue: '#C2F5FF',

    background: '#F2F5FA',
    backgroundSecondary: '#FFFFFF',

    backgroundGray: '#ecf0f5',

    text: '#312E38',
    lightText: '#A3A8B0',
    veryLightText: '#DDDDDD',

    blueText: '#416888',
  },

  gradients: {
    green: 'linear-gradient(145.03deg, #01e9b5 -31.84%, #40ddff 137.87%)',
    blue: '#00c9ff',
    red: 'linear-gradient(to left, #ff512f, #dd2476)',
    orange: 'linear-gradient(to right, #ff512f, #f09819)',
    skyblue: 'linear-gradient(to right, #4e54c8, #7159c1)',
  },
} as ITheme;
