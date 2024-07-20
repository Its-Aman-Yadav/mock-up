import React from 'react'
import Header from './_component/Header';

function dashboardLayout({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default dashboardLayout;
