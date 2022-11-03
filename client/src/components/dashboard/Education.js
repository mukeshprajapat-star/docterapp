import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import { Typography ,Button} from '@mui/material';
import Table from 'react-bootstrap/Table';

const Education = ({ education, deleteEducation }) => {
    const educations = education.map(edu => (
        <tr key={edu.id}>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
            <td>
                <Moment format='DD/MM/YYYY'>{edu.from}</Moment> - {' '}
                {edu.to === null ? (
                    'Now'
                ) : (
                    <Moment format='DD/MM/YYYY'>{edu.to}</Moment>
                )}
            </td>
            <td>
                <Button
                    onClick={() => deleteEducation(edu._id)}
                    type="button"
                    variant='outlined'>X
                </Button>
            </td>
        </tr>
    ));
    return (
        <Fragment>
            <div className="common-details">
                <Typography>Education Credentials</Typography>
                <br />
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Degree</th>
                            <th>Years</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {educations}

                    </tbody>
                </Table>


            </div>
            <br />
        </Fragment>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, { deleteEducation })(Education);
