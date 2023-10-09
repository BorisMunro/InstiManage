"use client"
import AddExchange from "@/components/UI/Exchages/addExchage"
import ExchangeControl from "@/components/UI/Exchages/exchageControl"
import ExchageState from "@/components/UI/Exchages/exchageState"
import { selectUser, useSelector } from '@/lib/redux'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'



export default function() {
    const router = useRouter()
    const user = useSelector(selectUser);
    console.log(user)
    if (!user) {
        router.push('/');
    }
    return (
        <>
            <AddExchange />
            <ExchageState />
            <ExchangeControl />
        </>
    )
}