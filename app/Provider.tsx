"use client";
import Loader from "@/components/Loader";
import { LiveblocksProvider } from "@liveblocks/react";
import { ClientSideSuspense } from "@liveblocks/react";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiveblocksProvider authEndpoint="./api/liveblocks-auth">
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
