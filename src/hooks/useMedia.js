import { useEffect, useState, useCallback } from 'react';
import { debounce } from '../utils/utils';

export default function useMedia(media) {
  const [match, setMatch] = useState(false);

  const checkMedia = useCallback(() => {
    setMatch(window.matchMedia(media).matches);
  }, [media]);

  useEffect(() => {
    checkMedia();

    const debouncedCheckMedia = debounce(checkMedia, 100);

    window.addEventListener('resize', debouncedCheckMedia);  

    return () => {
      window.removeEventListener('resize', debouncedCheckMedia);
    }

  }, [checkMedia]);

  return match;
}