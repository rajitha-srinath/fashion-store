import SignupForm from "../../components/sign-up-form/sign-up-form.component";
import SigninForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";


const Authentication = () => {
  return (
    <div className="authentication-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;
