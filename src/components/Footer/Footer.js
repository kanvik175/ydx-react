import React from 'react';
import styles from './Footer.module.css';

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
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          { links.map(({ name, link }) => (
            <li className={styles.listItem}>
              <a className={styles.link} href={link}>
                {name}
              </a>
            </li>
            ))
          }
        </ul>
      </nav>
      <p className={styles.copyright}>
        &copy; 2020 Your Name
      </p>
    </div>
  )
}