import ExchangeCategory from "./exchangeCategory"

const categoryDatas = [
    {
        name: "New",
        class: "text-blue-700"
    },
    {
        name: "Active",
        class: "text-green-700"
    },
    {
        name: "Canceled",
        class: "text-blue-700"
    },
    {
        name: "Closed",
        class: ""
    }
]

export default function ExchageState() {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-5">
                {categoryDatas.map(item => 
                    <ExchangeCategory
                        name={item.name}
                        className={item.class} 
                        key={item.name}
                    />
                )}
        </div>
    )
}