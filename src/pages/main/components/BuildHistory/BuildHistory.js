import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import styles from './BuildHistory.module.css';
import Header from '../../../../components/Header/Header';
import Button from '../../../../components/Button/Button';
import ButtonWithIcon from '../../../../components/ButtonWithIcon/ButtonWithIcon';
import Card from './components/Card/Card';
import playIcon from '../../../../assets/play.svg';
import gearIcon from '../../../../assets/gear.svg';
import { initialCardList } from './mocks/mocks';
import useMedia from '../../../../hooks/useMedia';
import PopupNewBuild from './components/PopupNewBuild/PopupNewBuild';
import { asyncRequest } from '../../../../utils/utils';

const defaultCardsCount = 3;
const increment = 3;

export default function BuildHistory() {

  const [cardList, setCardList] = useState(initialCardList)
  const [visibleCardsCount, setVisibleCardsCount] = useState(defaultCardsCount);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isLoadingNewCards, setIsLoadingNewCards] = useState(false);

  const isMobile = useMedia('(max-width: 520px)');

  const history = useHistory();

  const closePopup = () => {
    setIsOpenPopup(false);
  }

  const openPopup = () => {
    setIsOpenPopup(true);
  }

  const handleShowMoreClick = async () => {
    setIsLoadingNewCards(true);
    await asyncRequest(false);
    setIsLoadingNewCards(false);
    setVisibleCardsCount((prevCount) => {
      const newCount = Math.min(cardList.length, prevCount + increment);
      return newCount;
    });
  }

  const handleSettingClick = () => {
    history.push('/settings');
  }

  const lastCommitNumber = useMemo(() => 
    Math.max(...cardList.map(({ commitNumber }) => commitNumber)), [cardList]);

  const handlePopupSubmit = (hash) => {
    const currentTime = Date.now();
    setCardList((prevCardList) => [
      {
        status: 'success',
        commitNumber: lastCommitNumber + 1,
        commitMessage: 'default commit message',
        commitHash: hash,
        userName: 'rus',
        branchName: 'master',
        date: currentTime,
        start: currentTime,
        end: currentTime + 60 * 60 * 1000,
      },
      ...prevCardList
    ])
  }

  const isShowButton = visibleCardsCount !== cardList.length;

  const visibleCards = useMemo(() => {
    return cardList.slice(0, visibleCardsCount);
  }, [visibleCardsCount, cardList])

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Build History</title>
        <meta property="og:title" content="Build History" />
      </Helmet>
      <Header>
        <h1 className={styles.title}>
          philip1967/my-awesome-repo
        </h1>
        <div className={styles.buttonContainer}>
          <ButtonWithIcon text='Run build' icon={playIcon} clickHandler={openPopup} />
          <ButtonWithIcon icon={gearIcon} clickHandler={handleSettingClick} />
        </div>
      </Header>
      <main className={styles.content}>
        <div className={styles.cardList}>
          {
            visibleCards.map((data) => 
                <Card {...data} key={data.commitNumber} />
            )
          }
        </div>
        { isShowButton && <Button 
          isFullWidth={isMobile} 
          color='secondary'
          size={isMobile ? 'large' : 'small'}
          clickHandler={handleShowMoreClick} 
          disabled={isLoadingNewCards}
        >Show more</Button> }
      </main>
      <PopupNewBuild 
        onSubmit={handlePopupSubmit} 
        isOpen={isOpenPopup} 
        closePopup={closePopup} 
      />
    </div>
  );
}