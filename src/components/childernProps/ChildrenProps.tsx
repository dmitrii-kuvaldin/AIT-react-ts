// import styles from './ChildrenProps.module.css'

import MyButton from "../myButton/MyButton";

interface IChildrenPropsProps {
  // заместо children придут теги с данными (верстка)
  children: React.ReactNode,
  func: () => void;
}

export default function ChildrenProps({ children, func }: IChildrenPropsProps): JSX.Element {
  return (
    <div>
      <h2>1. ChildrenProps:</h2>
      <p>данные ниже переданы через props children, которым мы описываем логику передачи данных в компонент через оборачивание открывающим и закрывающим тегами:</p>
      {children}
      <MyButton text="props!" func={func} />
    </div>
  );
}
