import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

import { useSelector } from 'react-redux'

class Signup extends Component {
  state = {
    modal: false,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    msg: null
  };

  // static propTypes = {
  //   isAuthenticated: PropTypes.bool,
  //   error: PropTypes.object.isRequired,
  //   register: PropTypes.func.isRequired,
  //   clearErrors: PropTypes.func.isRequired
  // };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'REGISTER_FAIL') {
         console.log("msg?", error)
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    console.log("Hits inside obSubmit of signup")
    e.preventDefault();

    const { first_name, last_name, email, password } = this.state;

    // Create user object
    let newUser = {
      first_name,
      last_name,
      email,
      password
    };

    // Attempt to register
    console.log("Before")
    this.props.register(newUser)
    console.log("After")
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>

            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>First Name</Label>
                <Input
                  type='text'
                  name='first_name'
                  id='first_name'
                  placeholder='First Name'
                  className='mb-3'
                  onChange={this.onChange}
                />
              <br />
              <Label for='name'>Last Name</Label>
                <Input
                  type='text'
                  name='last_name'
                  id='last_name'
                  placeholder='Last Name'
                  className='mb-3'
                  onChange={this.onChange}
                />
              <br />
              <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />
              <br />
              <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <br />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Register
                </Button>
              </FormGroup>
            </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(Signup);
