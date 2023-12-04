import React, { useEffect, useState } from 'react';

function Ex01() {
    const [post, setPost] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const jsonData = await response.json();
                setPost(jsonData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                post(false);
            }
        };
        fetchData();
    }, []);

    if (!post) return <div>Loading ...</div>;
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Ex01;