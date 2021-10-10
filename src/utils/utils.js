import { 
  format, 
  intervalToDuration,
} from 'date-fns';
import russianLocale from 'date-fns/locale/ru';

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  return format(date, 'd MMM, HH:mm', {
    locale: russianLocale
  });
}

export const formatDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const duration = intervalToDuration({
    start: startDate,
    end: endDate,
  })

  const { hours, minutes } = duration;

  return `${hours} ч ${String(minutes).padStart(2, '0')} мин`;
}

export const debounce = (func, time) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(func.bind(func, args), time);
  }
}

const generateBoolean = () => {
  return Math.random() > 0.5;
}

export const asyncRequest = (random = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = random ? generateBoolean() : true;
      if (!success) {
        return reject();
      }
      resolve();
    }, 1000);
  })

}

export const generateStatus = () => {
  const statuses = [
    'success',
    'fail',
    'pending'
  ]

  const randomId = Math.floor(Math.random() * statuses.length)
  return statuses[randomId];
}