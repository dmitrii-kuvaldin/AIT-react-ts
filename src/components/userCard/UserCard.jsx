import './userCard.css';

function UserCard({name, age, hobby}) {
  return (
    <div className="userCard">
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      {/* если props.hobby - true, то часть выражения после && будет показана */}
      {/* {props.hobby && (<p>Hobby: {props.hobby}</p>)} */}
      {/* если использовать тернарный оператор, то нужно указывать второе значение, если false */}
      {hobby ? (<p>Hobby: {hobby}</p>) : (<p>No hobby 🙇‍♂️</p>)}
    </div>
  );
}

export default UserCard;
