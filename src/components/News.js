import React from 'react'

export default function News({ articles = [] }) {
  return (<ul>
    {articles.map((article) => (
      <li key={article.url}>{article.title}</li>
    ))}
  </ul>)
}