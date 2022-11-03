import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout_user } from '../../actions/authUser';
import { logout_doctor } from '../../actions/authDoctor';
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import Logo from "./doctor (1).png"

import '../../App.css';

const Navbar = (
    {
        authUser: { isUserAuthenticated, loadingUser, user }, logout_user,
        authDoctor: { isDoctorAuthenticated, loadingDoctor, doctor }, logout_doctor
    }
) => {

    const UserLinks = [
        {
            url: "/profiles",
            label: 'Docter',

        },

        {
            label: 'Appointments',
            url: "/appointment"
        },
    ]
    const DoctorLinks = [
        {
            label: 'Dashboard',
            url: "/dashboard"
        },

        {
            url: "/profiles",
            label: 'Docter',

        },
        {
            label: 'Update Profile',
            items: [
                {
                    label: 'Edit Profile',
                    url: "/edit-Profile"

                },
                {
                    label: 'Add Education',
                    url: "/add-Education"

                },
                {
                    label: 'Add Experience',
                    url: "/add-Experience"

                },
            ],
        },

    ]
    const items = [
        {
            label: 'Home',
            icon: "pi pi-fw pi-home",
            url: "/"
        },

        {
            icon: "pi pi-fw pi-plus-circle",
            url: "/profiles",
            label: 'Docter',

        },
        {
            icon: "pi pi-fw pi-user",
            label: 'Login',
            items: [
                {
                    label: 'Login as User',
                    icon: 'pi pi-fw pi-user-plus',
                    url: "/loginUser"

                },
                {
                    label: 'Login as Docter',
                    icon: 'pi pi-fw pi-user-plus',
                    url: "/loginDoctor"

                },
            ],
        },
        {
            icon: "pi pi-fw pi-users",
            label: 'Register',
            items: [
                {
                    label: 'Register as User',
                    icon: 'pi pi-fw pi-user-plus',
                    url: "/registerUser"

                },
                {
                    label: 'Register as Docter',
                    icon: 'pi pi-fw pi-user-plus',
                    url: "/registerDoctor"

                },
            ],
        },
    ];
    const start = <img alt="logo" src={Logo} height="45" className="mr-2"></img>;
    const end = (
        <div style={{ display: "flex" }}>
            <Button className="p-button-sm" onClick={logout_user}>Logout</Button>
        </div>

    );
    const DocterEnd = (
        <div style={{ display: "flex" }}>
            <Button className="p-button-sm" onClick={logout_doctor}>Logout</Button>
        </div>

    );


    return (
        <Fragment>

            {
                isUserAuthenticated || isDoctorAuthenticated ? (
                    <Fragment>
                        {
                            !loadingUser && (
                                <Fragment>
                                    {
                                        isUserAuthenticated ?
                                            <div>
                                                <div className="card" >
                                                    <Menubar model={UserLinks} start={start} end={end} style={{ paddingLeft: "20px", }} />
                                                </div>
                                            </div> : <div>
                                                <div className="card" >
                                                    <Menubar model={DoctorLinks} start={start} end={DocterEnd} style={{ paddingLeft: "20px", }} />
                                                </div>
                                            </div>
                                    }
                                </Fragment>
                            )
                        }
                    </Fragment>
                ) : <div>
                    <div className="card" >
                        <Menubar model={items} start={start} style={{ paddingLeft: "20px", }} />
                    </div>
                </div>
            }
        </Fragment>
    );
};

Navbar.propTypes = {
    logout_user: PropTypes.func.isRequired,
    logout_doctor: PropTypes.func.isRequired,
    authUser: PropTypes.object.isRequired,
    authDoctor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    authUser: state.authUser,
    authDoctor: state.authDoctor
});

export default connect(mapStateToProps, { logout_user, logout_doctor })(Navbar);

