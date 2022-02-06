import React from "react";

const dataTable = [
    {
        no: '1',
        name: 'Muhammad',
        address: 'Jl Belimbing 1',
        postCode: '16620',
        income: '46.000',
        status: 'Waiting Aprove',
    },
    {
        no: '2',
        name: 'Passyah',
        address: 'Jl Belimbing 2',
        postCode: '16621',
        income: '46.000',
        status: 'Waiting Aprove',
    },
    {
        no: '3',
        name: 'Abdul',
        address: 'Jl Belimbing 3',
        postCode: '16622',
        income: '46.000',
        status: 'Waiting Aprove',
    },
    {
        no: '4',
        name: 'Raffi',
        address: 'Jl Belimbing 3',
        postCode: '16622',
        income: '46.000',
        status: 'Waiting Aprove'
    },
]

const Transaction = () => {
    return (
        <div className="transactionWrapp md:w-7/12 md:m-auto md:mt-12">
                <div>
                    <table className="md:w-full text-center">
                        <thead>
                            <tr >
                                <td className="border border-collapse">No</td>
                                <td className="md:py-3 border border-collapse">Name</td>
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
                                    <td className="md:py-1 border border-collapse">{items.name}</td>
                                    <td className="border border-collapse">{items.address}</td>
                                    <td className="border border-collapse">{items.postCode}</td>
                                    <td className="border border-collapse">{items.income}</td>
                                    <td className="border border-collapse">{items.status}</td>
                                    <td className="border border-collapse">
                                        <button className="md:m-1 bg-red-600 text-white md:px-3">Cancel</button>
                                        <button className="md:m-1 bg-green-600 text-white md:px-3">Approve</button>
                                    </td>
                                </tr>

                            </tbody>
                        ))}
                    </table>
                </div>
        </div>
    )
}

export default Transaction