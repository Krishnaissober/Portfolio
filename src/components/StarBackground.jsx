import React, { useEffect, useState } from 'react'

const createStars = () => {
  const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000)
  const newStars = []

  for (let i = 0; i < numberOfStars; i++) {
    newStars.push({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    })
  }

  return newStars
}

const createMeteors = () => {
  const numberOfMeteors = 4
  const newMeteors = []

  for (let i = 0; i < numberOfMeteors; i++) {
    newMeteors.push({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 10,
      delay: Math.random() * 50,
      animationDuration: Math.random() * 5 + 2,
    })
  }

  return newMeteors
}

const StarBackground = () => {
  const [star, setStar] = useState(() => createStars())
  const [meteors, setMeteors] = useState(() => createMeteors())

  useEffect(() => {
    const handleResize = () => {
      setStar(createStars())
      setMeteors(createMeteors())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {star.map((starItem) => (
        <div
          key={starItem.id}
          className='star animate-pulse-subtle'
          style={{
            width: `${starItem.size}px`,
            height: `${starItem.size}px`,
            left: `${starItem.x}%`,
            top: `${starItem.y}%`,
            opacity: starItem.opacity,
            animationDuration: `${starItem.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className='meteor animate-meteor'
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default StarBackground
