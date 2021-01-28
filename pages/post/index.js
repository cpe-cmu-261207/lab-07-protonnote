import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '6012ee5f6a33f586a8ce53bd';

const Posts = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {         
        axios.get(baseURL+"/post", { headers: { "app-id": APP_ID }}).then((respond)=>{             
        console.log(respond)             
        setPosts(respond.data.data)         
    })},[] )

    return (
        <>
        <header>
        <nav>
          <center>
            <div class="topnav">
                <Link href="/">
                  <button><h4><belgano>Home</belgano></h4></button>
                </Link>
                <Link href="Gallery">
                  <button><h4><belgano>Gallery</belgano></h4></button>
                </Link>
                <Link href="Contact">
                  <button><h4><belgano>Contact</belgano></h4></button>
                </Link>
                <Link href="GPAcal">
                  <button><h4><belgano>GPA calculator</belgano></h4></button>
                </Link>
                <Link href="post">
                  <button><h4><belgano>Posts</belgano></h4></button>
                </Link>
            </div>
          </center>
        </nav>
        </header>
        <center><h1><san>Posts</san></h1></center>

        <ul>
            {posts.map(post => {
                console.log(post)
                return (
                    <center>
                        <li>
                            <h3>Post : {post.text}</h3>
                            <img src = {post.image} alt = "fail to load"/>
                            <p>Likes : {post.likes}</p>
                            <Link  key={post.id} href={`/post/${post.id}`}>
                                <button style={{margin:10}}>Go to this post</button>
                            </Link>
                        </li>
                    </center>
                ) 
            })}
        </ul>
        </>
    )
}


export default  Posts
