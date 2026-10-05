"use client";

import { authClient } from "@/lib/auth-client";
import UserAvatar from "@/components/UserAvatar";
import Link from "next/link";
import toast from "react-hot-toast";
import { useState, type FormEvent } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

 

  const [show, setShow] = useState(false)


  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const image = String(formData.get("image") ?? "").trim();

    try {
      const { error } = await authClient.updateUser({
        name,
        image: image || null,
      });

      if (error) {
        toast.error(error.message || "প্রোফাইল আপডেট করা যায়নি");
        return;
      }

      toast.success("প্রোফাইল আপডেট হয়েছে");
      setShow(false);
    } catch {
      toast.error("সার্ভারের সঙ্গে যোগাযোগ করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

  const handleShowForm = () => {
    setShow(!show);
  };
  return (
    <div className="mt-5 ">
      <div className="flex flex-col items-center gap-2">
        <Link href={"/profile"}>
          <UserAvatar image={user?.image} name={user?.name} />
        </Link>

        <h2>{user?.name}</h2>

        <p>{user?.email}</p>

        <button onClick={handleShowForm} className="btn">Edit Profile</button>

      { show &&    <form onSubmit={handleUpdateProfile}>
        <fieldset className="fieldset   rounded-box w-md">
          <label className="label" htmlFor="profile-name">নাম</label>
          <input
            id="profile-name"
            name="name"
            type="text"
            className="input w-md"
            placeholder="Name"
            defaultValue={user?.name ?? ""}
            required
          />

          <label className="label" htmlFor="profile-image">Image URL</label>
          <input
            id="profile-image"
            name="image"
            type="url"
            className="input w-md"
            placeholder="https://example.com/image.jpg"
            defaultValue={user?.image ?? ""}
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            Update Profile
          </button>
        </fieldset>
      </form>}
      </div>

    
    </div>
  );
};

export default ProfilePage;
