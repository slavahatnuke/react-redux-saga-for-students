import React, { useState, useEffect } from 'react'

import fecha from 'fecha';

import style from './HooksPage.module.scss';

export default function HooksPage() {
  const [now, setNow] = useState(new Date());

  useEffect(function () {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1e3);

    return function () {
      clearInterval(interval)
    }
  }, [setNow]);

  const date = fecha.format(now, 'dddd MMMM Do, YYYY');
  const time = fecha.format(now, 'HH:mm:ss');

  return (<div>

    <div className="row">
      <div className={`card ${style.card}`}>
        <div className="card-body">
          <h5 className="card-title">{date}</h5>
          <h6 className="card-text">{time}</h6>
        </div>
      </div>
    </div>
  </div>)
}