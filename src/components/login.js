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
import { login } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import { loggedIn } from '../actions/sessionActions'

import { useSelector } from 'react-redux'
// import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from 'history'

// import { withRouter } from "react-router"
import {useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';


class Login extends Component {
  state = {
    modal: false,
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
    // console.log(this.props)
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'LOGIN_FAIL') {
         console.log("msg?", error)
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    console.log("Hits inside obSubmit of login")
    e.preventDefault();

    // DO I NEED A LOCAL STATE?
    const { email, password } = this.state;
    console.log(email)
    let returningUser = {
      email,
      password
    }

    this.props.login(returningUser)
    console.log("props", this.props)
    // if(localStorage.token !== null) {
    //   history.push('/search')
    // }
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>

            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
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
                  Log in
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

export default connect(mapStateToProps,{ login, clearErrors, loggedIn })(Login);
