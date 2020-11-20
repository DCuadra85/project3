import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password, password_confirmation }

        axios
            .post(
                "http://loclahost:3001/registrations",
                {
                    user: {
                        email: email,
                        password: password,
                        password_confirmation: password_confirmation
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.hundleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                <button type="submit">Register</button>
                </form>
            </div>
        )
    }

}