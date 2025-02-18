import styles from './lesson12.module.css';

import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";


interface IFormValues {
  firstname: string;
  lastname: string;
  email: string;
}

export default function Lesson12(): JSX.Element {
  // ! мы вызвали хук useFormik, передали в него объект с настройками для формы и результат положили в переменную formik для дальнейшей работы
  // ! Обязательные ключи объекта с настройками:
  // initialValues - начальные значения инпутов
  // onSubmit - действие, которое произойдет при событии submit

  const formik = useFormik({
    // начальные значения для input в форме
    initialValues: {
      firstname: 'john',
      lastname: 'doe',
      email: '123@email.com'
    } as IFormValues,
    // действие которое случится по нажатию на кнопку в форме
    onSubmit: (values: IFormValues) => {
      console.log(values);
    }
  });

  return (
    <>
      <h2>Lesson 12. Formik</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input onChange={formik.handleChange} value={formik.values.firstname} type="text" placeholder="firstname" name="firstname" />
        <input onChange={formik.handleChange} value={formik.values.lastname} type="text" placeholder="lastname" name="lastname" />
        <input onChange={formik.handleChange} value={formik.values.email} type="email" placeholder="email" name="email" />
        <MyButton type="submit" text="send data" />
      </form>
      <h3>Что нужно сделать чтобы форма заработала:</h3>
      <ol className={styles.formGuide}>
        <li>Установили formik через 'npm i formik'</li>
        <li>Создали объект formik в который присвоили результат вызова хука useFormik() c настройками в объекте</li>
        <li>В объекте два обязательных ключа: initialValues (начальные значения), onSubmit(действие формы)</li>
        <li>Для form добавили в onSubmit - formik.handleSubmit </li>
        <li>Для input добавили в onChange - formik.handleChange </li>
        <li>Для input в value добавили его значение через formik.values </li>
        <li>У input в поле name должно быть то же значение, что и соответствующий ключ в initialValues</li>
      </ol>
    </>
  );
}
