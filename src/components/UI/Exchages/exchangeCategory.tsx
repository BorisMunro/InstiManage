import { useSelector } from "@/lib/redux";
import Image from "next/image"

const names = {
    New: 'new',
    Closed: 'close',
    Canceled: 'cancel',
    Active: 'active'
}
export default function ExchangeCategory({name, className}: 
    {
        name: string,
        className: string
    }) {
    const style = `text-[50px] ${className}`;
    
    const users = useSelector(state => state.exchange.exchanges);
    const count = users.filter(item => item.status === names[name]).length;
    return (
        <div className={`flex justify-between bg-white p-2 px-3 rounded-2xl items-center`}>
                    <div className="flex items-center gap-3">
                        <h4 className={style}>{count}</h4>
                        <p>{name}<br /> Exchagade</p>
                    </div>
                    <div className="w-1/5 h-20  relative">
                        <Image 
                            src="/picture.png"
                            alt=""
                            className=" rounded-xl"
                            layout="fill"
                        />
                    </div>
        </div>
    )
}