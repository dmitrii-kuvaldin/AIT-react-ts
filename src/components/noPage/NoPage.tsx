import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div>
      <h2>404: no such page 😵‍💫</h2>
      {/* ссылка на главную страницу */}
      <Link to='/'>To home page 🏡</Link>
    </div>
  )
}
