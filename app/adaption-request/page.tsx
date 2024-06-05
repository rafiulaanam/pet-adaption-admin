"use client";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loader from "@/components/custom ui/Loader";
import { Separator } from "@/components/ui/separator";

const AdaptionRequest = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () => {
    try {
      const res = await fetch("/api/adaption-request", {
        method: "GET",
      });
      const data = await res.json();
      console.log("🚀 ~ getProducts ~ data:", data)
      
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.log("[products_GET]", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Adaption Request</p>
       
      </div>
      <Separator className="bg-grey-1 my-4" />
      {/* <DataTable columns={columns} data={products} searchKey="title" /> */}
      

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Info
                </th>
            </tr>
        </thead>
        <tbody>
        {products.map((p,i)=><tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {p.name} 
                </th>
                <td className="px-6 py-4">
                  { p.phone}
                </td>
                <td className="px-6 py-4">
                    {p.email}
                </td>
                <td className="px-6 py-4">
                   {p.additionalInfo}
                </td>
            </tr>)}
            
           
        </tbody>
    </table>
</div>

    </div>
  );
};

export default AdaptionRequest;
