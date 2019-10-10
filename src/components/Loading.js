import React from 'react'
import { Badge } from 'reactstrap';

export default function Loading({ loading = false }) {
  return loading ? <Badge color="primary">Loading...</Badge> : null
}