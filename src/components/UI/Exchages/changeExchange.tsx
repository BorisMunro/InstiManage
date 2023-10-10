"use client"
import {useState} from 'react'

import Input from '../../general/input'
import { createExchange, useDispatch } from '@/lib/redux';

const fields = [
    {
        labelText: "exchanger",
        labelFor: "exchanger",
        id: "exchanger",
        name: "exchanger",
        type: "text",
        autoComplete: "exchanger",
        isRequired: true,
        placeholder: "Exchanger"   
    },
    {
        labelText: "exchangerMember",
        labelFor: "exchangerMember",
        id: "exchangerMember",
        name: "exchangerMember",
        type: "text",
        autoComplete: "exchangerMember",
        isRequired: true,
        placeholder: "exchanger Member"   
    },
    {
        labelText: "accountBallance",
        labelFor: "accountBallance",
        id: "accountBallance",
        name: "accountBallance",
        type: "number",
        autoComplete: "accountBallance",
        isRequired: true,
        placeholder: "accountBallance"   
    },
]

let fieldsState: any = {
    
};

fields.forEach(field => fieldsState[field.id]='');

export default function ChangeExchage() {
    const [loginState,setLoginState]=useState(fieldsState);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({...loginState,[e.target.id]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        create();
    }
    const create = () => {
        const sampleData = {
            exchangerMember: loginState.exchangerMember,
            exchanger: loginState.exchanger,
            openDate: new Date(),
            accountBallance: loginState.accountBallance,
            status: 'new',
        }
        console.log(sampleData);
        dispatch(createExchange(sampleData));
    }
    return (
        <form className="mt-8 space-y-6 w-1/3 mx-auto" onSubmit={handleSubmit}>
            <div className="space-y-6">
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
                                customClass='mt-5'
                        />
                    
                    )
                }
            </div>
        <button 
            className="bg-green-400 py-3 rounded-3xl w-full"
            type="submit"
            >
                Add Exchage
        </button>
  </form>
    )
}