export const ProfileCard = ({ data }) => {
  return (
    <div
      style={{
        minWidth: "450px",
        border: "2px dotted",
        margin: "2rem",
        borderRadius: "12px"
      }}
    >
      <img src={data?.img} alt={data?.name} height="300" width="300" />
      <h3>{data?.name}</h3>
      <p>
        <i>{data?.bio}</i>
      </p>
    </div>
  );
};
