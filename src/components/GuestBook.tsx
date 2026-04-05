import { useState, useEffect } from 'react';
import { MessageCircle, Heart, Star, Send, Trash2 } from 'lucide-react';

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
  likes: number;
  isLiked: boolean;
}

const GuestBook: React.FC = () => {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('guestBookMessages');
    if (savedMessages) {
      const parsed = JSON.parse(savedMessages);
      setMessages(parsed.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
        isLiked: false
      })));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('guestBookMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.name.trim() || !newMessage.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const message: GuestMessage = {
      id: Date.now().toString(),
      name: newMessage.name.trim(),
      message: newMessage.message.trim(),
      timestamp: new Date(),
      likes: 0,
      isLiked: false
    };

    setMessages([message, ...messages]);
    setNewMessage({ name: '', message: '' });
    setIsSubmitting(false);
  };

  const handleLike = (id: string) => {
    setMessages(messages.map(msg => {
      if (msg.id === id) {
        return {
          ...msg,
          likes: msg.isLiked ? msg.likes - 1 : msg.likes + 1,
          isLiked: !msg.isLiked
        };
      }
      return msg;
    }));
  };

  const handleDelete = (id: string) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      if (hours === 0) {
        const minutes = Math.floor(diff / (1000 * 60));
        return minutes === 0 ? 'Just now' : `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      }
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return `${days} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-purple-600 text-4xl">💌</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Guest Book
            </h2>
            <span className="text-pink-600 text-4xl">💌</span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Leave a message and share your memories with us
          </p>
        </div>

        {/* Message Form */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Share Your Thoughts
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={newMessage.name}
                onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                maxLength={50}
              />
            </div>
            <div>
              <textarea
                placeholder="Share your favorite memory or leave a message..."
                value={newMessage.message}
                onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={4}
                maxLength={500}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {newMessage.message.length}/500 characters
              </span>
              <button
                type="submit"
                disabled={!newMessage.name.trim() || !newMessage.message.trim() || isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                ) : (
                  <Send size={20} />
                )}
                {isSubmitting ? 'Posting...' : 'Share Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Messages Display */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Messages ({messages.length})
          </h3>
          
          {messages.length === 0 ? (
            <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 rounded-2xl">
              <MessageCircle className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No messages yet. Be the first to share your thoughts!
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {message.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(message.timestamp)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(message.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {message.message}
                </p>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(message.id)}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${
                      message.isLiked
                        ? 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-pink-50 dark:hover:bg-pink-900/50'
                    }`}
                  >
                    <Heart
                      size={16}
                      className={message.isLiked ? 'fill-current' : ''}
                    />
                    <span className="text-sm font-medium">{message.likes}</span>
                  </button>
                  
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestBook;
