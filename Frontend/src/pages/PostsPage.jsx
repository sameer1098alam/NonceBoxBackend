import React, { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext';
import PostList from '../components/Posts/PostList';
import { Link } from 'react-router-dom';

const PostsPage = () => {
    const { posts, likePost, commentOnPost } = useContext(PostContext);
    const [newPost, setNewPost] = useState({ title: '', content: '' });

    const handleCreatePost = () => {
        // Logic to create a new post (could be a POST request to the backend)
    };

    return (
        <div>
            <h2>Posts</h2>
            <div>
                <button onClick={() => handleCreatePost()}>Create New Post</button>
            </div>
            <PostList posts={posts} likePost={likePost} commentOnPost={commentOnPost} />
            <Link to="/logout">
                <button>Logout</button>
            </Link>
        </div>
    );
};

export default PostsPage;
