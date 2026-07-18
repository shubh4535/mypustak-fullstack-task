from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
                   "mypustak-fullstack-task.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Post(BaseModel):
    title: str
    body: str


posts = [
       {
        "id": 1,
        "title": "Hello",
        "body": "My first post"
    }
]

@app.get("/")
def home():
    return {"message": "Welcome to MYPustak API"}


@app.get("/posts")
def get_posts():
    return posts

@app.post("/posts")
def create_post(post: Post):

    new_post = {
        "id": len(posts) + 1,
        "title": post.title,
        "body": post.body
    }

    posts.append(new_post)

    return new_post

@app.delete("/posts/{id}")
def delete_posts(id: int):
    for post in posts:
        if post["id"] == id:
            posts.remove(post)

            return {"message": "Post Deleted Successfully"}
    
    return {"message": "Post Not found"}