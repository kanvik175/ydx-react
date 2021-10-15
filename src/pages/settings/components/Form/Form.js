import React, { useState, useContext } from 'react';
import styles from './Form.module.css';
import useInput from '../../../../hooks/useInput';
import { useHistory } from 'react-router-dom';
import Input from '../../../../components/Input/Input';
import Spacer from '../../../../components/Spacer/Spacer';
import Button from '../../../../components/Button/Button';
import { asyncRequest } from '../../../../utils/utils';
import SettingsContext from '../../../../context';

export default function Form() {

  const [
    repositoryValue, 
    changeRepositoryValue, 
    clearRepositoryValue, 
    isRepositoryError, 
    setIsRepositoryError
  ] = useInput();
  const [
    commandValue, 
    changeCommandValue, 
    clearCommandValue, 
    isCommandError, 
    setIsCommandError
  ] = useInput();
  const [branchValue, changeBranchValue, clearBranchValue] = useInput();
  const [syncValue, changeSyncValue] = useInput();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const { setIsSettingsApplied } = useContext(SettingsContext);

  const submitHandler = (e) => {
    e.preventDefault();

    let requiredInputIsEmpty = false;

    if (repositoryValue.length === 0) {
      setIsRepositoryError(true);
      requiredInputIsEmpty = true;
    }

    if (commandValue.length === 0) {
      setIsCommandError(true);
      requiredInputIsEmpty = true;
    }

    if (requiredInputIsEmpty) {
      return;
    }

    setIsLoading(true);

    asyncRequest()
      .then(() => {
        setIsSettingsApplied(true);
        setIsLoading(false);
        history.push('/');
      })
      .catch(() => {
          setIsError(true);
          setIsLoading(false);
      })
  }

  const handleRepositoryChange = (value) => {
    setIsRepositoryError(false);
    changeRepositoryValue(value);
  }

  const handleCommandChange = (value) => {
    setIsCommandError(false);
    changeCommandValue(value);
  }

  const handleCancelClick = () => {
    history.goBack();
  }

  return (
        <form onSubmit={submitHandler}>
          <div className={styles.inputContainer}>
            <Input 
              label='GitHub repository' 
              isRequired 
              placeholder='user-name/repo-name' 
              name='repository'
              value={repositoryValue}
              changeHandler={handleRepositoryChange}
              clearHandler={clearRepositoryValue}
              isError={isRepositoryError}
            />
            <Input 
              label='Build command' 
              isRequired 
              placeholder='npm start' 
              name='command'
              value={commandValue}
              changeHandler={handleCommandChange}
              clearHandler={clearCommandValue}
              isError={isCommandError}
            />
            <Input 
              label='Main branch' 
              placeholder='master' 
              name='branch'
              value={branchValue}
              changeHandler={changeBranchValue}
              clearHandler={clearBranchValue}
            />
          </div>
          <div className={styles.syncContainer}>
            <p className={styles.syncDescription}>Synchronize every</p>
            <Input 
              value={syncValue} 
              name='sync'
              changeHandler={changeSyncValue} 
              textAlign='right' 
              width={52} 
              inputMode='numeric'
              mask={/^\d+$/}
            />
            <p className={styles.syncUnits}>minutes</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button disabled={isLoading} type='submit' color='primary'>
              Save
            </Button>
            <Spacer width={8} height={12} />
            <Button clickHandler={handleCancelClick} disabled={isLoading} color='secondary'>
              Cancel
            </Button>
          </div>
          {isError && <div className={styles.error}>Sorry, our server doesn't response</div>}
        </form>
  )
}