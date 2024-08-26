import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: [],
  // Об'єкт редюсерів
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});
 export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts;
// Редюсер  слайсу
export const contactsReducer = contactsSlice.reducer;
