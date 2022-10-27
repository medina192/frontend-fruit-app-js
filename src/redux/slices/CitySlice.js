import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'



export const citySlice = createSlice({
    name: 'city',
    initialState: {
        cities: [ { name: "", _id: ""} ],
        citySelected: { name: "", _id: ""}
    },
  
    reducers: {
      setCities: (state, action) => {
          return action.payload;
      },
  
      setCitySelected: (state, action) => {
        return action.payload
      },
  
    },
  
  })
  
  // Action creators are generated for each case reducer function
  export const { setCities, setCitySelected } = citySlice.actions
  
  export default citySlice.reducer