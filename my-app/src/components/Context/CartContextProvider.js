import React,{useReducer} from 'react';

const initialState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
}

const sumItems=(item)=>{
    const itemscounter=item.reduce((total,product)=>total+product.quantity,0)
    const total=item.reduce((total,product)=>total+product.price*product.quantity,0).toFixed(2)
    return {itemscounter,total}
}

const cartReducer=(state,action)=>{
    switch(action.type){
    case "ADD_ITEM":
        if(!state.selectedItems.find(item=>item.id===action.payload.id)){
            state.selectedItems.push({
                ...state,
                ...action.payload,
                quantity:1
            })
        }
        return{
            ...state,
            selectedItems:[...state.selectedItems],
            ...sumItems(state.selectedItems),
            checkout:false
        }
    case "REMOVE_ITEM":
        const newSelectedItems=state.selectedItems.filter(item=>item.id!==action.payload.id);
        return{
            ...state,
            selectedItems:[...newSelectedItems],
            ...sumItems(state.selectedItems)
        }
    case "INCRISE":
        const indexI=state.selectedItems.findIndex(item=>item.id===action.payload.id)
        state.selectedItems[indexI].quantity++;
        return{
            ...state,
            ...sumItems(state.selectedItems)
        }
    case "DECRISE":
        const indexD=state.selectedItems.findIndex(item=>item.id===action.payload.id)
        state.selectedItems[indexD].quantity--;
        return{
            ...state,
            ...sumItems(state.selectedItems)
        }
    case "CHECKOUT":
        return{
            selectedItems:[],
            itemsCounter:0,
            total:0,
            checkout:true
        }
    case "CLEARE":
        return{
            selectedItems:[],
            itemsCounter:0,
            total:0,
            checkout:false
        }
    }
}

export const CartContext=React.createContext()

const CartContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(cartReducer,initialState)
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;