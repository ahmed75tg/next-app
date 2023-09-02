import { resolve } from "styled-jsx/css";
import PostDetailsJSX from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetails({params}){
    const postID = params.postID
    const loadingJSX = (<div><h1>Loading...</h1></div>)
    return(
        <div>
            <h1>Post Details</h1>

            <Suspense fallback={loadingJSX}>
            <PostDetailsJSX postID={postID}/>
            </Suspense>
           
        </div>
    )
}