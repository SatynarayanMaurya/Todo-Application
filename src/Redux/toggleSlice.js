import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isSidebar:true,
    isLightMode:false,
    isMenu : false
}

const toggleSlice = createSlice({
    name:"toggleSlice",
    initialState,
    reducers:{
        setSidebar:(state)=>{
            state.isSidebar = !state.isSidebar
        },
        setLightMode:(state)=>{
            state.isLightMode = !state.isLightMode
        },
        setMenu:(state)=>{
            state.isMenu = !state.isMenu
        }
    }
})

export const {setSidebar,setLightMode,setMenu} = toggleSlice.actions;
export default toggleSlice.reducer;