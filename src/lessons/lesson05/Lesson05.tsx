import { useEffect } from "react";
import { fellowship } from './fellowship';
import './lesson05.css';

export default function Lesson05() {
  // этот useEffect с пустым массивом зависимостей сработает один раз при начале жизненного цикла компонента
  useEffect(() => {
    console.log('render lesson 5!');
  }, []);
  return (
    <div className="lesson-container">
      <h2>Lesson 05: React map() components</h2>
      <div className="heroGallery">
        {/* не забываем для созданного в итерации элмента использовать key rop в который передаем что-то уникальное от каждого элмента для измежаний возможных ошибок при отрисовке */}
        {fellowship.map(hero => (
          <div className="heroCard" key={hero.id}>
            <h3>{hero.name}</h3>
            <div className={`heroCardImgWrapper ${hero.isDark ? 'heroCardDark' : 'heroCardLight'}`}>
              <img src={hero.image} alt="" />
            </div>
            <p>{hero.age} years old</p>
            <p>{hero.isDark ? 'Villan 🔥' : 'Hero ✨'}</p>
            {/* <p>Weapons {hero.weapons.map(weapon => ' | ' + weapon )}</p> */}
            <p>Weapons: {hero.weapons.map((weapon, index) => index !== hero.weapons.length - 1 ? weapon + ", " : weapon)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
