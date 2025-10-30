import { useState } from 'react';
import { Bot, Send, Sparkles, Zap, Brain } from 'lucide-react';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Sou seu assistente IA. Como posso ajudar?' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Estou processando sua solicitação com IA avançada...' 
      }]);
    }, 1000);
    setInput('');
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-10 h-10 text-purple-400" />
              <h1 className="text-4xl font-bold text-white">Dashboard IA</h1>
            </div>
            <p className="text-purple-300">Assistente com Grok-like Intelligence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Respostas Hoje</p>
                  <p className="text-3xl font-bold text-white">247</p>
                </div>
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Precisão IA</p>
                  <p className="text-3xl font-bold text-white">98.7%</p>
                </div>
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Usuários Ativos</p>
                  <p className="text-3xl font-bold text-white">1.2k</p>
                </div>
                <Bot className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-purple-500/20 p-6">
              <div className="h-96 overflow-y-auto mb-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white/20 text-purple-100'
                    }`}>
                      {msg.role === 'assistant' && <Bot className="w-5 h-5 inline mr-2" />}
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-white/20 backdrop-blur-lg border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl px-6 py-3 font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
