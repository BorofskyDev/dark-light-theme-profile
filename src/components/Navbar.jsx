import { useState } from 'react'
import { Sidebar, Header } from './util'

function Navbar() {
  const [menu, setMenu] = useState(false)

   

  return (
    <div>
      <Header  menu={menu} setMenu={setMenu} />
      <Sidebar menu={menu} setMenu={setMenu} />
    </div>
  )
}

export default Navbar
