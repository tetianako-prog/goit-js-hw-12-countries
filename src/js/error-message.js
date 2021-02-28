import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const errorMessage = title =>
  error({
    title,
    delay: 1000,
  });

export default errorMessage;
