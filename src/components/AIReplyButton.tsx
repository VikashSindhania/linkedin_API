import React, { useState, useEffect } from 'react'
import { MessageSquare } from 'lucide-react'

const AIReplyButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleFocus = () => setIsVisible(true)
    const handleBlur = () => setIsVisible(false)

    const messageInput = document.querySelector('.msg-form__contenteditable')
    messageInput?.addEventListener('focus', handleFocus)
    messageInput?.addEventListener('blur', handleBlur)

    return () => {
      messageInput?.removeEventListener('focus', handleFocus)
      messageInput?.removeEventListener('blur', handleBlur)
    }
  }, [])

  const handleClick = () => {
    const event = new CustomEvent('openAIReplyModal')
    document.dispatchEvent(event)
  }

  if (!isVisible) return null

  return (
    <button
      className="absolute right-2 bottom-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
      onClick={handleClick}
    >
      <MessageSquare size={20} />
    </button>
  )
}

export default AIReplyButton