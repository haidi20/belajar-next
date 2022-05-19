import React from 'react';
import axios from 'axios';

export function fetchPosts() {
    const posts = axios
        .get(`${process.env.NEXT_BASE_API_URL}/posts?key=${process.env.NEXT_API_KEY}`)
        .then(response => {
            return response.data.documents;
        });

    return posts;

}