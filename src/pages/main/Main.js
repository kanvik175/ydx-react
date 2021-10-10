import React from 'react';
import BuildHistory from './components/BuildHistory/BuildHistory';
import Start from './components/Start/Start';
import { useSelector } from 'react-redux';
import { isSettingsAppliedSelector } from '../../store/settings/settingsSelectors';

export default function Main() {

  const isSettingsApplied = useSelector(isSettingsAppliedSelector);

  return isSettingsApplied ? <BuildHistory /> : <Start />;
}