import React, { PureComponent } from 'react';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content">
                        <strong>Murder Mystery at Cedar Grove</strong> is an
                        event hosted by Eric Lee. I also made this cool
                        website,&nbsp;
                        <a href="https://github.com/ayrock-dev/murder-mystery">
                            check out it's source code here.
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}
