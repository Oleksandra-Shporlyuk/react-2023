import React from 'react';
import post from "../components/post/post";

const DetailsPosts = ({value}) => {
    return (
        <div>
            {
                <div>
                    <div>{value.id}</div>
                    <div>{value.title}</div>
                    <div>{value.body}</div>
                    <div>{value.userId}</div>

                </div>


            }
        </div>
    );
};

export default DetailsPosts;