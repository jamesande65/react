import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 30
        }
    }

    countdown(){
        if(this.state.seconds > 0) {
            this.setState({
                seconds: --this.state.seconds
            });
            setTimeout(this.countdown.bind(this), 1000);
        } else {
            this.timeIsOver();
        }
    }

    timeIsOver() {
        let speech = new SpeechSynthesisUtterance();
        let voices = speechSynthesis.getVoices();
        speech.voice = voices.find(voice =>
            voice.name === 'Google US English');
        speech.text = 'Your time is out!';
        speechSynthesis.speak(speech);
    }

    render() {
        window.onload = this.countdown.bind(this);
        const { seconds } = this.state;
        return (
            <div className={seconds < 1 ? 'countdown boom' : 'countdown'}>
                <h1>Timer
                    <span style={ {color: seconds < 6 ? 'red' : 'green'}}> { seconds } </span>
                </h1>
            </div>
        )
    }
}

export default Timer;