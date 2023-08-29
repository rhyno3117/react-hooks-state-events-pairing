import React from 'react'

function CommentCard({ comment }) {
  console.log(comment)
  return (
    <>
      <h1>{comment.user}</h1>
      <p>{comment.comment}</p>
    </>
  )
}

export default CommentCard