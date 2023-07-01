import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type removePayload = {
id:number
}

type increaseQuanityPayload = {
ProductId:number
}
export type cart = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quantity: number;
}
export type cartobj = {
    [productid: string]: cart

};
const Cartdata: cartobj = JSON.parse(localStorage.getItem("cart") || "{}") || {};

export const cartSlice = createSlice({
    name: "cart",
    initialState: Cartdata,
    reducers: {
        addItem: (state, action: PayloadAction<cart>) => {   
            state[action.payload.id] = action.payload
            if(!localStorage.getItem("cart")){
             localStorage.setItem("cart",JSON.stringify(state))   
            }
        },
        removeItem: (state,action:PayloadAction<removePayload>) => {
            delete state[action.payload.id]
            localStorage.setItem("cart",JSON.stringify(state))
        },
        increaseQuantity:(state,action:PayloadAction<increaseQuanityPayload>)=>{
            state[action.payload.ProductId].quantity +=1
        },
        decreaseQuantity:(state,action:PayloadAction<increaseQuanityPayload>)=>{
            state[action.payload.ProductId].quantity -=1
        },
    },
});

export const { addItem, removeItem ,increaseQuantity,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer