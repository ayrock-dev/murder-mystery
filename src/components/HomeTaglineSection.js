import React, { PureComponent } from 'react';

export default class HomeTaglineSection extends PureComponent {
    render() {
        return (
            <section className="section has-background-info has-text-light">
                <div className="container">
                    <h3 className="title has-text-light">Murder is Afoot</h3>
                    <p>
                        The groundskeeper found the pool boy murdered in cold blood. 
                        Nonetheless, the Duke's Banquetmust go on.
                    </p>
                </div>
            </section>
        );
    }
}
