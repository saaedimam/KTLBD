
import { useEffect } from 'react';

export const RippleEffect = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest('.fx-rippleBlue');
      if (!el) return;

      const r = document.createElement('span');
      r.className = 'r';
      const rect = el.getBoundingClientRect();
      r.style.left = (e.clientX - rect.left) + 'px';
      r.style.top = (e.clientY - rect.top) + 'px';
      el.appendChild(r);
      setTimeout(() => r.remove(), 500);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};
