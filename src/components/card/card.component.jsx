import './card.styles.css';

const Card = ({name, email,id}) => {
  return(
    <div className='card-container'>
    <img src={`https://robohash.org/${id}?set=set4`} />
    <h2>{name}</h2>
    <h3>{email}</h3>
    </div>
  )
};

export default Card;