import React from 'react';
import {Players} from './../../imports/api/players'

export default class Player extends React.Component{
    render(){
        let itemClassName = `item item--position-${this.props.player.rank}`;

        return(
            <div className={itemClassName}>
                <div className="player">
                    <div>
                        <h3 className="player__name">{this.props.player.name}</h3>
                        <p className="player__stats">
                            {this.props.player.position} {this.props.player.score} point(s).
                        </p>
                    </div>
                    <div className="player__actions">
                        <button onClick={() => Players.update({_id: this.props.player._id}, {$inc: {score: -1}})} className="button button--round">-1</button>
                        <button onClick={() => Players.update({_id: this.props.player._id}, {$inc: {score: 1}})} className="button button--round">+1</button>
                        <button onClick={() => Players.remove({_id: this.props.player._id})} className="button button--round">X</button>
                    </div>
                </div>
            </div>
        );
    }
}

Player.propTypes = {
    player: React.PropTypes.object.isRequired
};