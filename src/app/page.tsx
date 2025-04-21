"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUp, Plus } from "lucide-react"
import { ModeToggle } from "@/components/theme-toggle"
import { useChat } from "@ai-sdk/react"

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  console.log(messages)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="flex justify-between items-center p-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Plus className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
        <ModeToggle />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 gap-6">
        <h1 className="text-3xl md:text-4xl font-medium text-center">DearAi - Traductor de sentimientos</h1>

        {messages.map(message => (
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}


        <form className="w-full max-w-xl relative" onSubmit={handleSubmit}>
          <Input
            placeholder="Ask a question..."
            value={input}
            onChange={handleInputChange}
            className="hover:shadow-sm bg-background border-none h-14 pl-12 pr-12 rounded-xl text-foreground"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full  h-8 w-8" type="submit">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </form>

        {/* Other Features ---- */}
        <div className="flex gap-3 mt-4">
          <div className="flex items-center gap-2 bg-background border px-4 py-2 rounded-full">
            <span className="text-sm">Como expresar lo que siento?</span>
          </div>
          <div className="flex items-center gap-2 bg-background border px-4 py-2 rounded-full">
            <span className="text-sm">Pensamiento profundo</span>
          </div>
        </div>
      </main>
    </div>
  )
}
