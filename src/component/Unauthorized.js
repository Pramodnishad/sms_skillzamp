import { useNavigate } from "react-router-dom";
import not1 from "../images/403.svg";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="bg-light vh-100 d-flex justify-content-center align-items-center text-center">
      <div>
        <h1>Unauthorized Access</h1>
        <img src={not1} alt="" />
        <br />
        <p>You do not have access to the requested page.</p>
        <div className="flex-row">
          <button className="btn btn-primary" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Unauthorized;
