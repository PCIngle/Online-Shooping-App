import {createSlice} from '@reduxjs/toolkit'


const userSlice=createSlice({
        name:"user",
        initialState:{
                currentUser:null,
                isFectching:false,
                error:false
        },
        reducers:{
               loginIni:(state)=>{state.isFectching=true},
               loginSuccess:(state,action)=>{state.isFectching=false;
                                      state.currentUser=action.payload
                                         },
               loginFail:(state)=>{state.isFectching=false;
                                      state.error=true  ;
                                      },
        }
})

export const {loginIni,loginSuccess,loginFail}=userSlice.actions
export default userSlice.reducer;