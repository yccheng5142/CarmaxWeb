import { useEffect, useState } from 'react';

function watchWindowSize() {
  const [WindowSize, setWindowSize] = useState('computer');

  useEffect(() => {
    const updateWindowSize = () => {
        const windowWidth = window.innerWidth;
        const isComputer = windowWidth > 600 ? 'computer' : 'mobile';
        console.log('windowWidth:',windowWidth)
        setWindowSize(isComputer);
    };
        window.addEventListener('resize', updateWindowSize);
    return () => {
        window.removeEventListener('resize', updateWindowSize);
    };
  }, []);
  return WindowSize;
}
export default watchWindowSize;
