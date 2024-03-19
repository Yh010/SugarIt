import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartItems: [{}]
}


export const cartSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducer: {
        addItem: (state, action) => {
            const item = {
                id: action.payload.id,
                price: action.payload.price
            }
            state.push(item);
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload.id)
        },
    }
})


export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer;