import { useState, useCallback } from 'react';

export default function useInput( defaultValue = '' ) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isError, setIsError] = useState(false);

  const clearValue = useCallback(() => {
    setInputValue('');
  }, []);

  return [inputValue, setInputValue, clearValue, isError, setIsError];
}