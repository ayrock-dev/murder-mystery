import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import data from '../data.json';
import bg from '../bg.png';

const createMarkup = content => ({
    __html: content
});

class CharacterPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            char: data.characters.find(
                c =>
                    c.id.toLowerCase() ===
                    decodeURIComponent(props.match.params.id).toLowerCase()
            )
        };
    }

    render() {
        const { char } = this.state;

        if (!char) {
            return <Redirect to={'/?e=invalid'} />;
        }

        return (
            <div className="CharacterPage">
                <div className="page-wrapper">
                    <img className="bg" src={bg} alt="Murder mansion" />
                    <section className="section identity">
                        <div className="name-wrapper">
                            <span
                                className="name"
                                dangerouslySetInnerHTML={createMarkup(
                                    char.name
                                )}
                            />
                        </div>
                        <div className="role-wrapper">
                            <span className="role">{char.role}</span>
                        </div>
                        <div className="see-more">
                            <span className="icon is-large">
                                <i class="fas fa-angle-double-down fa-3x" />
                            </span>
                        </div>
                    </section>
                    <div className="content-wrapper">
                        <section className="section">
                            <div
                                className="content"
                                dangerouslySetInnerHTML={createMarkup(
                                    char.content
                                )}
                            />
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterPage;
