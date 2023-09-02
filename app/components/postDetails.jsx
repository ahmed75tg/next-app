import { resolve } from "styled-jsx/css";

export default async function PostDetailsJSX({postID}){    
    await new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, 2000);
    })
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}`,
        {
            next: {
                revalidate: 120,
            },
        }
        )
       const post = await response.json();
    return(
        <div>

            <div
                style={{
                    width: "100%", 
                    backgroundColor: "white", 
                    padding: "20px", 
                    borderRadius: "10px", 
                    color: "black", 
                    marginTop: "30px"
                }}
            >
                <span>{post.id}</span>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
}