import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <header>
      <h1>Employee Management</h1>
      <div>
        <button 
        className='round-button'
        onClick={() => setIsAdding(true)}
        style={{marginTop: '30px', marginBottom: '18px' }}
        >Add Button</button>
      </div>
    </header>
  )
}

export default Header
