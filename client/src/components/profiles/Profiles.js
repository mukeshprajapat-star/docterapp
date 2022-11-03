import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import {getProfiles} from '../../actions/profile';
import './profile.css'
import { Typography } from '@mui/material';

const Profiles = ({getProfiles, profile: { profiles,loading }}) => {
    useEffect(() => {
        getProfiles();
    },[getProfiles]);

    return (
        <Fragment>
            { loading ? <Spinner /> : 
                <Fragment>
                        <div style={{marginTop:"50px"}}>
                            <Typography  variant='h4'>Doctor Profiles</Typography>
                      <Typography variant='body'> Book your Appointments</Typography>
                      </div>
                        <br />
                        {
                            profiles != null ? (
                                profiles.map(profile => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : <h4>No Profiles found..</h4>
                        }
                </Fragment>
            }
        </Fragment>
    )
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, {getProfiles})(Profiles);
