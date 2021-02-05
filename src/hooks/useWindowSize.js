import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
      console.log(`Resize  w ${window.innerWidth} - h ${window.innerHeight}`)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

export default useWindowSize