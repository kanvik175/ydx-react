import { createSelector } from '@reduxjs/toolkit';

export const repositorySelector = (state) => state.settings.data.repository;
export const isSettingsAppliedSelector = createSelector(repositorySelector, 
  (repository) => {
    return !!repository;
  })

export const isErrorSelector = (state) => state.settings.isError;
export const isLoadingSelector = (state) => state.settings.isLoading;