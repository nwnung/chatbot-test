import { useState } from 'react'
import { Message } from '@/types/types'

interface UseChatStateOptions {
  initialMessages?: Message[]
  onResponse?: (message: Message) => void
}

export function useChatState({ initialMessages = [], onResponse }: UseChatStateOptions = {}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [isLoading, setIsLoading] = useState(false)

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message])
    return message
  }

  const addUserMessage = (content: string) => {
    return addMessage({
      id: crypto.randomUUID(),
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString()
    })
  }

  const addAgentMessage = (content: string) => {
    const message = addMessage({
      id: crypto.randomUUID(),
      role: 'agent',
      content,
      timestamp: new Date().toLocaleTimeString()
    })
    
    if (onResponse) {
      onResponse(message)
    }
    
    return message
  }

  return {
    messages,
    setMessages,
    isLoading,
    setIsLoading,
    addMessage,
    addUserMessage,
    addAgentMessage
  }
}