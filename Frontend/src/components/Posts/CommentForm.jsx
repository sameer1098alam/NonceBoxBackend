import React from 'react';

const CommentForm = ({ commentText, setCommentText, handleCommentSubmit }) => {
    return (
        <div>
            <textarea 
                value={commentText} 
                onChange={(e) => setCommentText(e.target.value)} 
                placeholder="Add a comment..." 
            />
            <button onClick={handleCommentSubmit}>Comment</button>
        </div>
    );
};

export default CommentForm;
