import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handelChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have a account </h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="text"
            label="Email"
            value={this.state.email}
            handelChange={this.handelChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.email}
            handelChange={this.handelChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>{" "}
            <CustomButton
              onClick={signInWithGoogle}
              type="submit"
              isGoogleSignIn
            >
              SIGN IN WITH GOOLGE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
