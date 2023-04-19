import React, {useState} from 'react';
// import Comments from "./components/posts/posts";
// import Posts from "./components/posts/posts";
// import DetailsPosts from "./DetailsPosts/detailsPosts";
import "./App.css";
// import Launchs from "./components/launchs/launchs";
import Users from "./components/users/users";
import UserPosts from "./components/userPosts/userPosts";
const App = () => {
    const [userId, setUserId] = useState(null);

//     const [chosenPost, setChosenPost] = useState(null);
//
//     const lift = (obj) => {
//         setChosenPost({...obj})
//     }
    return (
        <div className={'container'}>

            {/*<div className={'postsBlock'}>POSTS: <Posts lift={lift}/></div>*/}
            {/*{*/}
            {/*    chosenPost*/}
            {/*    &&*/}
            {/*    <div className={'detailsBlock'}>DETAILS: <DetailsPosts value={chosenPost}/></div>*/}
            {/*}*/}

            {/*<Launchs/>*/}
            <Users setUsersId={setUserId}/>
            {userId && <UserPosts userId={userId}/>}


        </div>
    );
}

export default App;
