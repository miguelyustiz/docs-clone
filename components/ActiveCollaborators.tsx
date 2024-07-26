import { useOthers } from "@liveblocks/react";
import Image from "next/image";
import React from "react";

const ActiveCollaborators = () => {
  const others = useOthers();

  const collaborators = others.map((other) => other.info);

  return (
    <ul className="collaborators-list">
      {collaborators.map(({ id, name, color, avatar }) => (
        <li key={id} className="collaborator">
          <Image
            src={avatar}
            alt={name}
            width={100}
            height={100}
            className="inline-bloc size-8 rounded-full ring-2"
            style={{ border: `3px solid ${color}` }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollaborators;
