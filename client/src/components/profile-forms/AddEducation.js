import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import './createprofile.css'
import { Typography, Button } from '@mui/material';

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormdata] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const onChange = e => setFormdata({
        ...formData,
        [e.target.name]: e.target.value
    });

    return (

        <Fragment>
            <div className="register">

                <form className='registerForm' onSubmit={e => {
                    e.preventDefault();
                    addEducation(formData, history);
                }}>
                    <Typography variant='h4'>Add Education</Typography>

                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="* School"
                        name="school"
                        value={school}
                        onChange={e => onChange(e)}
                        required
                    />

                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="* Degree or Certification"
                        name="degree"
                        value={degree}
                        onChange={e => onChange(e)}
                        required
                    />

                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="* Field of study"
                        name="fieldofstudy"
                        value={fieldofstudy}
                        onChange={e => onChange(e)}
                        required
                    />


                    <Typography variant='h6'>From Date</Typography>
                    <input type="date" className="registerInputs" name="from" value={from} onChange={e => onChange(e)} />
                    <p><input type="checkbox" name="current" checked={current} value={current} onChange={e => {
                        setFormdata({ ...formData, current: !current });
                        toggleDisabled(!toDateDisabled);
                    }} /> {' '} Current School</p>
                    <Typography variant='h6'>To Date</Typography>
                    <input
                        type="date"
                        className="registerInputs"
                        name="to"
                        value={to}
                        onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                    <textarea
                        name="description"
                        className="registerInputs"
                        placeholder="* Program Description"
                        value={description} onChange={e => onChange(e)}></textarea>
                    <Button type="submit" variant='text'>Submit</Button>{' '}
                    <Link to="/dashboard" type="submit" className="btn btn-outline-secondary" style={{ color: "black" }}>Go Back</Link>

                </form>
                <br />
                <div className="img-side">
                    <img className="register-user" src={require("../../img/graduation.svg")} alt="" />
                </div>
            </div>
        </Fragment>
    );
};

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(withRouter(AddEducation));
