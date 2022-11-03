import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { Typography, Button } from '@mui/material';
import './createprofile.css'

const Edit = ({ profile: { profile, loading }, createProfile, getCurrentProfile, history }) => {
    const [formData, setFormData] = useState({
        clinic: '',
        website: '',
        location: '',
        status: '',
        specialists: '',
        ruppess: '',
        timing: '',
        bio: '',
        twitter: '',
        facebook: '',
        youtube: '',
        instagram: ''
    });

    const [displySocialInputs, toggleSocialInputs] = useState(false);
    useEffect(() => {
        getCurrentProfile();
        setFormData({
            clinic: loading || !profile.clinic ? '' : profile.clinic,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            specialists: loading || !profile.specialists ? '' : profile.specialists,
            ruppess: loading || !profile.ruppess ? '' : profile.ruppess,
            timing: loading || !profile.timing ? '' : profile.timing,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram: loading || !profile.social ? '' : profile.social.instagram
        });
    }, [loading, getCurrentProfile,profile.clinic ,
        profile.website,profile.location,profile.status,
        profile.specialists,profile.ruppess,profile.timing,profile.bio,profile.social]);

    const {
        clinic,
        website,
        location,
        status,
        specialists,
        ruppess,
        timing,
        bio,
        twitter,
        facebook,
        youtube,
        instagram
    } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };

    return (
        <Fragment>



            <div className='register'>
                <form className='registerForm' onSubmit={e => onSubmit(e)}>
                    <Typography variant='h4'>Edit Profile</Typography>

                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="* Enter your status. eg. Professor, Senior Specalist etc."
                        name="status"
                        value={status}
                        onChange={e => onChange(e)} required
                    />
                    <small className="form-text text-muted">Give us an idea of where you are at in your career</small>
                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="* Clinic"
                        name="clinic"
                        value={clinic}
                        onChange={e => onChange(e)} required
                    />
                    <small className="form-text text-muted">Could be your own clinic or one you work </small>

                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="Specalist"
                        name="specialists"
                        value={specialists}
                        onChange={e => onChange(e)} required
                    />
                    <small className="form-text text-muted">Give us an idea of your specalist. </small>

                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="* Timing"
                        name="timing"
                        value={timing}
                        onChange={e => onChange(e)} required
                    />
                    <small className="form-text text-muted">At which time you are available for patients, mention day with time. </small>

                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="* Ruppess"
                        name="ruppess"
                        value={ruppess}
                        onChange={e => onChange(e)} required
                    />
                    <small className="form-text text-muted">At which time you are available for patients, mention day with time. </small>

                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="* Website."
                        name="website"
                        value={website}
                        onChange={e => onChange(e)} required
                    />
                    <small className="form-text text-muted">Could be your own or a clinic website </small>

                    <input
                        type="text"
                        className="registerInputs"
                        placeholder="* Location."
                        name="location"
                        value={location}
                        onChange={e => onChange(e)} required
                    />
                    <small className="form-text text-muted">Could be your own clinic address or one you work </small>

                    <textarea
                        className="registerInputs"
                        placeholder="* A short bio of yourself"
                        name="bio"
                        value={bio}
                        onChange={e => onChange(e)} required
                    />
                    <Button onClick={() => toggleSocialInputs(!displySocialInputs)}
                        type="button" variant='text'>
                        Add Social Network Links
                    </Button>

                    {displySocialInputs && (
                        <Fragment>


                            <input
                                type="text"
                                className="registerInputs"
                                placeholder="Twitter Profile URL"
                                name="twitter"
                                value={twitter} onChange={e => onChange(e)} />

                            <input
                                type="text"
                                className="registerInputs"
                                placeholder="Facebook Profile URL"
                                name="facebook"
                                value={facebook} onChange={e => onChange(e)} />

                            <input
                                type="text"
                                className="registerInputs"
                                placeholder="Youtube Profile URL"
                                name="youtube"
                                value={youtube} onChange={e => onChange(e)} />


                            <input
                                type="text"
                                className="registerInputs"
                                placeholder="Instagram Profile URL"
                                name="instagram"
                                value={instagram} onChange={e => onChange(e)} />

                        </Fragment>
                    )}
                    <Button type="submit" variant='text'>Submit</Button>{' '}
                    <Link to="/dashboard" className="btn btn-outline-secondary" style={{ color: "black" }}>Go Back</Link>
                </form>
                <br />

                <div className="img-side">
                    <img src={require("../../img/mention.svg")} alt="" className="register-user" />
                </div>
            </div>


        </Fragment>
    );
};

Edit.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(Edit));
