import React, {Component} from 'react';
import {formatTweet,formatDate} from '../utils/helpers';
import {connect} from 'react-redux';
class Tweet extends Component{
    render(){
        const {tweet}=this.props;
        if(tweet===null){
            return <p>This Tweet doesn't exists</p>
        }
        const {
            name,
            id,
            timestamp,
            text,
            avatar,
            likes,
            replies,
            hasLiked,
            parent} =tweet
        return(
            <div className='tweet'>
                <img
                src={avatar}
                alt={`This is picture of ${name}`}
                className='avatar'
                />
                <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                    </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps({authedUser,tweets,users},{id}){
    const tweet=tweets[id]  
    const parentTweet= tweet?tweets[tweet.replyingTo]:null
    return {
        authedUser,
        tweet:tweet ? formatTweet(tweet,users[tweet.author],authedUser,parentTweet):null
    }
}
export default connect(mapStateToProps)(Tweet);