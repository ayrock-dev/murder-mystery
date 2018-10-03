import React, { PureComponent } from 'react';

export default class Clouds extends PureComponent {
    render() {
        return (
            <div className="cloud-wrapper">
                <div className="cloud-container">
                    <div className="cloud">
                        <div className="cloud-inner" />
                    </div>
                    <div className="cloud">
                        <div className="cloud-inner" />
                    </div>
                    <div className="cloud">
                        <div className="cloud-inner" />
                    </div>
                    <div className="cloud">
                        <div className="cloud-inner" />
                    </div>
                    <div className="cloud">
                        <div className="cloud-inner" />
                    </div>
                </div>
            </div>
        );
    }
}
