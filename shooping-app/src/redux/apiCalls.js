import { loginFail, loginIni, loginSuccess } from "./user"
import { publicReq} from '../reqMethods'

export const login=async (dispatch,user)=>{
        dispatch(loginIni());
        try {
                const res=await publicReq.post('/auth/login',user)
                dispatch(loginSuccess(res.data))
        } catch (error) {
              dispatch(loginFail())  
        }
}