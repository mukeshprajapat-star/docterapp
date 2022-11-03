import React, { useState, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import { register} from '../../actions/authUser';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Register.css"


const UserRegister = ({ setAlert, register, isUserAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    }
    if(isUserAuthenticated) {
        return <Redirect to='/appointment' />
    }

    return (
             <Fragment>
             <div className="register">
      <form className="registerForm" onSubmit={e => onSubmit(e)}>
        <Typography variant="h4" style={{ padding: "2vmax" }}>
          User Register
        </Typography>

        <input
          type="text"
          value={name}
          placeholder="Name"
          className="registerInputs"
          required
          onChange={e => onChange(e)}
          name="name"
        />

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
          onChange={e => onChange(e)}
          name="password"
        />
        <input 
        type="password" 
        className="registerInputs" 
        placeholder="Confirm Password" 
        name="password2"
        value={password2} onChange={e => onChange(e)}
        />


        <Link to="/">
          <Typography>Already Signed Up? Login Now</Typography>
        </Link>

        <Button  type="submit">
          Sign Up
        </Button>
      </form>
      <div className="img-side">
        <img className="register-user" src={require("../../img/newDoctor1.svg")} alt="" />
        </div>
    </div>
        </Fragment>
    );
};

UserRegister.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isUserAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps =state => ({
    isUserAuthenticated: state.authUser.isUserAuthenticated
});

export default connect(mapStateToProps, {setAlert, register})(UserRegister);
