import React, { useContext, useRef } from "react";
import thousandSeparator from "../../utils/thousandSeparator";
import { TransactionModalContext } from "../../contexts/ModalContext";
import TransactionModal from '../modals/TransactionModal'


const dataTable = [
  {
    no: '1',
    name: 'Muhammad',
    address: 'Jl. M. Kahfi 1',
    postCode: '16621',
    income: '69000',
    status: 'Waiting Aprove',
  },
  {
    no: '2',
    name: 'Passyah',
    address: 'Jl. Serengseng Sawah',
    postCode: '16622',
    income: '30000',
    status: 'Success',
  },
  {
    no: '3',
    name: 'Abdul',
    address: 'Jl. Warung Silah',
    postCode: '16623',
    income: '28000',
    status: 'Cancel',
  },
  {
    no: '4',
    name: 'Raffi',
    address: 'Jl. Sadar Raya',
    postCode: '16624',
    income: '30000',
    status: 'On The Way',
  },
]

function checkStatus(status) {
    if (status == "Waiting Aprove") {
      return "text-yellow-500";
    } else if (status == "Success") {
      return "text-green-500";
    } else if (status == "Cancel") {
      return "text-red-500";
    } else if (status == "On The Way") {
      return "text-cyan-500";
    }
  }

  function checkAction(status) {
    if (status == "Waiting Aprove") {
      return (
      <>
        <button className="md:m-1 rounded-md bg-red-600 text-white md:px-3">Cancel</button>
        <button className="md:m-1  rounded-md bg-green-600 text-white md:px-3">Approve</button>
      </> ) 
    } else if (status == "Success") {
      return (
      <>
        <img src="/img/aprove.png" alt="icon" />  
      </> )
    } else if (status == "Cancel") {
      return (
      <> 
        <img src="/img/cancel.png" alt="icon" />  
      </> )
    } else if (status == "On The Way") {
      return (
      <>
        <img src="/img/aprove.png" alt="icon" />  
      </> )
    }
  }

  const Transaction = () => {

  const [open, setOpen] = useContext(TransactionModalContext)

  return (
    <>
      <div>
        <h1 className=" mx-20 md:my-10 md:w-10/12 font-['Avenir-Black'] text-red-500 text-3xl">
          Income Transactions
        </h1>
        <div className="transactionWrapp md:w-9/12 font-['Avenir-Roman'] md:m-auto md:mt-8">
          <div>
            <table className="md:w-full text-center">
              <thead>
                <tr className="bg-gray-300">
                  <td className="px-2 border border-collapse">No</td>
                  <td className="md:py-2 border border-collapse">Name</td>
                  <td className="border border-collapse">Address</td>
                  <td className="border border-collapse">Post Code</td>
                  <td className="border border-collapse">Income</td>
                  <td className="border border-collapse">Status</td>
                  <td className="border border-collapse">Action</td>
                </tr>
              </thead>
              {dataTable.map((items) => (
                <tbody>
                  <tr>
                    <td className="border border-collapse">{items.no}</td>
                    <td className="md:py-2 border border-collapse">{items.name}</td>
                    <td className="border border-collapse">{items.address}</td>
                    <td className="border border-collapse">{items.postCode}</td>
                    <td onClick={() => setOpen(!open)} className=" cursor-pointer border text-blue-700 border-collapse">Rp. {thousandSeparator(items.income)}</td>
                    <td className={checkStatus(items.status) + " border border-collapse"}>{items.status}</td>  
                    <td className="border border-collapse">
                      <button>
                        {checkAction(items.status)}
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
      <TransactionModal />
    </>
  )
}

export default Transaction