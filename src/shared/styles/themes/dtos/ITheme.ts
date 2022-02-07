export default interface ITheme {
  title: string;

  colors: {
    [key: string]: string;
  };

  gradients: {
    [key: string]: string;
  };
}
