import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import Footer from '../Footer/Footer';
import styles from './Page.module.css';

const links = [
  {
    name: 'Support',
    link: '/support'
  },
  {
    name: 'Learning',
    link: '/learning'
  },
  {
    name: 'Русская версия',
    link: '/russian-version'
  }
]


export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Helmet>
          <meta property="og:title" content="Settings" />
          <meta property="og:description" content="Learn how to use CI, the built-in Continuous Integration, Continuous Deployment, and Continuous Delivery toolset to build, test, and deploy" />
          <meta property="og:image" content="https://i1.wp.com/codeblog.dotsandbrackets.com/wp-content/uploads/2017/08/gitlab-ci-logo.jpg" />
          <meta property="og:url" content="https://ci-server.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>CLI</title>
        </Helmet>
        <Switch>
          { routes.map((route, index) => <Route key={index} {...route} />) }
        </Switch>
      </div>
      <Footer links={links} copyright='2020 Your Name' />
    </div>
  )
}