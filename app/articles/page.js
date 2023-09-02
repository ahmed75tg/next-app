import Link from "next/link"


export default function articles(){
    return(
        <div>
            <h3>articles Page</h3>
            <Link href="./articles/newArticles">New</Link>
        </div>
    )
}