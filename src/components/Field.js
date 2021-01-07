import React from 'react'

const Field = ({ id, description, tasks }) =>
  <div key={id}>
    <h3>{description}</h3>
    <ul>{tasks.map(task => <li key={task}>{task}</li>)}</ul>
  </div>

export default Field