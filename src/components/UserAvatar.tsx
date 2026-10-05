"use client";

import { useState } from "react";

const UserAvatar = ({
  image,
  name,
}: {
  image?: string | null;
  name?: string | null;
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = name?.trim().charAt(0).toUpperCase() || "?";

  return (
    <div className="avatar">
      <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
        {image && !imageFailed ? (
          <img
            src={image}
            alt={`${name || "User"} profile`}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div
            aria-label={`${name || "User"} profile`}
            className="flex h-full w-full items-center justify-center bg-red-700 font-bold text-white"
          >
            {initials}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
