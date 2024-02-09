import React from "react";
import { comments } from "../constants";

const Comment = ({ data }) => {
  const { name, text, replay } = data;

  return (
    <>
      <div className="text-white border-2 border-gray-600 rounded-lg flex gap-3 p-3 my-3">
        <div>
          <img className="w-10" src="user.png" alt="user image" />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment  data={comment} />
            <div className="ml-10">
              <CommentList comments={comment?.replay}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="my-5 p-3 lg:w-[800px] border-2 border-gray-600 rounded-2xl">
      <p className="font-bold text-lg my-1">Comments - length</p>
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentContainer;
