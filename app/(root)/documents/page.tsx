import Header from "@/components/Header";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import AddDocumentBtn from "@/components/AddDocumentBtn";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) return redirect("/sign-up");
  const documents = [];
  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex  items-center justify-center gap-2">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {documents.length === 0 ? (
        <div className="loader">Loading…</div>
      ) : (
        <div className="document-list-empty">
          <Image
            src="/assets/icons/doc.svg"
            alt="Empty"
            width={40}
            height={40}
            className="mx-auto"
          />
          <AddDocumentBtn />
        </div>
      )}
    </main>
  );
};

export default Home;
