import React from "react";
import { NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { signOut } from "../../../redux/actions/authActions";

const Navigation = ({ signOut }) => {
  const token = useSelector((state) => state.auth.token);
  return (
    <>
      <ul className="list">
        <li className="listItem">
          <NavLink exact className="link" activeClassName="linkActive" to="/">
            Home
          </NavLink>
        </li>
        <li className="listItem">
          <NavLink className="link" activeClassName="linkActive" to="/tasks">
            Tasks
          </NavLink>
        </li>
        {!token && (
          <li className="listItem">
            <NavLink className="link" activeClassName="linkActive" to="/signin">
              SignIn
            </NavLink>
          </li>
        )}
        {!token && (
          <li className="listItem">
            <NavLink className="link" activeClassName="linkActive" to="/signup">
              SignUp
            </NavLink>
          </li>
        )}
      </ul>
      {token && (
        <button type="button" className="button" onClick={signOut}>
          SignOut
        </button>
      )}
    </>
  );
};

export default connect(null, { signOut })(Navigation);
