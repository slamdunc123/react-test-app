import React from 'react'
import loadable from '@loadable/component'

const OtherComponent = loadable(() => import('../../components/OtherComponent/OtherComponent'))

const MyComponent = () => {
  return (
    <>
      <div>MyComponent</div>
      <OtherComponent />
    </>

  )
}

export default MyComponent
