import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, likePost, commentOnPost }) => {
    return (
        <div>
            <h3>All Posts</h3>
            {posts.map((post) => (
                <PostItem 
                    key={post._id} 
                    post={post} 
                    likePost={likePost} 
                    commentOnPost={commentOnPost} 
                />
            ))}
        </div>
    );
};

export default PostList;
