"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Preview() {

  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [phone,setPhone]= useState("");
  const [position,setPosition]= useState("");
  const [description,setDescription]= useState("");

  const navigate = useNavigate();

  const handleViewPDF = () => {
    navigate("/final", {
      state: { name, email, phone, position, description },
    });
  };

  return (
    <form>
      <div className="flex justify-center py-8 mt-7">
        <h1 className="font-bold text-[34px]">Add your details</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex-col justify-between"> {/* main dev */}
          <div className="flex justify-left border-1 border-gray-300 rounded-2xl shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img 
              src="/assignment_icons/user.svg" 
              alt="user logo" className="h-8 w-8"/>
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Name</p>
              <input required type="text" placeholder="e.g. John Doe" name="" id="" className="focus:outline-none text-gray-800 w-full"
              onChange={(e) => setName(e.target.value)}/>
            </div>
          </div>

          <div className="flex justify-left border-1 border-gray-300 rounded-2xl  shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img 
              src="/assignment_icons/mail.svg" 
              alt="user logo" className="h-8 w-8"/>
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Email</p>
              <input required 
              type="email" 
              placeholder="e.g. Johndoe@gmail.com" 
              name="" 
              id="" 
              className="focus:outline-none text-gray-800 w-full"
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>

          <div className="flex justify-left border-1 border-gray-300 rounded-2xl  shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img 
              src="/assignment_icons/phone-call.svg" 
              alt="user logo" />
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Phone Number</p>
              <input required type="text" maxLength={10} minLength={10} placeholder="e.g.(220) 222-20002" name="" id="" className="focus:outline-none text-gray-800 w-full"
              onChange={(e) => setPhone(e.target.value)}/>
            </div>
          </div>

          <div className="flex justify-left border-1 border-gray-300 rounded-2xl  shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img 
              src="/assignment_icons/position.svg" 
              alt="user logo" className="h-8 w-8"/>
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Position</p>
              <input required type="text" placeholder="e.g. Junior Front end Developer" name="" id="" className="focus:outline-none text-gray-800 w-full" 
              onChange={(e) => setPosition(e.target.value)}/>
            </div>
          </div>

          <div className="flex justify-left border-1 border-gray-300 rounded-2xl  shadow-md mx-2 my-5 md:w-180 w-90">
            <div className="px-6 flex items-center">
              <img 
              src="/assignment_icons/Description.svg" 
              alt="user logo" className="h-8 w-8"/>
            </div>
            <div className="w-full">
              <p className="font-bold text-[20px]">Description</p>
              <textarea required placeholder="e.g. Work experience" name="" id="" className="focus:outline-none text-gray-800 w-full h-fit"
              onChange={(e) => setDescription(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 gap-4"> 
        <button className="bg-gradient-to-r from-emerald-600 to-green-800 text-white md:px-40 py-1 rounded-lg font-bold text-[24px] hover:cursor-pointer hover:bg-gradient-to-r hover:from-emerald-700 hover:to-green-900"
        onClick={handleViewPDF}>
          View PDF
        </button>
        <button className="bg-gradient-to-r from-emerald-600 to-green-800 text-white md:px-25 px-3 py-1 rounded-lg font-bold text-[24px] hover:cursor-pointer hover:bg-gradient-to-r hover:from-emerald-700 hover:to-green-900">
          <div className="flex items-center gap-5 md:gap-20">
            <img src="/assignment_icons/Download.svg" alt="download icon" className="float-left h-10 w-10"/>
            <span className="md:-ml-9">Download PDF</span>
          </div>
        </button>
      </div>
    </form>
  );
}