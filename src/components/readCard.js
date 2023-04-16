export const ReadCard = ({ data }) => {
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
    </div>
  );
};
