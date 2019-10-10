import React from 'react'

export default function News({ news = [] }) {
  return (<ul>
    {news.map((post) => {
      return <li key={post.id}>{post.xxxx}</li>
    })}
  </ul>)
}