import React, { useContext } from 'react';
import SettingsContext from '../../context';
import BuildHistory from './components/BuildHistory/BuildHistory';
import Start from './components/Start/Start';

export default function Main() {

  const { isSettingsApplied } = useContext(SettingsContext);

  return isSettingsApplied ? <BuildHistory /> : <Start />;
}