import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer({ links, copyright }) {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.innerContainer}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            { links.map(({ name, link }, index) => (
              <li key={index} className={styles.listItem}>
                <Link className={styles.link} to={link}>
                  {name}
                </Link>
              </li>
              ))
            }
          </ul>
        </nav>
        <p className={styles.copyright}>
          &copy; { copyright }
        </p>
      </div>
    </footer>
  )
}