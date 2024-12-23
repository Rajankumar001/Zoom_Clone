import React from 'react'

const RootLayout = ({children}) => {
  return (
    <main>
        Navbar
      {children}
      Footer
    </main>
  )
}

export default RootLayout;
