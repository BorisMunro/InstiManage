
import AddExchangeDetail from "@/components/UI/Exchages/AddExchangeDetail";
import Header from "@/components/auth/header";

export default function AddExchange() {

    return (
        <div className="mt-20">
            <Header 
                heading="Create New Exchange"
                paragraph="Do you want to go to the Dashboard?"
                linkName="Dashboard"
                linkUrl="/dashboard"
            />
            <AddExchangeDetail />
        </div>
           
    )
}