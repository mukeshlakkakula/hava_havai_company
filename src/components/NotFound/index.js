import "./index.css";

const NotFound = () => {
  const notFound = "Go to Airport Section";
  return (
    <div className="pagenotFoundContainer m-auto ">
      <h4>Its not Error</h4>
      <img
        className="imgSm w-50"
        src="https://i.pinimg.com/564x/9a/7c/58/9a7c58b1532f43d69be0dcaec9130495.jpg"
        alt="notFound"
      />
      <h1>{notFound}</h1>
    </div>
  );
};

export default NotFound;
