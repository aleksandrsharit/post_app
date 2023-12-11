import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/',

});

export const postsAPI = {
    getPosts() {
        return instance.get('posts');
    },
    getPostComments(commentsId) {
        return instance.get(`posts/${commentsId}/comments`);
    },
    getPost(postId) {
        return instance.get(`posts/${postId}`);
    },
    addPost(post) {
        return instance.post('posts/', post);
    },
    editPost(postId) {
        return instance.put(`posts/${postId}`);
    },
    deletePost(postId) {
        return instance.delete(`posts/${postId}`)
    }
}

export const photosAPI = {
    getPhotos() {
        return instance.get('photos')
    },
    getAlbums() {
        return instance.get('albums')
    },
    getTodos() {
        return instance.get('todos')
    }
}

export const usersAPI = {
    getUsers() {
        return instance.get('users')
    }
}