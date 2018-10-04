import React, { PureComponent } from 'react';

export default class EventDetailsSection extends PureComponent {
    render() {
        return (
            <section className="section has-background-white-ter">
                <div className="container">
                    <h2 className="title">Event</h2>
                    <div className="columns">
                        <div className="column">
                            <h3 className="is-size-4">When</h3>
                            <p>
                                Nov 3rd <br />
                                7pm to 10:30pm
                            </p>
                        </div>
                        <div className="column">
                            <h3 className="is-size-4">Where</h3>
                            <p>
                                Eric's Apartment
                                <br />
                                3825 Cedar Grove Parkway
                                <br />
                                Eagan, MN 55122
                            </p>
                        </div>
                        <div className="column">
                            <h3 className="is-size-4">Dress</h3>
                            <p>Eccentric Victorian Formal</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
