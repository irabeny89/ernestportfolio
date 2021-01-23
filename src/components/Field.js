import React from 'react'

const Field = ({ id, title, tasks }) =>
  <div key={id}>
    <h3>{title}</h3>
    <ul>{tasks.map(task => <li key={task}>{task}</li>)}</ul>
  </div>

export default Field