import React, { PureComponent } from 'react';

class Toast extends PureComponent {
    render() {
        return (
            <div className="global-toast notification is-danger">
                <button className="delete" onClick={this.props.close} />
                Could not find any character for that character code.
            </div>
        );
    }
}

export default Toast;
