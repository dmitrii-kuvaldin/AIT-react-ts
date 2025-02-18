import styles from './lesson16.module.css';

import ChildrenProps from "../../components/childernProps/ChildrenProps";
import MyButton from "../../components/myButton/MyButton";
import MyInput from "../../components/myInput/MyInput";
import { useFormik } from "formik";
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('type valid email')
    .required('email is required field'),
  password: Yup.string()
    .min(8, 'password need more than 8 symbols')
    .required('password is required field')
});

export default function Lesson16(): JSX.Element {

  const formik = useFormik({
    initialValues: {
      email: 'formik@gmail.com',
      password: 'formik123'
    } as { email: string; password: string; },
    validateOnChange: false,
    // подключаем валидацию
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  return (
    <div className={styles.lessonContainer}>
      <h2>Lesson 16: practice before test</h2>
      <ChildrenProps func={() => console.log('много разных пропсов 🙇‍♂️')} >
        {/* обернутые данные придут на место children */}
        <p style={{ color: 'red' }}>переданные данные</p>
        <ul>
          <li style={{ listStyle: 'none' }}>данные из lesson 16</li>
          <li style={{ listStyle: 'none' }}>можно передать много данных</li>
        </ul>
      </ChildrenProps>
      <h2>2. Input components + formik</h2>
      <form style={{ width: '300px' }} onSubmit={formik.handleSubmit}>
        <MyInput formik={formik} name="email" placeholder="email" label="type your email please" />
        <MyInput formik={formik} name="password" placeholder="password" label="type your secret pass" />
        <MyButton text="sign in" />
      </form>
    </div>
  );
}
