// client component
// 'use client'

import React from 'react'
import ViewUserButton from '../components/Posts/ViewUserButton'
import CardList from '../components/Posts/CardList'

// styling manual dengan menggunakan css
// import styles from "./PostPage.module.css"

const base_url = "https://jsonplaceholder.typicode.com/posts";

// fungsi dari typescript untuk keamanan
interface Iposts {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const Posts = async() => {
    const response = await fetch(base_url, {
        cache: 'no-store'
    });
    const posts: Iposts[] = await response.json();

  return (
    // styling manual dengan menggunakan css
    // <div className={styles.bgRed}>Halaman Post</div>

    <>
        {/* server component */}
        <h1 className="bg-slate-300">HALAMAN POSTS</h1>
        {/* <p>{posts[3].body}</p> */}

        {posts.map((post) => {
            return (
                <CardList key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <ViewUserButton userId={post.userId} />
                </CardList>
            )
        })}

        {/* client component */}
        {/* <button onClick={() => console.log("Lihat User")}>Lihat User</button> */}
    </>
  )
}

export default Posts