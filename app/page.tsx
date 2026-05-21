"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const text = await res.text();

console.log(text);

try {
  const data = JSON.parse(text);
  setReply(data.reply || data.error);
} catch {
  setReply("API response error");
}
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-10">
      <h1 className="text-4xl font-bold">My OpenAI Chat</h1>

      <input
        className="border p-3 rounded w-full max-w-xl"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
      />

      <button
        onClick={sendMessage}
        className="bg-black text-white px-6 py-3 rounded"
      >
        {loading ? "Loading..." : "Send"}
      </button>

      <div className="border rounded p-5 w-full max-w-xl min-h-[120px]">
        {reply}
      </div>
    </main>
  );
}