import React, { Component } from "react";
import { register, logIn } from "../../redux/operations/authOperations";
import { connect } from "react-redux";

const initialState = {
  email: "",
  password: "",
  URL: "",
};

class Form extends Component {
  state = {
    ...initialState,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const URL = this.props.match.url;
    URL === "/signup" && this.props.register(this.state);
    URL === "/signin" && this.props.logIn(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    const URL = this.props.match.url;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="label">
          Email:
          <input
            name="email"
            value={email}
            type="text"
            className="input"
            onChange={this.handleChange}
          />
        </label>

        <label className="label">
          Password:
          <input
            name="password"
            value={password}
            type="text"
            className="input"
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className="button">
          {URL === "/signup" ? "SignUp" : "SignIn"}
        </button>
      </form>
    );
  }
}

export default connect(null, { register, logIn })(Form);
