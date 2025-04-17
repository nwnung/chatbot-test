import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface MessageInputProps {
  onSendMessage: (message: string) => void
  isLoading?: boolean
  placeholder?: string
}

export function MessageInput({ 
  onSendMessage, 
  isLoading = false, 
  placeholder = "Type a message..." 
}: MessageInputProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!input.trim() || isLoading) return
    
    onSendMessage(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Textarea
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[44px] max-h-32"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className="px-8" 
        disabled={!input.trim() || isLoading}
      >
        Send
      </Button>
    </form>
  )
}
