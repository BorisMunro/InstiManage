/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import exchangeService from '@/services/exchange/service'
export const createExchange = createAppAsyncThunk(
    'exchange/register',
        async ({
            exchangerMember, 
            exchanger, 
            openDate,
            closeDate,
            accountBallance,
            lastModifiedDate,
            status,
        } : 
            {
                exchangerMember: string, 
                exchanger: string, 
                openDate: Date,
                closeDate?: Date,
                lastModifiedDate?: Date,
                accountBallance: number,
                status: string,
            }, thunkAPI) => {
                try {
                    const response = await exchangeService.create( exchangerMember, 
                        exchanger, 
                        openDate,
                        closeDate,
                        lastModifiedDate,
                        accountBallance,
                        status)

                    //thunkAPI.dispatch(setMessage(response.data.message))
                    return response.data;
                } catch (error: any) {
                    
                }
  
      
        }
)
export const getAllExchanges = createAppAsyncThunk(
    'exchange/getAll',
        async (thunkAPI) => {
                try {
                    console.log('asfd')
                    const response = await exchangeService.getAll() 
                    console.log('response', response.data);
                    return response.data;
                } catch (error: any) {
                    
                }
  
      
        }
)
export const deleteExchange = createAppAsyncThunk(
    'exchange/delete',
        async ({
           _id
        } : 
            {
                _id: string
            }, thunkAPI) => {
                try {
                    const response = await exchangeService.deleteEx(_id)
                    return response.data;
                } catch (error: any) {
                    
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



