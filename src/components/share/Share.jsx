import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'

export default function Share(){
    return(
        <div className="share">
            <div className="sharWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/8.jpeg" alt=""/>
                    <input placeholder="what's in your mind safak" 
                    className="shareInput"
                    />
                </div>
                <hr className="shareHr"/>
                <div className="shareButton">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room  htmlColor="green"className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Fellings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}