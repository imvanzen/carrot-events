import React from 'react'
import Link from '../Link'

const Header = () => (
    <div className="ui pointing menu">
        <Link href='/' className='item'>Events List</Link>
        <Link href='/add-event' className='item'>Add event</Link>
    </div>
)

export default Header;