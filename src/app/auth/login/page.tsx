import Header from "@/components/auth/header";
import LoginComponent from "@/components/auth/loginComponent";

export default function Login() {

    return (
        <>
            <Header 
                heading="Login your account"
                paragraph="Don't you have an account yet?"
                linkName="Signup"
                linkUrl="/auth/signup"
            />
            <LoginComponent />
        </>
           
    )
}