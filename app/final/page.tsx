"use client";
import React, { useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function Final() {
  const searchParams = useSearchParams();
  const printRef = useRef<HTMLDivElement>(null);

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const position = searchParams.get("position");
  const description = searchParams.get("description");

  const handleDownload = () => {
    if (!printRef.current) return;

    const printContents = printRef.current.innerHTML;
    const printWindow = window.open("", "_blank", "width=800,height=600");
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Print Preview</title>
          <style>
            /* Copy any page styles you need here */
            body { font-family: Arial, sans-serif; padding: 20px; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div className="flex flex-row h-screen items-center py-8 justify-center ">
      <div className="absolute top-34 left-84 hover:cursor-pointer"
        onClick={() => window.history.back()}>
        <img src="/assignment_icons/chevron-left.svg" alt="success icon" className="h-10 w-10"/>
      </div>
      
      <div ref={printRef} className="mt-5 border-2 shadow-2xl p-10 page-content">
        <p className="text-[20px] mt-5 m-5 md:w-100"><strong>Name:</strong> <span className="ml-38">{name}</span> </p>
        <p className="text-[20px] m-5 md:w-100"><strong>Email:</strong> <span className="ml-35">{email}</span></p>
        <p className="text-[20px] m-5 md:w-100"><strong>Phone:</strong> <span className="ml-35">{phone}</span></p>
        <p className="text-[20px] m-5 md:w-100"><strong>Position:</strong> <span className="ml-27">{position}</span></p>
        <p className="text-[20px] m-5 md:w-100"><strong>Description:</strong> <span className="ml-19">{description}</span></p>
        <button className="mt-5 bg-gradient-to-r from-green-800 to-emerald-600 text-white hover:cursor-pointer hover:bg-gradient-to-r hover:from-green-900 hover:to-emerald-700 py-2 px-4 rounded w-full"
        onClick={handleDownload}>
          <div className="flex items-center justify-around">
            <img src="/assignment_icons/Download.svg" alt="download icon" className="float-left h-10 w-10"/>
            <span className="md:-ml-35 font-bold text-2xl">Download PDF</span>
          </div>
        </button>
      </div>
    </div>
  );
}
