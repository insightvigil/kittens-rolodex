import './card-list.styles.css';
import Card from '../card/card.component';


const CardList = ({kittens}) => {
    return(
        <div className='card-list-container'>
            {kittens.map(({id, name,email}, index) => (
            <Card key={`${name}-${index}`} name={name} email={email} id={id}></Card>
            ))}
        </div>
    )
}

export default CardList;