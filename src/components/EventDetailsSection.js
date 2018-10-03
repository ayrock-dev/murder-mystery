import React, { PureComponent } from 'react';

export default class EventDetailsSection extends PureComponent {
    render() {
        return (
            <section className="section has-background-white-ter">
                <div className="container">
                    <h2 className="title">Event</h2>
                    <h3 className="is-size-4">When</h3>
                    <p>
                        Nov 3rd, 7pm to 10:30pm
                    </p>
                    <h3 className="is-size-4">Where</h3>
                    <p>
                        3825 Cedar Grove Parkway
                        Eagan, MN 55122
                    </p>
                </div>
            </section>
        );
    }
}
