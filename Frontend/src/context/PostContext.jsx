import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all posts
    const fetchPosts = async () => {
        try {
            const { data } = await axios.get('/api/posts');
            setPosts(data);
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        } finally {
            setLoading(false);
        }
    };

    // Create a new post
    const createPost = async (post) => {
        try {
            await axios.post('/api/posts', post);
            fetchPosts(); // Refresh the post list
        } catch (error) {
            console.error("Failed to create post:", error);
        }
    };

    // Update a post
    const updatePost = async (postId, updatedPost) => {
        try {
            await axios.put(`/api/posts/${postId}`, updatedPost);
            fetchPosts(); // Refresh the post list
        } catch (error) {
            console.error("Failed to update post:", error);
        }
    };

    // Delete a post
    const deletePost = async (postId) => {
        try {
            await axios.delete(`/api/posts/${postId}`);
            fetchPosts(); // Refresh the post list
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };

    // Like a post
    const likePost = async (postId) => {
        try {
            await axios.post(`/api/posts/${postId}/like`);
            fetchPosts(); // Refresh the post list
        } catch (error) {
            console.error("Failed to like post:", error);
        }
    };

    // Comment on a post
    const commentOnPost = async (postId, comment) => {
        try {
            await axios.post(`/api/posts/${postId}/comment`, { comment });
            fetchPosts(); // Refresh the post list
        } catch (error) {
            console.error("Failed to comment on post:", error);
        }
    };

    useEffect(() => {
        if (loading) fetchPosts();
    }, [loading]);

    return (
        <PostContext.Provider value={{ posts, loading, createPost, updatePost, deletePost, likePost, commentOnPost }}>
            {children}
        </PostContext.Provider>
    );
};

export { PostContext, PostProvider };
