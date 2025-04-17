"use client"

import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Message, ChatInterfaceProps } from '@/types/types'
import { MessageItem } from '@/components/chat/message-item'
import { MessageInput } from '@/components/chat/message-input'

const DEFAULT_MESSAGES: Message[] = [
  {
    role: "agent",
    content: "Hello, I am a generative AI agent. How may I assist you today?",
    timestamp: new Date().toLocaleTimeString()
  }
]

export default function ChatInterface({
  initialMessages = DEFAULT_MESSAGES,
  agentName = "GenerativeAgent",
  userName = "User",
  onSendMessage,
  isLoading = false,
  className
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const handleSendMessage = async (content: string) => {
    // Create user message
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: new Date().toLocaleTimeString()
    }
    
    // Update messages with user message
    setMessages(prev => [...prev, userMessage])
    
    // If there's an external handler, call it
    if (onSendMessage) {
      await onSendMessage(content)
    } else {
      // Default behavior for demo/testing - echo message back
      setTimeout(() => {
        const agentMessage: Message = {
          id: crypto.randomUUID(),
          role: "agent",
          content: `You said: ${content}`,
          timestamp: new Date().toLocaleTimeString()
        }
        setMessages(prev => [...prev, agentMessage])
      }, 1000)
    }
  }

  return (
    <div className={cn("flex-1 flex flex-col", className)}>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageItem 
              key={message.id || message.timestamp} 
              message={message} 
              agentName={agentName}
              userName={userName}
            />
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <MessageInput 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading}
          placeholder="Type a message..."
        />
      </div>
    </div>
  )
}
