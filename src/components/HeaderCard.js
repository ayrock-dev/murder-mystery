import React, { PureComponent, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

export default class HeaderCard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showForm: false,
            redirectTo: null
        };

        this.goToSignUp = this.goToSignUp.bind(this);
        this.goToFbEvent = this.goToFbEvent.bind(this);
        this.showForm = this.showForm.bind(this);
        this.submit = this.submit.bind(this);
    }

    goToSignUp() {
        window.open('https://goo.gl/forms/BCij5svd2iAvqZXT2', '_blank');
    }

    goToFbEvent() {
        window.open(
            'https://www.facebook.com/events/239440540081107',
            '_blank'
        );
    }

    showForm() {
        this.setState({ showForm: true });
    }

    submit(e) {
        e.preventDefault();
        const code = e.target.code.value;
        if (code) {
            const cleanCode = encodeURIComponent(code.toLowerCase().trim());
            this.setState({
                redirectTo: `${process.env.PUBLIC_URL}/character/${cleanCode}`
            });
        }
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect push to={this.state.redirectTo} />;
        }

        return (
            <Fragment>
                <div
                    className={`header-card has-text-centered ${
                        this.props.className
                    }`}
                >
                    <div>
                        <h3 className="title">
                            Nov 3<sup>rd</sup>
                        </h3>
                        <button
                            className="button is-info"
                            onClick={this.goToSignUp}
                        >
                            Sign Up
                        </button>
                        <button
                            className="button is-facebook"
                            onClick={this.goToFbEvent}
                        >
                            <span className="icon is-medium">
                                <i className="fab fa-facebook" />
                            </span>{' '}
                            <span>Event</span>
                        </button>
                    </div>
                    {!this.state.showForm && (
                        <div>
                            <button
                                className="button is-primary"
                                onClick={this.showForm}
                            >
                                View Character
                            </button>
                        </div>
                    )}
                    {this.state.showForm && (
                        <div>
                            <form onSubmit={this.submit}>
                                <div class="field has-addons centered-input">
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="code"
                                            placeholder="Character Code"
                                        />
                                    </div>
                                    <div className="control">
                                        <button
                                            type="submit"
                                            className="button is-primary"
                                        >
                                            Go
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </Fragment>
        );
    }
}
