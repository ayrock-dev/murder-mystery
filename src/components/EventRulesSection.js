import React, { PureComponent } from 'react';

export default class EventRulesSection extends PureComponent {
    render() {
        return (
            <section className="section has-background-white-ter">
                <div className="container">
                    <h2 className="title">Rules</h2>
                    <h3 className="is-size-4">Proceedings</h3>
                    <p>
                        The whole town has been invited to the Duke's estate. Rumor is, the Duke was 
                        looking to announce his will — as he certainly isn't getting any younger.
                        Everyone and thier dog have been itching to get a slice of the pie, but so badly
                        that someone was willing to commit murder? Word is, the Duke has been on the hunt
                        for a new Dutchess as well, ever since the Old Lady passed a few years ago.
                    </p>
                    <p>
                        The Duke's banquet is to be kept on a tight schedule. The night's itinerary includes
                        dinner, games, and bustling conversationn — among <i>other</i> things. 
                    </p>
                    <h3 className="is-size-4">Costumes</h3>
                    <p>
                        Attend as any character you like, as long as such an individual is tidy enough for
                        the dinner attire — <strong>eccentricly formal</strong>. The Duke himself will be
                        in top hat and cane. What other characters might make an appearance? Perhaps a
                        bloody butcher. Family members of the estate.
                    </p>
                    <h3 className="is-size-4">Updates</h3>
                    <p>
                        Nov 3rd, 7pm to 10:30pm
                    </p>
                </div>
            </section>
        );
    }
}
