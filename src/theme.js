// import { orange } from '@material-ui/core/colors';
import { createMuiTheme } from "@material-ui/core/styles";

const defaultFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
]

const normalFont = [
  '"Yu Gothic Medium"',
  'YuGothic',
  'Meiryo', 
  'sans-serif'
];
const boldFont = [
  '"Yu Gothic"',
  'YuGothic',
  'Meiryo', 
  'sans-serif'
]

const Emoji = [
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
]

// A custom theme for this app
const appTheme = createMuiTheme({
  typography: {
    fontFamily: defaultFontFamily.concat(normalFont, Emoji).join(','),
    h4: {
      fontWeight: 700,
      fontFamily: defaultFontFamily.concat(boldFont, Emoji).join(','),
    },
    button: {
      // ボタンの文字が小文字から大文字に変換されるのを防ぐ
      textTransform: "none",
    },
  },
});

export default appTheme;
