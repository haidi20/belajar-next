import React, {useEffect, useState} from 'react';
import Post from './Post';

function Posts({data}) {

  // console.info(data);

  return (
    <div>
      {data && data.map((post, index) => 
        <Post 
          key={index}
          keyId={index}
          {...post.fields}
        />  
      )}
    </div>
  )
}

export default Posts