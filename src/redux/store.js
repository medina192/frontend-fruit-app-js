import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import UserSlice from './slices/UserSlice';
import FruitSlice from './slices/FruitSlice';
import CitySlice from './slices/CitySlice';
import ModalSlice from './slices/ModalSlice';



export const store = configureStore({
  reducer: {
    user: UserSlice,
    fruit: FruitSlice,
    city: CitySlice,
    modal: ModalSlice
    //messages: messagesSlice,
    //move: moveScreenSlice
  },
})
