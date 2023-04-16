import { useContext } from "react";
import { AllBookCard } from "../components/allBookCard";
import { DataContext } from "../context/dataContext";

export const AllBooks = () => {
  const { data } = useContext(DataContext);
  return (
    <>
      <h1>This is AllBooks</h1>
      {data.map((el) => (
        <AllBookCard data={el} />
      ))}
    </>
  );
};
