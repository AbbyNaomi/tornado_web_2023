import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function PostDetail() {
    const {postId} = useParams();
    const [post,setPosts] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then (response => response.json())
          .then(data => setPosts(data))
          .catch(error => console.error('Error fetching post:',error));
    }, [postId]);

    if (!post) return <div>Loading...</div>

    return (
        <div>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default PostDetail; 