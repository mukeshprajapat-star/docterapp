import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Experience from './Experience';
import Education from './Education';
import Patient from './Patient';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';


const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    authDoctor: { doctor },
    profile: { profile, loading }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile == null ? (
        <Spinner />
    ) : (
        <Fragment>
            <section id="dashboard">
                <div className="container">
                    <div className="heading-common">
                        <br />
                        <Typography variant='h4'>Dashboard</Typography>
                        <br/>
                        <Typography variant='h6'> Welcome {doctor && doctor.name}</Typography>
                    </div>
                    <br />
                    {profile !== null ? (
                        <Fragment>
                            {profile.patients !== null && profile.patients.length > 0 ?
                                (
                                    <Patient patient={profile.patients} />
                                ) : (
                                    <h5 style={{ color: "#738f93" }}>No Appointments yet..</h5>
                                )
                            }
                            <Experience experience={profile.experience} />
                            <Education education={profile.education} />
                            <Button variant='contained'
                                onClick={() => deleteAccount()}
                                type="button"
                            >Delete My Account</Button>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Typography variant='h6'>You have not any Profile add your Profile..</Typography>
                            <br />
                            <Link to='/create-profile' className="btn btn-info">
                                Create Profile
                            </Link>
                        </Fragment>
                    )}
                </div>
            </section>
            <br />
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    authDoctor: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    authDoctor: state.authDoctor,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
