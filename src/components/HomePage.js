import React, { Fragment } from 'react'

export default function HomePage(
  {
    Button = () => null,
    Loading = () => null,
    News = () => null
  }) {

  return <Fragment>
    <Button />
    <br />
    <Loading />
    <br />
    <News />
  </Fragment>
}