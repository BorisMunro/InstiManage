"use client"
import {useState, useEffect} from 'react'

import { loginFields } from './formfields'
import Input from '../general/input'
import { useRouter } from 'next/navigation'

import FormAction from './formAction'
import FormExtra from './formExtra'

import { login, useDispatch, useSelector, clearMessage, setMessage} from '@/lib/redux';

const fields = loginFields;
let fieldsState: any = {
    
};

fields.forEach(field => fieldsState[field.id]='');

export default function LoginComponent(){
    
    const router = useRouter()

    const [loginState,setLoginState]=useState(fieldsState);
    const [successful, setSuccessful] = useState(false)
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
        if (successful) {
          router.push('/');
        }
      }, [dispatch, successful]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({...loginState,[e.target.id]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        authenticateUser();
    }

    const authenticateUser = () => {
    const {email,  password } = loginState;
    dispatch(login({email, password}))
      .then(() => {
         setSuccessful(true);     
      })
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                                customClass=''
                        />
                    
                    )
                }
            </div>
            <FormExtra/>
            <FormAction handleSubmit={handleSubmit} text="Login"/>
      </form>
    )
}