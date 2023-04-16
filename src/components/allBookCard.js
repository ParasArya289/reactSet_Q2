import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export const AllBookCard = ({ data }) => {
  const { markAsRead, addTofavorite } = useContext(DataContext);
  const mailStyle = (done) => (done ? "3px dotted lightgrey" : "3px dotted");
  return (
    <div
      style={{
        minWidth: "350px",
        border: mailStyle(data?.read),
        margin: "2rem",
        borderRadius: "12px"
      }}
    >
      <img src={data?.image} alt={data?.title} height="200" width="200" />
      <h3>{data?.title}</h3>
      <p>
        <i>{data?.author}</i>
      </p>
      <p>{data?.publisher}</p>
      <p>{data?.year}</p>
      <p>INR {data?.price}</p>
      <button
        disabled={data?.read}
        onClick={() => markAsRead(data?.id)}
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
        {data?.read ? "Already Read" : "Mark as read"}
      </button>
      {!data?.isFavorite ? (
        <button
          onClick={() => addTofavorite(data?.id)}
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
          Add To Favorite
        </button>
      ) : (
        <NavLink
          style={{
            textDecoration: "none",
            fontSize: "14px",
            color: "white",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "black",
            padding: "1rem",
            margin: "12px",
            cursor: "pointer"
          }}
          to="/favorite"
        >
          Go to Favorite
        </NavLink>
      )}
    </div>
  );
};
