import styles from './lesson13.module.css';
import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import * as Yup from 'yup';

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

// * валидация данных в форме
// .number() - проверка, что это число
// .typeError('текст сообщения') - сообщение об ошибке в случае несоответствия типа
// .required('текст сообщения') - проверка, что поле заполнено и не пустое
// .integer('текст сообщения') - целочисленное значение
// .positive('текст сообщения') - проверка что число больше 0
// .email('текст сообщения') - проверка что строка по символам соответствует формату электронной почты
// .boolean() - проверка типа на булевое значение
// .date() - проверка соответствию формату даты


const schema = Yup.object().shape({
  model: Yup
    .number()
    .typeError('model is a number')
    .required('model is required')
    .integer('model is integer')
    .min(100, 'model number is more than 100')
    .max(2000, 'model number is less than 2000...'),
  creator: Yup
    .string()
    .required('company name is required'),
  email: Yup
    .string()
    .required('email is required')
    .email('incorrect email format')
    .max(50, 'less than 50 symbols, please')
});


export default function Lesson13(): JSX.Element {

  const formik = useFormik({
    initialValues: {
      model: '',
      creator: '',
      email: ''
    } as IFormValues,
    // отключаем валидацию по умолчанию на изменение в input
    // теперь сообщение об ошибке возникнет только по нажатию на кнопку
    validateOnChange: false,
    // подключаем схему валидации к форме
    validationSchema: schema,
    // вторым аргументом получем объект с методами
    // деструктуризируем и получаем resetForm
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // метод для очистки формы
      resetForm();
    }
  });

  return (
    <div className={styles.lessonContainer}>
      <h2>Lesson 13: Yup</h2>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input value={formik.values.model} onChange={formik.handleChange} placeholder="robot model" type="text" name="model" />
        <input value={formik.values.creator} onChange={formik.handleChange} placeholder="creator name" type="text" name="creator" />
        <input value={formik.values.email} onChange={formik.handleChange} placeholder="company email" type="text" name="email" />
        <MyButton type="submit" text="send" />
      </form>
      <span className={styles.errorMessage}>{formik.errors.model}</span>
      <span className={styles.errorMessage}>{formik.errors.creator}</span>
      <span className={styles.errorMessage}>{formik.errors.email}</span>
    </div>
  );
}
