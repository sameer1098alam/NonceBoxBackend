import React, { useState } from 'react';
import LikeButton from './LikeButton';
import CommentForm from './CommentForm';

const PostItem = ({ post, likePost, commentOnPost }) => {
    const [commentText, setCommentText] = useState('');

    const handleCommentSubmit = () => {
        commentOnPost(post._id, commentText);
        setCommentText('');
    };

    return (
        <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <LikeButton postId={post._id} />
            <div>
                <h4>Comments</h4>
                {post.comments.map((comment, index) => (
                    <div key={index}>
                        <strong>{comment.user.name}:</strong> {comment.text}
                    </div>
                ))}
                <CommentForm 
                    commentText={commentText} 
                    setCommentText={setCommentText}
                    handleCommentSubmit={handleCommentSubmit} 
                />
            </div>
        </div>
    );
};

export default PostItem;
