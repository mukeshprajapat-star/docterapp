import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import { Typography, Button } from '@mui/material';
import './createprofile.css'

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        medical: '',
        position: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { medical, position, location, from, to, current, description } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    return (
        <div>
            <Fragment>
                <div className='register'>
                    <form className='registerForm' onSubmit={e => {
                        e.preventDefault();
                        addExperience(formData, history);
                    }}>
                        <Typography variant='h4'>Add Experience</Typography>
                        <input
                            type="text"
                            className="registerInputs"
                            placeholder="* Hospital"
                            name="medical"
                            value={medical}
                            onChange={e => onChange(e)}
                            required
                        />

                        <input
                            type="text"
                            className="registerInputs"
                            placeholder="* Position"
                            name="position"
                            value={position}
                            onChange={e => onChange(e)}
                            required
                        />

                        <input
                            type="text"
                            className="registerInputs"
                            placeholder="* Location"
                            name="location"
                            value={location}
                            onChange={e => onChange(e)}
                            required
                        />


                        <Typography variant='h6'>From Date</Typography>

                        <input type="date" className="registerInputs" name="from" value={from} onChange={e => onChange(e)} />
                        <p><input type="checkbox" name="current" checked={current} value={current} onChange={e => {
                            setFormData({ ...formData, current: !current });
                            toggleDisabled(!toDateDisabled);
                        }} /> {' '} Current Job</p>
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
                        <img className="register-user" src={require("../../img/undraw_medical_research_qg4d.svg")} alt="" />
                    </div>
                </div>

            </Fragment>
        </div>
    )
};
AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(withRouter(AddExperience));
