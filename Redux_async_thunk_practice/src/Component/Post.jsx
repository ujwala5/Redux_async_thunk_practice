import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/Post/postSlice';
import './Post.css';


function Post() {

    const dispatch = useDispatch();
    const { value, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    return (
        <div className="post-container">

            {/* {loading == true ? <p>Loading ....</p> : null} */}
            {loading && <p>Loading ...</p>}
            {error && <p>Error : {error}</p>}


            {/* <ul>
                {value.map((item, index) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul> */}

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>

                    {value.map((item, index) => (
                        <tr key={index}>
                            <td >{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Post
