import React, { useState, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/authDoctor';
import './Login.css';
import { Typography, Button } from "@mui/material";

const LoginDoctor = ({ login, isDoctorAuthenticated }) => {
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
    if(isDoctorAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
             <Fragment>
             <div className="login">
      <form className="loginForm" onSubmit={e => onSubmit(e)}>
        <Typography variant="h4" style={{ padding: "2vmax" }}>
          Docter Login
        </Typography>


        <input
          type="email"
          placeholder="Email"
          className="registerInputs"
          required
          name="email"
          value={email}
          onChange={e => onChange(e)}
        />

        <input
          type="password"
          className="registerInputs"
          placeholder="Password"
          required
          value={password}
          minLength="6"
          name="password"
          onChange={e => onChange(e)}
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

LoginDoctor.propTypes ={
    login: PropTypes.func.isRequired,
    isDoctorAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
    isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated
});

export default connect(mapStateToProps, {login})(LoginDoctor);
