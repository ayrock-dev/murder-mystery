import React, { PureComponent } from 'react';

export default class Lettering extends PureComponent {
    render() {
        const { text, className } = this.props;
        if (!text) return null;
        return (
            <span className={className}>
                {text.split('').map((c, i) => (
                    <span key={`${c}${i}`} className={`char${i + 1}`}>
                        {c}
                    </span>
                ))}
            </span>
        );
    }
}
