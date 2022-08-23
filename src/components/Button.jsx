const Button = () => {
  return (
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#searchModal"
      className="btn btn-success rounded-circle position-fixed bottom-0 end-0 m-4"
      style={{ width: "60px", height: "60px" }}
    >
      <i className="bi bi-plus-lg" style={{ fontSize: "30px" }}></i>
    </button>
  );
};

export default Button;
