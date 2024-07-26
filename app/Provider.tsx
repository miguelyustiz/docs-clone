"use client";
import Loader from "@/components/Loader";
import { getClerkUser } from "@/lib/actions/user.actions";
import { LiveblocksProvider } from "@liveblocks/react";
import { ClientSideSuspense } from "@liveblocks/react";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiveblocksProvider
      authEndpoint="./api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUser({ userIds });
        return users;
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
