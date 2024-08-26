import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: { items: [] },
  // Об'єкт редюсерів
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
});
 export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
// Редюсер  слайсу
export const contactsReducer = contactsSlice.reducer;
