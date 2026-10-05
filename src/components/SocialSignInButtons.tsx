"use client";

import { authClient } from "@/lib/auth-client";

const SocialSignInButtons = () => {
  const signInWithGoogle = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  const signInWithGithub = async () => {
    await authClient.signIn.social({ provider: "github" });
  };

  return (
    <div className="mt-3 flex flex-wrap justify-center gap-3">
      <button
        type="button"
        onClick={signInWithGoogle}
        className="btn gap-2 border-gray-300 bg-white px-4 text-gray-800 hover:bg-gray-50"
      >
        <svg aria-hidden="true" viewBox="0 0 48 48" className="h-5 w-5">
          <path fill="#FFC107" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z" />
          <path fill="#FF3D00" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z" />
          <path fill="#4CAF50" d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z" />
          <path fill="#1976D2" d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z" />
        </svg>
        Sign in with Google
      </button>
      <button
        type="button"
        onClick={signInWithGithub}
        className="btn gap-2 border-gray-300 bg-white px-4 text-gray-800 hover:bg-gray-50"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
        >
          <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.5 3.9 18.5 4.2 18.5 4.2c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.3.8 1 .8 2v3.4c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SocialSignInButtons;
