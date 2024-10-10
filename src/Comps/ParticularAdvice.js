import React, { useState } from 'react'
import AdviceParticularList from '../Data/AdviceParticularList'

export default function ParticularAdvice() {
  const [advice, setAdvice] = useState('')

  return (
    <div>
      <div>
        <AdviceParticularList onSelectAdvice={setAdvice} />
        <p> {advice}</p>  {/* Dynamically displaying the advice */}
      </div>
    </div>
  )
}
