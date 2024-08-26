import Contact from "../Contact/Contact";
// import { selectContacts } from "../../redux/contactsSlice";
import css from './ContactList.module.css'
// import { useSelector } from "react-redux";

const ContactList = ({
    cards,
    deleteCard,
}) => {
    // const contacts = useSelector(selectContacts)
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