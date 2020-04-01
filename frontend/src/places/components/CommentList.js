import React from "react";
import Comment from "./Comment";

export default function CommentList({comments, removeComment, updateComment}) {
  return (
    <div>
      {comments && comments.length > 0 ? 
        <React.Fragment>
          <h5 style={{color:"white", 
         }}>
            <span>{comments.length}</span>{" "}
            Comment{comments.length === 1 ? " " : "s"}
          </h5>
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} removeComment={removeComment} updateComment={updateComment}/>
          ))}
        </React.Fragment>
      : <div style={{marginLeft:"10px", color:"white"}}>Be the first to comment</div>}
    </div>
  );
}