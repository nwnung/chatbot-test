import { Copy, Download, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Message } from '@/types/types'

interface MessageItemProps {
  message: Message
  agentName?: string
  userName?: string
}

export function MessageItem({ message, agentName = "GenerativeAgent", userName = "User" }: MessageItemProps) {
  return (
    <div
      className={cn(
        "flex gap-2 max-w-[80%]",
        message.role === "user" && "ml-auto"
      )}
    >
      {message.role === "agent" && (
        <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0" />
      )}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {message.role === "agent" ? agentName : userName}
          </span>
          <span className="text-sm text-muted-foreground">
            {message.timestamp}
          </span>
        </div>
        <div className="p-3 bg-muted/50 rounded-lg">
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        </div>
        {message.role === "agent" && (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Copy message">
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Download">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Thumbs up">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Thumbs down">
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}