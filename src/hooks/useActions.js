import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const useAppDispatch = () => useDispatch();

export default function useActions(actions) {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
}