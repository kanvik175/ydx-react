import React from 'react';
import styles from './Card.module.css';
import successIcon from './assets/success.svg';
import pendingIcon from './assets/pending.svg';
import failIcon from './assets/fail.svg';
import commitIcon from './assets/commit.svg';
import userIcon from './assets/user.svg';
import calendarIcon from './assets/calendar.svg';
import timeIcon from './assets/time.svg';
import { formatDate, formatDuration } from '../../../../../../utils/utils';

const statusToIcon = {
  success: successIcon,
  pending: pendingIcon,
  fail: failIcon,
}

export default function Card({
  status,
  commitNumber,
  commitMessage,
  commitHash,
  userName,
  date,
  start,
  end,
  branchName,
}) {

  const statusIcon = statusToIcon[status];

  const commitNumberClass = `${styles.commitNumber} ${styles[`commitNumber__status_${status}`]}`;

  const dateFormatted = formatDate(date);
  const durationFormatted = formatDuration(start, end);

  return (
    <section className={styles.wrapper}>
      <div className={styles.statusContainer}>
        <img src={statusIcon} className={styles.statusIcon} alt='' />
      </div>
      <div className={styles.content}>
        <div className={styles.infoContainer}>
          <div className={styles.title}>
            <p className={commitNumberClass}>{`#${commitNumber}`}</p>
            <h3 className={styles.commitMessage}>{commitMessage}</h3>
          </div>
          <div className={styles.credentials}>
            <div className={styles.commitInfo}>
              <img src={commitIcon} className={styles.commitIcon} alt='' />
              <p className={styles.branchName}>{branchName}</p>
              <p className={styles.commitHash}>{commitHash}</p>
            </div>
            <div className={styles.user}>
              <img src={userIcon} className={styles.userIcon} alt='' />
              <p className={styles.userName}>{userName}</p>
            </div>
          </div>
        </div>
        <div className={styles.timeContainer}>
          <div className={styles.dateContainer}>
            <img src={calendarIcon} className={styles.calendarIcon} alt='' />
            <p className={styles.time}>{dateFormatted}</p>
          </div>
          <div className={styles.durationContainer}>
            <img src={timeIcon} className={styles.timeIcon} alt='' />
            <p className={styles.time}>{durationFormatted}</p>
          </div>
        </div>
      </div>
    </section>
  )
}