import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const AIReplyModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true)
    document.addEventListener('openAIReplyModal', handleOpenModal)
    return () => document.removeEventListener('openAIReplyModal', handleOpenModal)
  }, [])

  const handleClose = () => setIsOpen(false)

  const handleGenerate = () => {
    setResponse('Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.')
  }

  const handleInsert = () => {
    const messageInput = document.querySelector('.msg-form__contenteditable') as HTMLElement
    if (messageInput) {
      messageInput.innerText = response
      messageInput.dispatchEvent(new Event('input', { bubbles: true }))
    }
    handleClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">AI Reply Generator</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mb-4"
        >
          Generate
        </button>
        {response && (
          <>
            <div className="bg-gray-100 p-3 rounded mb-4">{response}</div>
            <div className="flex justify-between">
              <button
                onClick={handleInsert}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
              >
                Insert
              </button>
              <button
                onClick={handleGenerate}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors"
              >
                Regenerate
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AIReplyModal