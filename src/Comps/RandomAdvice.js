import React, { useState } from 'react'  // Import useState
import AdviceRandomList from '../Data/AdviceRandomList'

export default function RandomAdvice() {
  const [advice, setAdvice] = useState('')  // Initialize useState properly

  return (
    <div>
      <AdviceRandomList onSelectAdvice={setAdvice} />
      <p>{advice}</p>  {/* Display advice */}
    </div>
  )
}

