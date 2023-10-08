import Image from "next/image"
export default function ExchangeCategory({name, className}: 
    {
        name: string,
        className: string
    }) {
    const style = `text-[50px] ${className}`;
    
    return (
        <div className={`flex justify-between bg-white p-2 px-3 rounded-2xl items-center`}>
                    <div className="flex items-center gap-3">
                        <h4 className={style}>10</h4>
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