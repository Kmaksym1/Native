import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from "../../config";

export const createPost = createAsyncThunk(
  "posts/create",
  async (credentials) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), credentials);

      return { ...credentials, id: docRef.id, comments:[] };
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  }
);

export const getPosts = createAsyncThunk("posts/get", async () => {
    try {
    const snapshot = await getDocs(collection(db, "posts"));
    const userPosts = [];
    snapshot.forEach((posts) =>
      userPosts.push({ ...posts.data(), id: posts.id })
    )
    return userPosts;
  } catch (e) {
    console.log(e);
    throw e;
  }
});


export const updatePost = createAsyncThunk("posts/update",
    async ({postId, comment, date}) => {
    try {
      const postsRef = doc(db, "posts", postId);
    //   const docRef = await addDoc(collection(db, "posts"), credentials);
            // await addDoc(ref, {
            //     comment,
            //     date
            // });
            // await updateDoc(postRef, {
            //     comments: arrayUnion(comment),
            //   });
            await updateDoc(postsRef, {
              comments: arrayUnion({comment, date}),

              
            });
      console.log("document updated", postsRef);
    } catch (error) {
      console.log(error);
    }
  })
