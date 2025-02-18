import styles from './genderForm.module.css'
import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";
import { useState } from "react";

// интерфейс для значений формы
interface IFormValues {
  name: string;
}

// интерфейс для данных из api
interface IFormData {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

// начальное значение для state
const initialData:IFormData = {
  count: 0,
  name: "",
  gender: "",
  probability: 0
}

export default function GenderForm(): JSX.Element {
  // ! переменная состояния для хранения данных с формы
  const [genderData, setGenderData] = useState<IFormData>(initialData)

  // асинхронная функция для данных из API
  const fetchGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    const data:IFormData = await res.json()
    // записали данные в переменную состояния
    setGenderData(data)
  }

  // объект для работы с формой
  const formik = useFormik({
    initialValues: {
      name: ''
    } as IFormValues,
    onSubmit: (values) => {
      // ! здесь происходит обращение к API
      fetchGender(values.name)
    }
  });


  return (
    <div>
      <h3>Gender analyze ✨ </h3>
      <form className={styles.genderForm} onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} value={formik.values.name} type="text" placeholder="type your name" name="name" />
        <button type="submit">send request</button>
      </form>
      {/* отображаем данные только когда они пришли в genderData */}
      {genderData.name && (
        <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '🙋‍♀️'} {genderData.probability * 100}%</p>
      )}
    </div>
  );
}
