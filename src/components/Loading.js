import React from 'react'

export default function Loading({ loading = false }) {
  return loading ? 'loading' : null
}