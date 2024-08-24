import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import { useEffect } from "react";
function App() {
  const [cards, setCards] = useState(() => {
    
   const getCards = window.localStorage.getItem("cards");
    if (getCards) {
      return JSON.parse(getCards);
    }
    return ([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ])
  });
  const [filter, setFilter] = useState("")
  const handleChange = (evt) => {
    setFilter(evt.target.value);
   
    // setCard(card.filter(card => ))
  };
  function addCard({userName, userNumber})  {
    setCards([...cards, { id: nanoid(), name: userName, number: userNumber }])
  }
  const filteredCards = cards.filter((card) => card.name.toLowerCase().includes(filter.toLowerCase()))
  function deleteCard(item) {
    setCards(cards.filter((card) => card.id !== item.id));
    
  }
useEffect(() => {
  window.localStorage.setItem("cards", JSON.stringify( cards ));
}, [cards]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addCard={addCard} />
      <SearchBox value={filter} onChange={handleChange} />
      <ContactList cards={filteredCards} deleteCard={deleteCard} />
    </div>
  );
}

export default App;
