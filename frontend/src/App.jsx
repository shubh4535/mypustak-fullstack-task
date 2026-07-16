import { useState, useEffect } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const createPost  = async () => {
  const response = await fetch("http://127.0.0.1:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
            title: title,
            body: body
        }),
    });

    setTitle("");
    setBody("");

    fetchPosts();
  }

const fetchPosts = async () => {
  try {
    setLoading(true);

    const response = await fetch("http://127.0.0.1:8000/posts");

    const data = await response.json();

    setPosts(data);
  } catch (error) {
    alert("Failed to load posts.");
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const deletePost = async (id) => {
  await fetch(`http://127.0.0.1:8000/posts/${id}`, {
    method: "DELETE",
  });

  fetchPosts();
};

useEffect(() => {
  fetchPosts();
}, []);

  return (
    
    <>
      <div>
        <h1>My Pustak Post Management</h1>

        <hr />

        <h2>Create New Post</h2>

        <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}/>

        <br />
        <br />

        <textarea placeholder="Enter Body" value={body} onChange={(e) =>setBody(e.target.value)}></textarea>

        <br/>
        <br/>

        <button onClick={createPost}>Create Post</button>

        <p>Title: {title}</p>

        <p>Body: {body}</p>

        <hr />

        <h2>Posts</h2>


        {loading && <p>Loading posts...</p>}

        {!loading && posts.length === 0 && <p>No posts available.</p>}

        {!loading && posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>

            <p>{post.body}</p>

            <button onClick={() => deletePost(post.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
