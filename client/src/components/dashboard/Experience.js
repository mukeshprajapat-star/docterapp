import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteExperience} from '../../actions/profile';
import { Typography } from '@mui/material';
import Table from 'react-bootstrap/Table';
import {Button } from '@mui/material'

const Experience = ({experience, deleteExperience}) => {
    const experiences = experience.map(exp => (
        <tr key={exp.id}>
            <td>{exp.medical}</td>
            <td>{exp.position}</td>
            <td>
                <Moment format='DD/MM/YYYY'>{exp.from}</Moment> - {' '}
                {exp.to === null ? (
                    'Now'
                ) : (
                    <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
                )}
            </td>
            <td>
                <Button
                    onClick={() => deleteExperience(exp._id)}
                    type="button" 
                    variant="outlined">X
                </Button>
            </td>
        </tr>
    ));
    return (
        <Fragment>
            <div className="common-details">
                <Typography>Experience Credentials</Typography>
                <br />
                <Table striped bordered hover  variant="dark" >
                    <thead>
                        <tr>
                            <th>Hospital</th>
                            <th>Postion</th>
                            <th>Years</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                    {experiences}

                    </tbody>
                </Table>
                    <br />
            </div>
            <br />
        </Fragment>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, {deleteExperience})(Experience);
