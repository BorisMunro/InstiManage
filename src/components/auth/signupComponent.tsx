"use client"
import { useState } from 'react';

import { signupFields } from './formfields';

import FormAction from './formAction';
import Input from '../general/input';

const fields = signupFields;
let fieldsState: any = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function SignupComponent() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange=(e : React.ChangeEvent<HTMLInputElement>)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
    )
}