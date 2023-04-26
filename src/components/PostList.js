import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Post from './Post';
import './PostList.css';
// import { getPosts } from '../api';

// 임시 데이터
const posts = [
  {
    id: 1,
    title: '첫 번째 포스트',
    body: '첫 번째 포스트 내용입니다.',
    imageUrl: 'https://picsum.photos/id/1018/400/200',
  },
  {
    id: 2,
    title: '두 번째 포스트',
    body: '두 번째 포스트 내용입니다.',
    imageUrl: 'https://picsum.photos/id/1015/400/200',
  },
  {
    id: 3,
    title: '세 번째 포스트',
    body: '세 번째 포스트 내용입니다.',
    imageUrl: 'https://picsum.photos/id/1019/400/200',
  },
];

function PostList() {
  const navigate = useNavigate();

  // const posts = getPosts();

  return (
    <div>
      <div className="PostList-header">
        <h2>Posts</h2>
        <button onClick={() => navigate('/login')}>로그인</button>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="PostList">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          }
        />
        <Route path="/:id" element={<div>Post Detail</div>} />
      </Routes>
    </div>
  );
}

export default function PostListWithRouter() {
  return <PostList />;
}