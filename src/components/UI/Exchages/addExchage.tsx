import { createExchange, useDispatch } from "@/lib/redux"
import { useRouter } from "next/navigation";

export default function AddExchange() {

    const dispatch = useDispatch();
    const router = useRouter();

    const hanleAddExchange = () => {
        router.push('/dashboard/addExchange');
    }

    return (
        <div className="mt-4 flex items-center py-3 justify-between">
            <h3 className="text-3xl font-bold"> Exchanges</h3>
            <button 
                className="bg-blue-600 p-3 text-white rounded-2xl"
                onClick={hanleAddExchange}
                >+ New Exchanges</button>
        </div>
    )
}