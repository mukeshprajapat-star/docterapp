import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import Table from 'react-bootstrap/Table';

const ProfileItem = ({
    profile: {
        doctor: { _id, name, avatar },
        clinic,
        location,
        specialists,
        ruppess
    },
    authUser
}) => {
    return (
        <Table striped bordered hover variant="dark" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Clinic</th>
                    <th>Location</th>
                    <th>Specialists</th>
                    <th>Ruppess/Fees</th>
                    <th> Book Appointment</th>
                    <th>View Profile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>

                    <td>{clinic}</td>

                    <td>{location}</td>
                    <td>{specialists}</td>
                    <td>{ruppess}</td>
                    <td>
                        <div>
                            {authUser.isUserAuthenticated ? (
                                <Fragment>
                                    <Button variant="outlined"><Link to={`/appointment/${_id}`} type="button" style={{ textDecoration: "none" }}>Book Appointment</Link></Button>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Button type="button" variant="outlined">
                                        Book Appointment
                                    </Button>
                                </Fragment>
                            )
                            }
                        </div>
                    </td>
                    <td>
                        <Button type="button" variant="outlined"><Link to={`/doctor/${_id}`} style={{ textDecoration: "none" }}>View Profile</Link></Button>
                    </td></tr>
            </tbody>
        </Table>



    );
}
ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    authUser: state.authUser
});

export default connect(mapStateToProps)(ProfileItem);
