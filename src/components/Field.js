import React from 'react'

const Field = ({ id, description, list }) =>
  <div key={id}>
    <h3>{description}</h3>
    <ul>{list.map(task => <li key={task}>{task}</li>)}</ul>
  </div>

export default Field