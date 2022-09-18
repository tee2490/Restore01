//อ่านคุกกี้จาก Browser : https://stackoverflow.com/questions/51109559/get-cookie-with-react
export function getCookie(key: string) {
    const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }
  
  export function currencyFormat(amount: number) {
    return '$' + (amount/100).toFixed(2);
  }
