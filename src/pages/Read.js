import { useContext } from "react";
import { ReadCard } from "../components/readCard";
import { DataContext } from "../context/dataContext";

export const Read = () => {
  const { read } = useContext(DataContext);
  return (
    <>
      {read.map((el) => (
        <ReadCard data={el} />
      ))}
    </>
  );
};
