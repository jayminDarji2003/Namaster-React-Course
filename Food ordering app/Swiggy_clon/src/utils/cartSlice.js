import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',  // slice name
    initialState: { // initial value of the slice
        items: [],
    },
    reducers: {  // modify our state
        addItem: (state, action) => {   // add to cart Reducer function
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {  // clear cart Reducer function
            state.items = [];  // making state empty
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;  // This is "reducer" not "reducers", remember this



// We are exporting two things
/*
if you don't know how we can exporting, see below you will understand

cartSlice = {
    actions:{
        addItem,
        removeItem,
        clearCart
    },
    reducer: reducers
}
*/