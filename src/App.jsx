import React from 'react'
import RoutePath from './RoutePath'
import { DataProvider } from './DataContext'

const App = () => {
  return (
    <>
 
 <DataProvider>
      <RoutePath/>
 </DataProvider>
    
    </>
  )
}

export default App