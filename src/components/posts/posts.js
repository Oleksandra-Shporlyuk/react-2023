import React, {useEffect, useState} from 'react';
import Post from "../post/post";

// const Posts = ({lift}) => {
//
//     const [posts,setPosts] = useState([]);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(value => value.json())
//             .then(allPosts => {
//                 setPosts([...allPosts])
//             });
//     }, [])
//
//
//     return (
//         <>
//             {
//                 posts.map(value => <Post post={value} key={value.id} lift={lift}/>)
//             }
//         </>
//     );
// }
//
// export default Posts;