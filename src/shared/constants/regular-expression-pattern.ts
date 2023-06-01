export const regularExpressionPattern = {
  regNoUpperCaseLetter: /^[^A-ZА-ЯЁ]+$/,
  regNoLatLetter: /^[^a-zA-Z]+$/,
  regNoNumber: /^[\D]+$/,
  passwordMore8SymbolsWithNumAndUpperCaseRegPattern: /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-ЯёЁ])[а-яА-ЯёЁa-zA-Z\d]{8,}$/,
  emailRegPattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
  userNameLatinAndNumberRegPattern: /^(?=\w*(?!\d)\w)(?=\w*\d)(?=((?!_)\w)+$)\w+/i,
  phoneBYRegPattern: /[+]?(375)[\s][(](29|25|33|44)[)][\s][\d]{3}[-][\d]{2}[-][\d]{2}/,
  phoneBYMaskPattern: [
    '+',
    '3',
    '7',
    '5',
    ' ',
    '(',
    /[2-4]/,
    /[3-5,9]/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ],
};
