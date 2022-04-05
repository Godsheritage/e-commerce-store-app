import spinnerGif from "../components/assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinnerGif}
      alt="Loading"
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
