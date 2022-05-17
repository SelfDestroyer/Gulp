import replace from 'gulp-replace'; // Пошук та заміна шляхів
import plumber from 'gulp-plumber'; // Обробка помилок
import notify from 'gulp-notify'; // Повідомлення (підсказки)
import browserSync from 'browser-sync'; // Локальний сервер
import newer from 'gulp-newer'; // Перевірка змінених картинок
import ifPlugin from 'gulp-if';

// Експортуємо об'єкт
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin,
};
