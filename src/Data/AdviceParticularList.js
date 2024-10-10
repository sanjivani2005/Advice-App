import React, { useState } from 'react'
import AdviceData from './adviceData'

export default function AdviceParticularList({ onSelectAdvice }) {
  const [category, setCategory] = useState('');

  const getRandomAdvice = (category) => {
    const advices = AdviceData[category];
    const randomIndex = Math.floor(Math.random() * advices.length);
    return advices[randomIndex];
  }

  const handleGeneratedAdvice = () => {
    if (category) {
      const advice = getRandomAdvice(category);
      onSelectAdvice(advice);
    }
  }

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select category</option> {/* Correct the value */}
        <option value="Health">Health</option>
        <option value="Finance">Finance</option>
        <option value="Education">Education</option>
      </select>
      <button onClick={handleGeneratedAdvice} disabled={!category}> {/* Disable button when no category is selected */}
        Get Advice!
      </button>
    </div>
  )
}
