import Link from 'next/link'
import React from 'react'

const SideBar = ({children}: any) => {
  return (
    <div>
      <p>Ini sidebar dashboard</p>
      <Link href="">Testing</Link>
      {children}
    </div>
  )
}

export default SideBar