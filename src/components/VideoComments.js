import React from 'react'
import CommentCard from './CommentCard'

function VideoComments({ comments, showComments }) {
    const commentsComponents = comments.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />
    })
    return (
        <div>
            {
                showComments ? commentsComponents : ""
            }
        </div>
    )
}

export default VideoComments