import { useContext } from "react";
import { ProfileCard } from "../components/profileCard";
import { DataContext } from "../context/dataContext";

export const Profile = () => {
  const { user } = useContext(DataContext);
  return (
    <>
      <ProfileCard data={user} />
    </>
  );
};
