import { useState } from 'react';
import { Send, Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá! Sou seu assistente IA. Como posso ajudar?', sender: 'bot' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    
    const userMsg = { id: Date.now(), text: message, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);
    setMessage('');

    setTimeout(() => {
      const botMsg = { 
        id: Date.now() + 1, 
        text: 'Estou processando sua solicitação com IA avançada...', 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-12 h-12 text-purple-400" />
              Dashboard IA
              <Sparkles className="w-12 h-12 text-purple-400" />
            </h1>
            <p className="text-gray-300 text-lg">Assistente Inteligente com React + Tailwind</p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
                <Bot className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Chat IA</h2>
              </div>

              <div className="h-96 overflow-y-auto mb-6 space-y-4 pr-2">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      {msg.sender === 'bot' && (
                        <Bot className="w-5 h-5 inline mr-2" />
                      )}
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white/20 text-white px-4 py-3 rounded-2xl">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                />
                <button
                  onClick={handleSend}
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white p-3 rounded-xl transition flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
