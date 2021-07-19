import React from 'react'
import NextNprogress from 'nextjs-progressbar'

const NextProgress: React.FC<{}> = () => {
  return (
    <NextNprogress
      color="#27c4f5
        linear-gradient(
          to right,
          #27c4f5,
          #a307ba,
          #fd8d32,
          #70c050,
          #27c4f5
        );"
      startPosition={0.3}
      stopDelayMs={200}
      height={4}
      showOnShallow={true}
      options={{ easing: 'ease', speed: 500 }}
    />
  )
}

export default NextProgress
