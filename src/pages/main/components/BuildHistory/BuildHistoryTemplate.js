import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import styles from './BuildHistory.module.css';
import Button from '../../../../components/Button/Button';
import ButtonWithIcon from '../../../../components/ButtonWithIcon/ButtonWithIcon';
import Card from './components/Card/Card';
import playIcon from '../../../../assets/play.svg';
import gearIcon from '../../../../assets/gear.svg';
import useMedia from '../../../../hooks/useMedia';
import PopupNewBuild from './components/PopupNewBuild/PopupNewBuild';

export default function BuildHistory({ 
  commitList, 
  showMoreCommits, 
  isNoMoreCommits, 
  addNewCommit,
  commitListIsLoading,
  setPopupIsOpen,
}) {

  const isMobile = useMedia('(max-width: 520px)');

  const history = useHistory();

  const openPopup = () => {
    setPopupIsOpen(true);
  }

  const handleShowMoreClick = () => {
    showMoreCommits();
  }

  const handleSettingClick = () => {
    history.push('/settings');
  }

  const isShowButton = !isNoMoreCommits;

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Build History</title>
        <meta property="og:title" content="Build History" />
      </Helmet>
      <header className={styles.header}>
        <h1 className={styles.title}>
          philip1967/my-awesome-repo
        </h1>
        <div className={styles.buttonContainer}>
          <ButtonWithIcon text='Run build' icon={playIcon} clickHandler={openPopup} />
          <ButtonWithIcon icon={gearIcon} clickHandler={handleSettingClick} />
        </div>
      </header>
      <main className={styles.content}>
        <div className={styles.cardList}>
          {
            commitList.map((data) => 
                <Card {...data} key={data.commitNumber} />
            )
          }
        </div>
        { isShowButton && <Button 
          isFullWidth={isMobile} 
          color='secondary'
          size={isMobile ? 'large' : 'small'}
          clickHandler={handleShowMoreClick} 
          disabled={commitListIsLoading}
        >Show more</Button> }
      </main>
      <PopupNewBuild />
    </div>
  );
}