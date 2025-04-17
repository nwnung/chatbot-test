import ChatInterface from "@/components/chat/chat-interface";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen p-24 flex flex-col items-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click</Button>

      <ChatInterface />
    </main>
  );
}
