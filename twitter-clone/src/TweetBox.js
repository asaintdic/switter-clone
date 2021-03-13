import React from 'react'
import "./TweetBox.css"
import {Avatar, Button } from "@material-ui/core"


function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="data:image/jpeg;base64,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"/>
                <input placeholder="Tweet Here" type="text"/>
                {/* <input placeholder="Enter Image Url" type="text"/> */}
                
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
