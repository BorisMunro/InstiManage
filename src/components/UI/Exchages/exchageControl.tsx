import { useState } from "react";
import ExchageTable from "./exchageTable";
import FilterExchage from "./filterExchage";

export default function ExchangeControl() {
    const [filter, setFilter] = useState('');
    return (
        <div className="mt-5">
            <FilterExchage handleChange={setFilter} filter={filter} />
            <ExchageTable filter={filter}  />
        </div>
    )
}