import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
const ContactList = ({
    cards,
    deleteCard,
}) => {
    return (
        <ul className={css.list}> 
            {cards.map(card => (
                <li key={card.id}>
                    <Contact number={card.number} name={card.name} deleteCard={()=>deleteCard(card)} />
            </li>
            ))}
            
        </ul>
    )
}
export default ContactList