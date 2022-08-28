const Button = (props) => {
  return (
    <button
      type="button"
      data-bs-toggle={props.toggle}
      data-bs-target={props.target}
      className="btn btn-success rounded-circle position-fixed bottom-0 end-0 m-4"
      style={{ width: "60px", height: "60px" }}
    >
      <i className={props.icon} style={{ fontSize: "30px" }}></i>
    </button>
  );
};

export default Button;
