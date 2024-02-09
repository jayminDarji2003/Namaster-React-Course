import React, { useEffect, useState } from "react";

const Comment = ({ comments }) => {
  //console.log(comments[0]?.snippet?.topLevelComment.snippet.authorDisplayName);

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id} className="flex border my-5 p-4">
          <div className="rounded-full">
            <img
            className=""
              src={
                comment?.snippet?.topLevelComment?.snippet
                  ?.authorProfileImageUrl
              }
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <p>
              {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
            </p>
            <p>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const CommentContainer = ({ videoId }) => {
  const [videoComments, setvideoComments] = useState([]);
  const videoUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=AIzaSyAchkxS61EhuWM3ftW_614cDic0SZi6FjQ`;

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const comments = await fetch(videoUrl);
    const json = await comments.json();
    //console.log(json.items.length);
    setvideoComments(json.items);
  };

  // console.log(videoComments?.length)
  // console.log(videoComments)

  return (
    <div className="my-5 p-3 lg:w-[800px] border-2 border-gray-600 rounded-2xl">
      <p className="font-bold text-lg my-1 text-white">
        Comments - {videoComments?.length}
      </p>

      {videoComments && <Comment comments={videoComments} />}
    </div>
  );
};

export default CommentContainer;

//  nested commnets using mock data.

// const Comment = ({ data }) => {
//   const { name, text, replay } = data;

//   return (
//     <>
//       <div className="text-white border-2 border-gray-600 rounded-lg flex gap-3 p-3 my-3">
//         <div>
//           <img className="w-10" src="user.png" alt="user image" />
//         </div>
//         <div>
//           <p className="font-bold">{name}</p>
//           <p>{text}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// const CommentList = ({ comments }) => {
//   return (
//     <div>
//       {comments.map((comment, index) => {
//         return (
//           <div key={index}>
//             <Comment data={comment} />
//             <div className="ml-10">
//               <CommentList comments={comment?.replay} />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
