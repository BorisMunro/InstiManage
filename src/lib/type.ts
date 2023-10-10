
export type InputField = {
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    autoComplete: string;
    isRequired: boolean;
    placeholder: string;   
};

export type FieldsState = {
    email_address: string,
    password: string,
    username: string,
    confirm_password: string,
}

export type User = {
    username: string,
    email_address: string, 
    password: string, 
}