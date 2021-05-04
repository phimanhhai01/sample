import React from 'react';

const Post = ({status, theOwner}) => {
    const styleStatus = {
        width: "99%",
        padding: "9% 4%",
        height: "200px"
    }
    return(
        <div className="max-h">
            <h3>{theOwner}</h3>
            <div>
                <p className='style-post' style={styleStatus}>{status}</p>
            </div>
            <button type="button" className="btn btn-heart"><ion-icon name="heart-outline" className="btn-heart"></ion-icon></button>
            <button type="button" className="btn btn-cmt"><ion-icon name="chatbox-ellipses-outline" className="btn-cmt"></ion-icon></button>
            <button type="button" className="btn btn-share"><ion-icon name="arrow-redo-outline" className="btn-share"></ion-icon></button>
        </div>
    )
};
export default Post;