import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'


export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showModal: false
    },
  
    reducers: {
      setModalValue: (state, action) => {
          return action.payload;
      },
  
    },
  
  })
  
  // Action creators are generated for each case reducer function
  export const { setModalValue } = modalSlice.actions
  
  export default modalSlice.reducer