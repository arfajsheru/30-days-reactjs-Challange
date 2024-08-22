import { createContext, useContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts : () => {}
});

const PostReducer = (currePostList, action) => {
  let newPostList = currePostList;
  if (action.type === "DELETE_POST") {
    newPostList = currePostList.filter(
      (post) => post.id !== action.payload.postid
    )
  }else if (action.type === "ADD_INITIAL_POST") {
    newPostList = [action.payload.posts, ...currePostList];
  }else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currePostList]
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostReducer,
    []
  );

  const addPost = (PostTitle,PostBody,PostUserId,PostTags,PostReactoin) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: PostTitle,
        body: PostBody,
        userId: PostUserId,
        tags: PostTags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost,addInitialPosts }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "React lerning",
    body:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a nostrum possimus totam ipsum unde illum repellendus aliquid quibusdam, accusamus reprehenderit corrupti. Ipsum praesentium veniam ratione! Officiis voluptas assumenda quaerat.",
    reaction: "345",
    userId: "user-53",
    tags: ["this", "is", "my"]
  },
];
export default PostListProvider;
