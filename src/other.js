import React from 'react';
import Post from './post';
const Others = () => {
    const accName=['#James', '#Phillips', '#Harry', '#Peter', '#Vardy', '#Mary', '#Gusta', '#Leeds', '#Marguire']
    const accStatus = [
        "Life is a game, if you are not careful you will lose it",
        "If it were not for electricity, we would all be watching TV by candlelight.",
        "Well you don’t always need to flirt because Love will be knocking on your door one day and it will be shooting up like a missile",
        "If i loan you my heart do you promise to treat it right?",
        "Live life like there is no tomorrow!",
        "Adults are kids with money.",
        "If beauty was a crime you would be serving 3 life sentences.",
        "Some people drink from a glass, i drink from a fountain.",
        "I’m not shallow.. you’re just ugly!"
    ]
    return (
        <div>
            <div className="row">
                <div className="col span-1-of-3 box max-h">
                    <Post status={accStatus[0]} theOwner={accName[0]} />
                </div>
                <div className="col span-1-of-3 box max-h">
                    <Post status={accStatus[1]} theOwner={accName[1]} />
                </div>
                <div className="col span-1-of-3 box max-h">
                    <Post status={accStatus[2]} theOwner={accName[2]} />
                </div>
            </div>
            <div className="row">
                <div className="col span-1-of-3 box max-h">
                    <Post status={accStatus[3]} theOwner={accName[3]} />
                </div>
                <div className="col span-1-of-3 box max-h">
                    <Post status={accStatus[4]} theOwner={accName[4]} />
                </div>
                <div className="col span-1-of-3 box max-h">
                    <Post status={accStatus[5]} theOwner={accName[5]} />
                </div>
            </div>
            <div className="row">
                <div className="col span-1-of-3 box max-h">
                    <Post status={accStatus[6]} theOwner={accName[6]} />
                </div>
                <div className="col span-1-of-3 box max-h">
                    <Post status={accStatus[7]} theOwner={accName[7]} />
                </div>
                <div className="col span-1-of-3 box max-h">
                    <Post status={accStatus[8]} theOwner={accName[8]} />
                </div>
            </div>
        </div>
    )
};
export default Others;