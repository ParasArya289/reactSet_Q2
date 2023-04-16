import { useContext } from "react";
import { DataContext } from "../context/dataContext";
export const FavoriteCard = ({ data }) => {
  const { removeFromfavorite } = useContext(DataContext);
  return (
    <div
      style={{
        minWidth: "450px",
        border: "2px dotted",
        margin: "2rem",
        borderRadius: "12px"
      }}
    >
      <h3>{data?.title}</h3>
      <p>
        <i>{data?.author}</i>
      </p>
      <p>
        {data?.publisher}, {data?.year}
      </p>
      <button
        onClick={() => removeFromfavorite(data?.id)}
        style={{
          color: "white",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "black",
          padding: "1rem",
          margin: "12px",
          cursor: "pointer"
        }}
      >
        Remove From Favorite
      </button>
    </div>
  );
};
