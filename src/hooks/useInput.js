import { useState, useCallback } from 'react';

export default function useInput() {
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  const clearValue = useCallback(() => {
    setInputValue('');
  }, []);

  return [inputValue, setInputValue, clearValue, isError, setIsError];
}