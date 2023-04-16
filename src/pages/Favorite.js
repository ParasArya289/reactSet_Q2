import { useContext } from "react";
import { FavoriteCard } from "../components/FavoriteCard";
import { DataContext } from "../context/dataContext";

export const Favorite = () => {
  const { favorite } = useContext(DataContext);
  console.log(favorite);
  return (
    <>
      <h1>This is Favorite</h1>
      {favorite.map((el) => (
        <FavoriteCard data={el} />
      ))}
    </>
  );
};
