import React from 'react'

const adviceArray = [
  "Be yourself; everyone else is already taken.",
  "The way to get started is to quit talking and begin doing.",
  "Believe you can and you're halfway there.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
]

export default function AdviceRandomList({ onSelectAdvice }) {

  const getRandomAdvice = () => {
    const randomIndex = Math.floor(Math.random() * adviceArray.length); // Use Math.random, not Map.random
    return adviceArray[randomIndex];
  }

  const handleClick = () => {
    const advice = getRandomAdvice();
    onSelectAdvice(advice);
  }

  return (
    <div>
      <button onClick={handleClick}>Get Advice!</button>
    </div>
  )
}
