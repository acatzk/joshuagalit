import React from 'react'

export default function useProgressiveImg (lowQualitySrc, highQualitySrc) {
  const [src, setSrc] = React.useState(lowQualitySrc)
  
  React.useEffect(() => {
    setSrc(lowQualitySrc)
    const img = new Image()
    img.src = highQualitySrc
    img.onload = () => {
      setSrc(highQualitySrc)
    }
    
  }, [lowQualitySrc, highQualitySrc])

  return [src, { blur: src === lowQualitySrc }]
}