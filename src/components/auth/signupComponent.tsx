"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { signupFields } from './formfields';

import FormAction from './formAction';
import Input from '../general/input';

import { register, useDispatch, useSelector, clearMessage, setMessage} from '@/lib/redux';

const fields = signupFields;
let fieldsState: any = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function SignupComponent() {

  const router = useRouter()

  const [signupState, setSignupState] = useState(fieldsState);
  const  {message} = useSelector((state) => state.message);
  const [successful, setSuccessful] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
    if (successful) {
      router.push('/auth/login')
    }
  }, [dispatch, successful]);

  const handleChange=(e : React.ChangeEvent<HTMLInputElement>)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    createAccount()
  }

  const createAccount=()=>{
    const {username, email, password , confirm_password} = signupState;
    if (password !== confirm_password) {
      dispatch(setMessage("confirm your passward"))
      return;
    }
    dispatch(register({username, email, password}))
      .then(() => {
          setSuccessful(true)  ;     
      })
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
            <h4 className='text-center text-red-700'>{message}</h4>
          </div>
      </form>
    )
}