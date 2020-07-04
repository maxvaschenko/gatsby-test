import React from 'react'
import ContentLoader from 'react-content-loader'

const StubComponent = props => {
  const { width = 120, height = 120 } = props
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox="0 0 120 120"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="59" cy="59" r="59" />
    </ContentLoader>
  )
}

export default StubComponent
