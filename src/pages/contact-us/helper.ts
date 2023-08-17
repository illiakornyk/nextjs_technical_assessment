import { FormData } from 'pages/contact-us';

export const composeMessage = (data: FormData): string => {
  let message = '';
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      message += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${
        data[key as keyof FormData]
      }\n`;
    }
  }
  return message;
};
