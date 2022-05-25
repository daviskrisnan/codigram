import React from 'react';
import { useNavigate } from 'react-router-dom';


const PostTemplate = (props) => {
    const { data } = props;
    const navigation = useNavigate();

  return (
    <>
        <div className='card my-2 shadow-sm' style={ {width: '30rem'} }>
            <div style={{ flexDirection: 'column', height: '2rem' }}>
                <img className='avatar' src={require(`../assets/images/${data.user.image}`)} />
                <strong>
                    <medium className='px-2'>{data.user.username}</medium>
                </strong>
            </div>
            <hr />

            <img className='card-img-top' src={require(`../assets/images/${data.image}`)} alt='Card image cap' />
            <hr/>

            <div className='card-body'>
                <p className='card-text'>{data.content.subString(0, 200)}...</p>
                <button style={{
                    position: 'absolute', right: 10, bottom: 5, border: 0, color: '#b50dfd', backgroundColor: 'transparent'
                }} onClick={() => navigation(`/home/detail/${data.id}`)}>detail</button>
            </div>
            
        </div>
    </>
    
  )
}

export default PostTemplate