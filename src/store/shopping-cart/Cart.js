import {createSlice} from "@reduxjs/toolkit";


const items = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : [];
const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount")) : 0;
const totalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem("totalQuantity")) : 0;

const initialState = {
    cartItems :items,
    totalQuantity:totalQuantity,
    totalAmount:totalAmount
}

const setItemFunc = (item,totalAmount,totalQuantity) =>{
    localStorage.setItem("cartItems",JSON.stringify(item));
    localStorage.setItem("totalAmount",JSON.stringify(totalAmount));
    localStorage.setItem('totalQuantity',JSON.stringify(totalQuantity))
}


export const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addItem(state,action){
            const newItem = action.payload
            const existingItem = state.cartItems.find(item=>item.id === newItem.id)
            state.totalQuantity++;

           if(!existingItem){
            state.cartItems.push({
                id:newItem.id,
                name:newItem.name,
                imageO1:newItem.imageO1,
                price:newItem.price,
                desc:newItem.desc,
                qty:1,
                totalPrice:newItem.price
            });
           }else{
                existingItem.qty++
                existingItem.totalPrice = 
                    Number(existingItem.totalPrice)+ Number(newItem.price)
           }

            state.totalAmount = state.cartItems.reduce((total,item)=>
                    total + Number(item.price) * Number(item.qty),0
            );

            setItemFunc(
                state.cartItems.map((item)=>item),
                state.totalAmount,
                state.totalQuantity
            )
        },
        removeItem(state,action){
          const id = action.payload;
          const existingItem = state.cartItems.find((item)=>item.id === id);
          state.totalQuantity--;

          if(existingItem.qty === 1){
            state.cartItems = state.cartItems.filter((item)=>item.id !== id)
          }else{
            existingItem.qty--;
            existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
          }

          state.totalAmount = state.cartItems.reduce((total,item)=>
          total = Number(item.price) * Number(item.qty)
          ,0)

          setItemFunc(
            state.cartItems.map((item)=>item),
            state.totalAmount,
            state.totalQuantity
          )
        },
        deleteItem(state,action){
            const id = action.payload;
            const existingItem = state.cartItems.find((item)=>item.id === id);
            if(existingItem){
                state.cartItems = state.cartItems.filter((item)=>item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.qty;
            }
            state.totalAmount = state.cartItems.reduce((total,item)=>
            total = Number(item.price) * Number(item.qty),0) 

            setItemFunc(
                state.cartItems.map((item)=>item),
                state.totalAmount,
                state.totalQuantity
            )
        }
    }
})

export  const cartActions = cartSlice.actions;
export default cartSlice