// You should call this file only "layout.tsx" and place it in the "app/dashboard" directory. This will make it the layout for all pages in the "dashboard" directory.

import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Dashboard Navbar</p>
      {children}
      <p>Dashboard Footer</p>
    </div>
  )
}

export default layout
