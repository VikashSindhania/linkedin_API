import React from 'react'
import { createRoot } from 'react-dom/client'
import AIReplyButton from '../../src/components/AIReplyButton'
import AIReplyModal from '../../src/components/AIReplyModal'
import '../../src/index.css'

const injectAIReplyButton = () => {
  const messageInput = document.querySelector('.msg-form__contenteditable')
  if (messageInput && !document.getElementById('ai-reply-button')) {
    const buttonContainer = document.createElement('div')
    buttonContainer.id = 'ai-reply-button'
    messageInput.parentElement?.appendChild(buttonContainer)
    createRoot(buttonContainer).render(<AIReplyButton />)
  }
}

const injectAIReplyModal = () => {
  if (!document.getElementById('ai-reply-modal')) {
    const modalContainer = document.createElement('div')
    modalContainer.id = 'ai-reply-modal'
    document.body.appendChild(modalContainer)
    createRoot(modalContainer).render(<AIReplyModal />)
  }
}

const observeDOM = () => {
  const observer = new MutationObserver(() => {
    injectAIReplyButton()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}

injectAIReplyModal()
observeDOM()