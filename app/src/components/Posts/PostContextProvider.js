import React, { createContext, useEffect, useState } from 'react';
import { PostData } from './PostInfo';

export const PostInformation = createContext();

const PostContextProvider = ({children}) => {

    const [post , setPost] = useState([]);

    useEffect(()=>{
        setPost(PostData);
    },[]);

    return (
        <PostInformation.Provider value={post}>
            {children}
        </PostInformation.Provider>
    );
};

export default PostContextProvider;