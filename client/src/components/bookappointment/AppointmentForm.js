import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Form from './Form';
import { withRouter } from 'react-router-dom';
import './form.css'

const AppointmentForm = ({
    getProfileById,
    profile: { profileById },
    match,
    history
}) => {
    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id]);

    return (
        <Fragment>
            <div className='register'>
                {
                    profileById !== null ?
                        (
                            <Form profile={profileById.doctor} history={history} doctorId={profileById.doctor._id} />
                        ) : (
                            ""
                        )
                }
                 <div className="img-side">
                <img src={require("../../img/calendar.svg")} alt="" className="register-user" />
            </div>
            </div>
           

        </Fragment>
    );
};

AppointmentForm.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(withRouter(AppointmentForm));
