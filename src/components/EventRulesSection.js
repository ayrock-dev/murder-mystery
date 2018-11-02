import React, { PureComponent } from 'react';

export default class EventRulesSection extends PureComponent {
    render() {
        return (
            <section className="section has-background-white-ter">
                <div className="container">
                    <h2 className="title">Rules</h2>
                    <h3 className="is-size-4">Proceedings</h3>
                    <p>
                        The whole town has been invited to the Duke's estate.
                        Rumor is, the Duke was looking to announce his will — as
                        he certainly isn't getting any younger. Everyone and
                        thier dog have been itching to get a slice of the pie,
                        but so badly that someone was willing to commit murder?
                        Word is, the Duke has been on the hunt for a new
                        Dutchess as well, ever since the Old Lady passed a few
                        years ago.
                    </p>
                    <p>
                        The Duke's banquet is to be kept on a tight schedule.
                        The night's itinerary includes dinner, games, and
                        bustling conversationn — among <i>other</i> things.
                    </p>
                    <p>
                        You are about to become a suspect in a murder mystery.
                        It is up to you to figure out "whodunit" by denouncing
                        the guilty secrets of others while trying to prove your
                        innocence.
                    </p>
                    <h3 className="is-size-4">How To Play</h3>
                    <div className="content">
                        <ul>
                            <li>Attend!</li>
                            <li>Read your clues and character description.</li>
                            <li>
                                Please remain in character throughout the game.
                            </li>
                            <li>The game will take part in three Acts.</li>
                            <li>
                                The murderer(s) will not know that he or she is
                                the murderer. Thus, all players should suspect
                                even themselves.
                            </li>
                            <li>
                                Some of your clues will come in sealed
                                envelopes. Events throughout the night will
                                always be accompanied by symbols appearing on a
                                sign. If you see a symbol that matches a sealed
                                envelope you have, open it!
                            </li>
                            <li>
                                SHARE YOUR CLUES! During the games, talk to
                                everyone! See what clues they know, what their
                                alibi might be, who they think is the murderer!
                                Talk about your clues through the entire event.
                                The more people you talk to, the more likely you
                                will be to solve the mystery!
                            </li>
                            <li>
                                Before the final submission (which you will
                                write on a notecard and put in a box), all
                                guests will be allowed to share an accusation.
                                For each unique accusation, the suspect may
                                share their defense.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
