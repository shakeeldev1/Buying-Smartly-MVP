import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useProviderState } from '../../context/ProviderState';
import {
  Send, Paperclip, Search, CheckCheck, MoreVertical,
  X, FileText, Image as ImageIcon, MessageSquare
} from 'lucide-react';

const Messages: React.FC = () => {
  const location = useLocation();
  const { conversations, sendMessage } = useProviderState();
  const [activeChatId, setActiveChatId] = useState('chat-1');
  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [attachment, setAttachment] = useState<{ name: string; type: 'image' | 'file' } | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const state = location.state as { selectChatId?: string };
    if (state?.selectChatId) setActiveChatId(state.selectChatId);
  }, [location]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChatId, conversations]);

  const active = conversations.find(c => c.id === activeChatId) || conversations[0];
  const filtered = conversations.filter(c =>
    c.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() && !attachment) return;
    sendMessage(activeChatId, inputText, attachment?.name);
    setInputText('');
    setAttachment(null);
  };

  const simulateAttach = (type: 'image' | 'file') =>
    setAttachment({ type, name: type === 'image' ? 'receipt_manifest.png' : 'commercial_invoice.pdf' });

  return (
    <div className="flex h-[calc(100vh-144px)] bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] animate-in fade-in duration-300">

      {/* ── Sidebar: Conversation List ── */}
      <div className="w-72 shrink-0 border-r border-[#F3F4F6] flex flex-col bg-white">
        {/* Search */}
        <div className="p-3 border-b border-[#F3F4F6]">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full h-9 rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] pl-8 pr-3 text-[12px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#111827] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto no-scrollbar divide-y divide-[#F9FAFB]">
          {filtered.map(chat => {
            const isActive = chat.id === activeChatId;
            return (
              <button
                key={chat.id}
                onClick={() => { setActiveChatId(chat.id); chat.unread = false; }}
                className={`w-full p-4 text-left flex gap-3 transition-colors ${
                  isActive ? 'bg-[#F9FAFB]' : 'hover:bg-[#FAFAFA]'
                }`}
              >
                {chat.customerAvatar
                  ? <img src={chat.customerAvatar} alt={chat.customerName} className="h-9 w-9 rounded-full object-cover border border-[#E5E7EB] shrink-0" />
                  : <div className="h-9 w-9 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#374151] shrink-0">{chat.customerName.charAt(0)}</div>
                }
                <div className="flex-1 min-w-0 relative">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`text-[12px] font-bold truncate ${isActive ? 'text-indigo-600' : 'text-[#111827]'}`}>
                      {chat.customerName}
                    </span>
                    <span className="text-[9px] text-[#9CA3AF] font-medium shrink-0 ml-1">{chat.lastMessageTime}</span>
                  </div>
                  <p className={`text-[11px] truncate ${chat.unread && !isActive ? 'text-[#111827] font-semibold' : 'text-[#9CA3AF]'}`}>
                    {chat.lastMessage}
                  </p>
                  {chat.unread && !isActive && (
                    <span className="absolute right-0 top-3.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Chat Panel ── */}
      {active ? (
        <div className="flex-1 flex flex-col min-w-0">
          {/* Chat Header */}
          <div className="h-14 border-b border-[#F3F4F6] px-5 flex items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-2.5">
              {active.customerAvatar
                ? <img src={active.customerAvatar} alt={active.customerName} className="h-8 w-8 rounded-full object-cover border border-[#E5E7EB]" />
                : <div className="h-8 w-8 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#374151]">{active.customerName.charAt(0)}</div>
              }
              <div>
                <p className="text-[13px] font-bold text-[#111827] leading-none">{active.customerName}</p>
                <p className="text-[10px] text-[#9CA3AF] mt-0.5">{active.customerRole}</p>
              </div>
            </div>
            <button className="p-2 rounded-lg text-[#9CA3AF] hover:text-[#374151] hover:bg-[#F9FAFB] transition-all">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-3 bg-white">
            {active.messages.map(msg => {
              const mine = msg.sender === 'provider';
              return (
                <div key={msg.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[64%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed space-y-1.5 ${
                    mine
                      ? 'bg-[#111827] text-white rounded-br-sm font-medium'
                      : 'bg-[#F9FAFB] border border-[#F3F4F6] text-[#374151] rounded-bl-sm'
                  }`}>
                    {msg.text && <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>}

                    {msg.attachment && (
                      <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border ${
                        mine ? 'bg-white/10 border-white/10 text-white' : 'bg-white border-[#E5E7EB] text-[#374151]'
                      }`}>
                        <FileText className="h-3.5 w-3.5 shrink-0" />
                        <span className="text-[10px] font-semibold truncate">{msg.attachment}</span>
                      </div>
                    )}

                    <div className={`flex items-center gap-1 text-[9px] opacity-60 ${mine ? 'justify-end' : 'justify-start'}`}>
                      <span>{msg.time}</span>
                      {mine && <CheckCheck className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3.5 border-t border-[#F3F4F6] bg-white shrink-0">
            {/* Attachment preview */}
            {attachment && (
              <div className="mb-2.5 p-2 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] flex items-center gap-2 max-w-xs relative animate-in slide-in-from-bottom-2 duration-150">
                <FileText className="h-3.5 w-3.5 text-[#374151] shrink-0" />
                <span className="text-[11px] font-semibold text-[#374151] truncate pr-6">{attachment.name}</span>
                <button onClick={() => setAttachment(null)} className="absolute right-2 text-[#9CA3AF] hover:text-[#111827] transition-colors">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            <form onSubmit={handleSend} className="flex gap-2 items-center">
              {/* Attachment menu */}
              <div className="relative group/attach">
                <button type="button"
                  className="p-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#9CA3AF] hover:text-[#374151] hover:bg-[#F9FAFB] hover:border-[#D1D5DB] transition-all">
                  <Paperclip className="h-4 w-4" />
                </button>
                <div className="absolute bottom-full left-0 mb-2 hidden group-hover/attach:flex flex-col bg-white border border-[#E5E7EB] rounded-xl p-1 shadow-xl z-20 w-36">
                  <button type="button" onClick={() => simulateAttach('image')}
                    className="flex items-center gap-2 px-3 py-2 text-[11px] font-semibold text-[#374151] hover:bg-[#F9FAFB] hover:text-[#111827] rounded-lg transition-colors">
                    <ImageIcon className="h-3.5 w-3.5 text-[#9CA3AF]" /> Attach Image
                  </button>
                  <button type="button" onClick={() => simulateAttach('file')}
                    className="flex items-center gap-2 px-3 py-2 text-[11px] font-semibold text-[#374151] hover:bg-[#F9FAFB] hover:text-[#111827] rounded-lg transition-colors">
                    <FileText className="h-3.5 w-3.5 text-[#9CA3AF]" /> Attach File
                  </button>
                </div>
              </div>

              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Type your reply..."
                className="flex-1 h-10 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 text-[13px] text-[#111827] placeholder-[#9CA3AF] outline-none focus:border-[#111827] focus:bg-white transition-all"
              />

              <button type="submit"
                className="p-2.5 rounded-xl bg-[#111827] text-white hover:bg-[#1F2937] transition-colors shrink-0 shadow-sm">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="h-10 w-10 rounded-xl bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="h-5 w-5 text-[#9CA3AF]" />
            </div>
            <p className="text-[13px] font-semibold text-[#374151]">No Conversation Selected</p>
            <p className="text-[11px] text-[#9CA3AF] mt-1">Choose a thread from the list.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;

