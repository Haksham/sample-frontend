"use client";
import React, { useState, useRef } from "react";
import { useRouter } from 'next/navigation';

export default function Preview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    description: "",
  });
  const router = useRouter();
  const printRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/final?name=${formData.name}&email=${formData.email}&phone=${formData.phone}&position=${formData.position}&description=${formData.description}`);
  };

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
    <form >
      <div className="flex justify-center py-8 mt-7">
        <h1 className="font-bold text-[34px]">Add your details</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex-col justify-between" ref={printRef}>
          {/* Name Field */}
          <div className="flex justify-left border-1 border-gray-300 rounded-2xl shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img src="/assignment_icons/user.svg" alt="user logo" className="h-8 w-8" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Name</p>
              <input
                required
                type="text"
                placeholder="e.g. John Doe"
                name="name"
                className="focus:outline-none text-gray-800 w-full"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex justify-left border-1 border-gray-300 rounded-2xl shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img src="/assignment_icons/mail.svg" alt="email logo" className="h-8 w-8" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Email</p>
              <input
                required
                type="email"
                placeholder="e.g. Johndoe@gmail.com"
                name="email"
                className="focus:outline-none text-gray-800 w-full"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="flex justify-left border-1 border-gray-300 rounded-2xl shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img src="/assignment_icons/phone-call.svg" alt="phone logo" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Phone Number</p>
              <input
                required
                type="text"
                maxLength={10}
                minLength={10}
                placeholder="e.g.(220) 222-20002"
                name="phone"
                className="focus:outline-none text-gray-800 w-full"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Position Field */}
          <div className="flex justify-left border-1 border-gray-300 rounded-2xl shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img src="/assignment_icons/position.svg" alt="position logo" className="h-8 w-8" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Position</p>
              <input
                required
                type="text"
                placeholder="e.g. Junior Front end Developer"
                name="position"
                className="focus:outline-none text-gray-800 w-full"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description Field */}
          <div className="flex justify-left border-1 border-gray-300 rounded-2xl shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img src="/assignment_icons/Description.svg" alt="description logo" className="h-8 w-8" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Description</p>
              <textarea
                required
                placeholder="e.g. Work experience"
                name="description"
                className="focus:outline-none text-gray-800 w-full h-fit"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 gap-4"> 
        <button className="bg-gradient-to-r from-emerald-600 to-green-800 text-white md:px-40 py-1 rounded-lg font-bold text-[24px] hover:cursor-pointer hover:bg-gradient-to-r hover:from-emerald-700 hover:to-green-900"
        onClick={handleSubmit}
        >
          View PDF
        </button>
        <button className="bg-gradient-to-r from-emerald-600 to-green-800 text-white md:px-25 px-3 py-1 rounded-lg font-bold text-[24px] hover:cursor-pointer hover:bg-gradient-to-r hover:from-emerald-700 hover:to-green-900"
        onClick={handleDownload}>
          <div className="flex items-center gap-5 md:gap-20">
            <img src="/assignment_icons/Download.svg" alt="download icon" className="float-left h-10 w-10"/>
            <span className="md:-ml-9">Download PDF</span>
          </div>
        </button>
      </div>
    </form>
  );
}