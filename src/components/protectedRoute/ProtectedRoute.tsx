// import styles from './ProtectedRoute.module.css'

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";


interface IProtectedRouteProps {
  // за место этого ключа придет обернутый в ProtectedRoute компонент
  outlet: JSX.Element;
}

export default function ProtectedRoute({ outlet }: IProtectedRouteProps): JSX.Element {
  // получаем user из redux
  const { user } = useAppSelector(state => state.auth);
  // проверяем наличие user с данными
  if (user.id) {
    // если данные по юзеру есть возвращаем обернутый компонент
    return outlet;
  }
  // если данных нет перенаправляем на login
  // специальный компонент для переадресации всей страницы в верстке
  return <Navigate to='/login'/>;
}
