import Header from "@/components/auth/header";
import SignupComponent from "@/components/auth/signupComponent";

export default function Signup() {

    return (
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/auth/login"
            />
            <SignupComponent />
        </>
    )
}