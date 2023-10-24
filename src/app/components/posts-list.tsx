import React from 'react'
import PostCard from './post-card'
import { type Post } from '@/app/types/posts'

const PostsList = ({ posts }: { posts: Post[] | null }) => {
  return (
    <>
      {
        posts?.map((post) => {
          const { id, user, message: content } = post
          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl
          } = user
          return (
            < PostCard key={id} userName={userName} avatarUrl={avatarUrl as string} userFullName={userFullName as string} content={content} />
          )
        })
      }

    </>
  )
}

export default PostsList
