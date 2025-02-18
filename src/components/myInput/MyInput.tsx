import styles from './myInput.module.css';
// особый тип для объекта formik, который импортируем из библиотеки
import { FormikProps } from 'formik';

interface IMyInputProps {
  name: string;
  placeholder?: string;
  label?: string;
  type?: 'password' | 'email' | 'text' | 'number';
  // передаем весь объект formik
  formik: FormikProps<any>;
}

export default function MyInput({ name, type = 'text', placeholder = 'input text', label = 'label text', formik }: IMyInputProps): JSX.Element {
  // забираем из formik деструктуризацией данные
  const { handleChange, values, errors } = formik;
  return (
    <div className={styles.inputContainer}>
      {errors[name] ? <label className={styles.errorText}>{errors[name] as string}</label> : <label>{label}</label>}
      <input onChange={handleChange} value={values[name]} className={styles.myInput} placeholder={placeholder} name={name} type={type} />
    </div>
  );
}

