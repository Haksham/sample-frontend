"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function Final() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const position = searchParams.get("position");
  const description = searchParams.get("description");

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="font-bold text-[34px]">Submitted Details</h1>
      <div className="mt-5">
        <p className="text-[20px]"><strong>Name:</strong> {name}</p>
        <p className="text-[20px]"><strong>Email:</strong> {email}</p>
        <p className="text-[20px]"><strong>Phone:</strong> {phone}</p>
        <p className="text-[20px]"><strong>Position:</strong> {position}</p>
        <p className="text-[20px]"><strong>Description:</strong> {description}</p>
      </div>
    </div>
  );
}