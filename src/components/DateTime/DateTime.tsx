import { useEffect, useState } from 'react'

const DateTime = () => {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))

      const formatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      })
      
      const parts = formatter.formatToParts(istTime)
      const formatted = parts
        .map(part => part.value)
        .join('')
        .replace(/,/g, '')
        .trim()
      
      setTime(formatted)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>{time}</div>
  )
}

export default DateTime