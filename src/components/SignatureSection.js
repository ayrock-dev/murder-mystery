import React, { PureComponent } from 'react';

export default class SignatureSection extends PureComponent {
    render() {
        return (
            <section className="section has-background-info">
                <div className="container">
                    <h3 class="title has-text-right has-text-light">
                        - Yours Truly,
                        <br />
                        The Duke
                        <br />
                        <span className="duke-sig">Eric Lee</span>
                    </h3>
                </div>
            </section>
        );
    }
}
