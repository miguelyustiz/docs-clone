"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(`Error happened while creating a room: ${error}`);
    }
  };

  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-yellow hover:bg-slate-800 text-white flex gap-1 shadow-md"
    >
      <Image
        src="/assets/icons/add.svg"
        alt="Add Document"
        width={24}
        height={24}
      />
      <p className="hidden sm:block font-semibold">Start a blank Document</p>
    </Button>
  );
};

export default AddDocumentBtn;
