import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    let name="Aafifa Afaq"
    let profession="Pharmacist"
    let age=24
    let favColor="Purple"
    let favDish="Biryani"
  return (
    <div>
        <ChildComponent 
        name={name} 
        profession={profession}
        age={age}
        favColor={favColor}
        favDish={favDish}
        />
    </div>
  )
}

export default ParentComponent;