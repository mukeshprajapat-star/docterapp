import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addAppointment} from '../../actions/appointment';
import { Link } from 'react-router-dom';
import { Typography,Button } from '@mui/material';
import './form.css'
const Form = ({profile, doctorId,history, addAppointment}) => {

    const [formData, setFormData] = useState({
        patientname: '',
        fathername: '',
        age:'',
        status:'',
        date:'',
        description:''
    });   

    const {
        patientname,
        fathername,
        age,
        status,
        date,
        description
    } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    return (
        <Fragment>
            <form className='registerForm' onSubmit={e => {
                e.preventDefault();
                addAppointment(doctorId, formData, history);  
            }}>
                <Typography  variant='h4'>Book Appointment</Typography>
                <input 
                    type="text" 
                    className="registerInputs" 
                    placeholder="* Patient name"
                    name="patientname"
                    value={patientname}
                    onChange={e => onChange(e)} />
                <input
                    type="text" 
                    className="registerInputs" 
                    placeholder="* Father name"
                    name="fathername" 
                    value={fathername} 
                    onChange={e => onChange(e)} />
                    <input 
                        type="text" 
                        className="registerInputs" 
                        placeholder="* Age"
                        name="age" 
                        value={age} 
                        onChange={e => onChange(e)} />
                    <input 
                        type="text" 
                        className="registerInputs" 
                        placeholder="* Status"
                        name="status" 
                        value={status} 
                        onChange={e => onChange(e)} />
                        <Typography variant="body2" gutterBottom>Status like profession (eg. student, job etc)</Typography>
                    <br />
                    <Typography  variant='h6'>Date</Typography>
                    <input 
                        type="date" 
                        className="registerInputs" 
                        name="date" 
                        value={date}
                        onChange={e => onChange(e)} />

                    <textarea 
                        className="registerInputs" 
                        placeholder="* Health Problem Description" 
                        name="description" 
                        value={description}
                        onChange={e => onChange(e)}
                        >

                        </textarea>
                <Button type="submit" variant='text'>Submit</Button>{' '}
                <Link to="/profiles" type="submit" className="btn btn-outline-secondary" style={{color:"black"}}>Go Back</Link>
            </form>
            <br />
        </Fragment>
    );
};

Form.propTypes = {
    addAppointment: PropTypes.func.isRequired
}

export default connect(null, {addAppointment})(Form);
