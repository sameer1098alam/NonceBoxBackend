import api from "../utils/api";

export const fetchPosts = async () => {
    const response = await api.get("/posts");
    return response.data;
};

export const likePostApi = async (postId) => {
    const response = await api.post(`/posts/${postId}/like`);
    return response.data;
};

export const commentOnPostApi = async (postId, text) => {
    const response = await api.post(`/posts/${postId}/comment`, { text });
    return response.data;
};
