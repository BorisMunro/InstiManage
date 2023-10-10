"use client"
import {useEffect} from 'react'
import { deleteExchange, getAllExchanges, useDispatch, useSelector } from "@/lib/redux";
import {
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import {
    Typography,
  } from "@material-tailwind/react";
   
   
 const TABLE_HEAD = ["", "Exchange Member", "Exchanger", "Open Date", "close Date", "last modified date", "account ballance", "status", "actions"];
  
export default function ExchageTable({filter}) {
    
    const exchanges = useSelector((state) => state.exchange.exchanges);
    
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllExchanges())  
    }, [])

    const handleDelete =  (_id: string) => {
       dispatch(deleteExchange({_id}));
    }
    return (
      <div className="container overflow-x-scroll h-['200px']">
        <table className="mt-4 rounded-xl bg-white overflow-x-hidden w-40 lg:container text-left">
          <thead className='overflow-x-hidden'>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer uppercase border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {(index !== TABLE_HEAD.length - 1 && index !== 0 && index !== 1) && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                    {head === "" ? < input type="checkbox" /> : head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=' overflow-x-scroll'>
            {exchanges.filter(item=> item.exchanger.search(filter) !== -1).map(
              ({_id, exchanger, exchangerMember, openDate, updatedAt, closeDate, lastModifiedDate, status, accountBallance }, index) => {
                return (
                  <tr key={exchangerMember}>
                    <td className="text-center">
                        <input type="checkbox" />
                    </td>
                    <td className="">
                        {exchanger}
                    </td>
                    <td>
                      {exchangerMember}
                    </td>
                    <td className={""}>
                       {openDate}
                    </td>
                    <td>
                      {closeDate}
                    </td>
                    <td>
                      {updatedAt}
                    </td>
                    <td>
                      {accountBallance}
                    </td>
                    <td>
                      {status}
                    </td>
                    <td className='block'>
                        <button 
                          className='block p-2'
                          onClick={() => handleDelete(_id)}
                          >Delete</button>
                        <button className='blcok p-2'>Update</button>                          
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </div>
    )
}