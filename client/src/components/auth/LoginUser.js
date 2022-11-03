import React, { useState, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/authUser';
import './Login.css';
import { Typography, Button } from "@mui/material";


const LoginUser = ({ login, isUserAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const onSubmit = async e => {
        e.preventDefault();
        login(email,password);
    }

    // Redirect if login
    if(isUserAuthenticated) {
        return <Redirect to="/profiles" />
    }

    return (
             <Fragment>
             <div className="login">
      <form className="loginForm" onSubmit={e => onSubmit(e)}>
        <Typography variant="h4" style={{ padding: "2vmax" }}>
          User Login
        </Typography>


        <input
          type="email"
          placeholder="Email"
          className="registerInputs"
          required
          value={email}
          onChange={e => onChange(e)}
          name="email"
        />

        <input
          type="password"
          className="registerInputs"
          placeholder="Password"
          required
          value={password}
          minLength="6"
          onChange={e => onChange(e)}
          name="password"
        />
        <Link to="/forgot/password">
        <Typography>Forgot Password?</Typography>
      </Link>

      <Button type="submit">Login</Button>

      <Link to="/">
        <Typography>New User?</Typography>
      </Link>
      </form>
      <div className="img-side">
        <img className="register-user" src={require("../../img/newDoctor1.svg")} alt="" />
        </div>
    </div>
        </Fragment>
    );
};

LoginUser.propTypes ={
    login: PropTypes.func.isRequired,
    isUserAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
    isUserAuthenticated: state.authUser.isUserAuthenticated
});

export default connect(mapStateToProps, {login})(LoginUser);
