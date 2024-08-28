import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
// import { useDispatch,useSelector } from "react-redux";
// import { selectContacts } from "./redux/contactsSlice";
// import { setFilterValue } from "./redux/filtersSlice";
function App() {
  // const dispatch = useDispatch()
  // const filterValue = useSelector((state) => state.filter.filterValue)
  // const handleChange = (evt) => {
  //  const value=  setFilterValue(evt.target.value);
  //  dispatch(value)
  // };
  // const contacts = useSelector(selectContacts)
  // const filteredCards = contacts.filter((card) => card.name.toLowerCase().includes(filterValue.toLowerCase()))
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      <ContactList   />
    </div>
  );
}

export default App;
