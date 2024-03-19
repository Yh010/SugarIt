import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartItems: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, price,title } = action.payload;
            state.cartItems.push({ id, price,title });
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload.id)
        },
    }
})


export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer;