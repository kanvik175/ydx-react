import React from 'react';

const links = [
  {
    name: 'Support',
    link: '#'
  },
  {
    name: 'Learning',
    link: '#'
  },
  {
    name: 'Русская версия',
    link: '#'
  }
]

export default function Footer() {
  return (
    <div class='footer'>
      <ul class='footer__nav'>
        { links.map(({ name, link }) => (
          <li class='footer__list-item'>
            <a class='footer__link' href={link}>
              {name}
            </a>
          </li>
          ))
        }
      </ul>
      <p>
        &copy; 2020 Your Name
      </p>
    </div>
  )
}