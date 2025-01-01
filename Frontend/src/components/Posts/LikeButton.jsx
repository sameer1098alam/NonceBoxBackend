import React, { useState } from 'react';

const LikeButton = ({ postId }) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        // Call the API to like/unlike the post
    };

    return (
        <button onClick={handleLike}>
            {liked ? 'Unlike' : 'Like'}
        </button>
    );
};

export default LikeButton;
