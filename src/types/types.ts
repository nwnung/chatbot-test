export interface Message {
    id?: string
    role: "agent" | "user"
    content: string
    timestamp: string
  }
  
  export interface ChatInterfaceProps {
    initialMessages?: Message[]
    agentName?: string
    userName?: string
    onSendMessage?: (message: string) => Promise<void> | void
    isLoading?: boolean
    className?: string
  }