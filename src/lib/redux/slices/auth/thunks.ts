/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

import authService from '@/services/auth/service';

import { setMessage } from '../message'

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAppAsyncThunk(
//   'counter/fetchIdentityCount',
//   async (amount: number) => {
//     const response = await authService.register(username, )
//     return response.data
//   }
// )
export const register = createAppAsyncThunk(
    'auth/register',
        async ({
            username, 
            email, 
            password } : 
            {
                username: string, 
                email: string
                password: string
            }, thunkAPI) => {
                try {
                    console.log('regester')
                    const response = await authService.register(username, email, password)
                    thunkAPI.dispatch(setMessage(response.data.message))
                    return response.data;
                } catch (error: any) {
                    const message = 
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString();
                      thunkAPI.dispatch(setMessage(message));
                      return thunkAPI.rejectWithValue(message);
                }
  
      
        }
)

export const login = createAppAsyncThunk(
    'auth/',
        async ({
            email, 
            password } : 
            {
                email: string, 
                password: string
            }, thunkAPI) => {
                try {
                    const data = await authService.login(email,  password)
                    console.log(data)
                    return {user: data};
                } catch (error: any) {
                    const message = 
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString();
                      thunkAPI.dispatch(setMessage(message));
                      return thunkAPI.rejectWithValue(message);
                }
        }
)



