import React from 'react';
import '../Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Links Úteis</h3>
      <ul>
        <li>
          <a href="https://www.example.com">Exemplo 1</a>
        </li>
        <li>
          <a href="https://www.example.com">Exemplo 2</a>
        </li>
        <li>
          <a href="https://www.example.com">Exemplo 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
