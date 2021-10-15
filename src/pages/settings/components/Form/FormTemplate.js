import React from 'react';
import styles from './Form.module.css';
import useInput from '../../../../hooks/useInput';
import { useHistory } from 'react-router-dom';
import Input from '../../../../components/Input/Input';
import Spacer from '../../../../components/Spacer/Spacer';
import Button from '../../../../components/Button/Button';

export default function Form({ setSettings, isError, isLoading }) {

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

  const history = useHistory();

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

    setSettings({
      repository: repositoryValue,
      command: commandValue,
      branch: branchValue,
      syncPeriod: syncValue,
    })
    .unwrap()
    .then(() => history.push('/'))
    .catch(() => {});
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
              changeHandler={changeSyncValue} 
              textAlign='right' 
              width={52} 
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