import React from 'react'
import map from 'lodash/map'
import classnames from 'classnames'
import timezone from '../data/features'

class ExampleForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordConfirmation: "",
            email: "",
            timezone: "",
            errors: {}
        }

        // In order to give context of the class not the event in the onchange event, bind "this" to component
        // We could also do as part of the input  --- onChange={this.onChange.bind(this)}  ---
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState( { [e.target.name]: e.target.value })
    }

    onSubmit(e){

        e.preventDefault();

        console.log("Trying to submit");
    }

    render() {

      let options = map(timezone, (val, key) =>
          <option key={val} value={val}>{key}</option>
      )

        return (

            <form onSubmit = {this.onSubmit}>
                <h1> Join our community </h1>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value = {this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value = {this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                        <input
                            value = {this.state.passwordConfirmation}
                            onChange={this.onChange}
                            type="password"
                            name="passwordConfirmation"
                            className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        value = {this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Timezone</label>
                        <select
                            value = {this.state.timezone}
                            onChange={this.onChange}
                            type="text"
                            name="timezone"
                            className="form-control"
                        >
                        <option> Initial Option </option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg"> Sign Up </button>
                </div>

            </form>
        )
    }
};

// Use a connect high order function
// Connect takes 2 params, The 1st = mapStateToProps (Some piece of data from redux store), Then it takes state
export default ExampleForm;
