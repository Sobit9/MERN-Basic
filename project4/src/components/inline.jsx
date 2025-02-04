const Inline = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "1rem",
          border: "1px solid red",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        Hello, I&apos;m Card
      </div>
    </div>
  );
};
export default Inline;
