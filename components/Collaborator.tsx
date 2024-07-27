import Image from "next/image";
import React, { useState } from "react";
import UserTypeSelector from "./UserTypeSelector";
import { Button } from "./ui/button";
import {
  removeCollaborators,
  updateDocumentsAccess,
} from "@/lib/actions/room.actions";

const Collaborator = ({
  roomId,
  creatorId,
  email,
  collaborator,
  user,
}: CollaboratorProps) => {
  const [userType, setUserType] = useState(collaborator.userType || "viewer");
  const [loading, setLoading] = useState(false);

  const shareDocumentHandler = async (type: string) => {
    setLoading(true);
    await updateDocumentsAccess({
      roomId,
      email,
      userType: type as UserType,
      updatedBy: user,
    });
    setLoading(false);
  };
  const removeCollaboratorHandler = async (email: string) => {
    setLoading(true);
    await removeCollaborators({ roomId, email });
    setLoading(false);
  };

  return (
    <li
      key={collaborator.id}
      className="flex items-center justify-between gap-2 py-3"
    >
      <div className="flex items-center gap-2">
        <Image
          src={collaborator.avatar}
          alt={collaborator.name}
          width={40}
          height={40}
          className="rounded-full size-9"
        />
        <div>
          <p className="line-clamp-1 text-sm font-semibold leading-4 text-white">
            {collaborator.name}
            <span className="text-10-regular pl-2 text-yellow-100">
              {loading && "updating..."}
            </span>
          </p>
          <p className="text-sm font-light text-yellow-100">
            {collaborator.email}
          </p>
        </div>
      </div>
      {creatorId === collaborator.id ? (
        <p className="text-sm text-yellow-100">Owner</p>
      ) : (
        <div className="flex items-center gap-2">
          <UserTypeSelector
            userType={userType as UserType}
            setUserType={setUserType || "viewer"}
            onClickHandler={shareDocumentHandler}
          />
          <Button
            type="button"
            onClick={() => removeCollaboratorHandler(collaborator.email)}
          >
            Remove
          </Button>
        </div>
      )}
    </li>
  );
};

export default Collaborator;
