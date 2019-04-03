import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Type from "prop-types";
import { PAGES } from "../../routes/pages";
import { selectEmail, selectPassword } from "../../redux/selectors/login-selectors";
import { fetchLoginThunkAC } from "../../redux/actions/login-actions";

const mapStateToProps = state => ({
  email: selectEmail(state),
  password: selectPassword(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchLogin: fetchLoginThunkAC
    },
    dispatch
  );

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  static propTypes = {
    email: Type.string,
    password: Type.string,
    isLoginFetching: Type.bool,
    fetchLogin: Type.func
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleFetchLogin = () => {
    this.props.fetchLogin(this.state);
  };

  render() {
    return (
      <React.Fragment>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h3 className="text-center mb-4">Sign-in</h3>
            <fieldset>
              <div className="form-group has-error">
                <input
                  className="form-control input-lg"
                  placeholder="E-mail Address"
                  name="email"
                  value={this.state.email}
                  type="text"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="form-group has-success">
                <input
                  className="form-control input-lg"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  type="password"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <input
                className="btn btn-lg btn-primary btn-block"
                value="Sign Me In"
                type="submit"
                onClick={this.handleFetchLogin}
              />
            </fieldset>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

const VisibleLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
export default VisibleLogin;
