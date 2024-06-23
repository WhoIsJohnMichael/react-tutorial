import PropTypes from 'prop-types';
//prop-types doesnt break app but notify that theres type that is wrong.
export const Person = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.age}</p>
      <p>{props.isMarried ? "Married" : "Single"}</p>
      <div>
        {props.friends.map((friend, key)=>{
          return (
            <p key={key}>{friend}</p>
          )
        })}
      </div>
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string)
}