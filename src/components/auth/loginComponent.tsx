"use client"
import {useState} from 'react'

import { loginFields } from './formfields'
import Input from '../general/input'

import FormAction from './formAction'
import FormExtra from './formExtra'

const fields = loginFields;
let fieldsState: any = {
    
};

fields.forEach(field => fieldsState[field.id]='');

export default function LoginComponent(){
    
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({...loginState,[e.target.id]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        authenticateUser();
    }

    const authenticateUser = () => {

    }

    return(
        <form className="mt-8 space-y-6">
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