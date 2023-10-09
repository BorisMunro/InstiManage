import ExchageTable from "./exchageTable";
import FilterExchage from "./filterExchage";

export default function ExchangeControl() {

    return (
        <div className="mt-5">
            <FilterExchage />
            <ExchageTable />
        </div>
    )
}