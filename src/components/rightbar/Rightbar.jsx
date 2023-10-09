import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"; 

export default function RightBar({profile}) {

    const HomeRightbar =()=>{
        return(
            <>
             <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Kuldip Rathod</b> and <b>3 other friends</b> have a birthday today.
                         </span>
                </div>
                <img className="rightbarAD" src="assets/ad.png" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) =>(
                     <Online key={u.id} user={u}/>
                    ))}
                </ul>
                 </>
        );
    };

    const ProfileRightbar = () =>{
        return(
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Ahemdabad</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">manekchok</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="assets/person/dixa.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">dixa</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/person/kachu.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">kachu</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/person/romin.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">romin</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/person/smit.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">smit</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/person/krishna.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">krishna</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/person/kd.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">kd</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/person/tanvi.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">tanvi</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/person/Rishi.jpeg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Rishi</span>
            </div>
            </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
}