import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProviderState } from '../../context/ProviderState';
import type { RequestItem } from '../../context/ProviderState';
import { ArrowLeft, Calendar, DollarSign, MessageSquare, Mail, Phone, CheckCircle, XCircle, Clock } from 'lucide-react';

const RequestDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { requests, updateRequestStatus, conversations } = useProviderState();

  const req = requests.find(r => r.id === id);

  if (!req) {
    return (
      <div className="py-24 text-center animate-in fade-in duration-300">
        <div className="h-10 w-10 rounded-xl bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center mx-auto mb-3">
          <Clock className="h-5 w-5 text-[#9CA3AF]" />
        </div>
        <p className="text-[13px] font-semibold text-[#374151]">Request Not Found</p>
        <button onClick={() => navigate('/provider/requests')}
          className="mt-3 text-[12px] text-indigo-600 font-semibold hover:underline">
          Back to pipeline
        </button>
      </div>
    );
  }

  const STATUS_BADGE: Record<string, string> = {
    New: 'bg-blue-50 text-blue-700 border-blue-100',
    'In Review': 'bg-amber-50 text-amber-700 border-amber-100',
    Accepted: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    Completed: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    Rejected: 'bg-rose-50 text-rose-700 border-rose-100',
  };

  const badge = STATUS_BADGE[req.status] || 'bg-gray-100 text-gray-500 border-gray-200';

  const handleStatusChange = (s: RequestItem['status']) => updateRequestStatus(req.id, s);

  const handleOpenChat = () => {
    const chat = conversations.find(c => c.customerName.toLowerCase().includes(req.customerName.split(' ')[0].toLowerCase()));
    navigate('/provider/messages', { state: { selectChatId: chat?.id || 'chat-1' } });
  };

  const LOG_STEPS = [
    { label: 'Lead Created', sub: `Inquiry captured via platform • ${req.date}`, done: true },
    { label: 'Status Updated', sub: `Transitioned to "${req.status}" by merchant`, done: req.status !== 'New' },
  ];

  return (
    <div className="space-y-5 max-w-4xl mx-auto animate-in fade-in duration-300">

      {/* Back */}
      <button onClick={() => navigate('/provider/requests')}
        className="flex items-center gap-1.5 text-[11px] font-semibold text-[#9CA3AF] hover:text-[#111827] transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Pipeline
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Main Detail Card */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
          {/* Top Banner */}
          <div className="px-6 py-5 border-b border-[#F3F4F6] flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
            <div>
              <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">{req.category}</span>
              <h2 className="text-[17px] font-bold text-[#111827] mt-0.5 leading-tight">{req.title}</h2>
            </div>
            <span className={`self-start sm:self-auto px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${badge}`}>
              {req.status}
            </span>
          </div>

          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-2">Requirement Brief</p>
              <p className="text-[13px] text-[#374151] leading-relaxed">{req.description}</p>
            </div>

            {/* Budget / Date */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F3F4F6]">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                  <DollarSign className="h-4 w-4 text-[#374151]" />
                </div>
                <div>
                  <p className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">Project Budget</p>
                  <p className="text-[14px] font-black text-[#111827]">{req.budget}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                  <Calendar className="h-4 w-4 text-[#374151]" />
                </div>
                <div>
                  <p className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">Received</p>
                  <p className="text-[13px] font-bold text-[#111827]">{req.date}</p>
                </div>
              </div>
            </div>

            {/* Activity Log */}
            <div className="pt-4 border-t border-[#F3F4F6]">
              <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-3">Pipeline Activity</p>
              <div className="space-y-3 relative">
                {LOG_STEPS.map((step, i) => (
                  <div key={i} className="flex gap-3 relative">
                    {i < LOG_STEPS.length - 1 && (
                      <div className="absolute left-[7px] top-5 bottom-0 w-px bg-[#F3F4F6]" />
                    )}
                    <div className={`h-4 w-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5 ${
                      step.done ? 'bg-emerald-50 border border-emerald-100 text-emerald-600' : 'bg-[#F3F4F6] border border-[#E5E7EB] text-[#9CA3AF]'
                    }`}>✓</div>
                    <div>
                      <p className="text-[12px] font-bold text-[#111827]">{step.label}</p>
                      <p className="text-[10px] text-[#9CA3AF]">{step.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">

          {/* Client Profile */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 space-y-4">
            <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider border-b border-[#F3F4F6] pb-3">Client Profile</p>

            <div className="flex items-center gap-3">
              {req.customerAvatar
                ? <img src={req.customerAvatar} alt={req.customerName} className="h-10 w-10 rounded-full object-cover border border-[#E5E7EB] shrink-0" />
                : <div className="h-10 w-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-sm font-bold text-[#374151] shrink-0">{req.customerName.charAt(0)}</div>
              }
              <div>
                <p className="text-[13px] font-bold text-[#111827] leading-none">{req.customerName}</p>
                <p className="text-[10px] text-[#9CA3AF] mt-1">Verified Client Member</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#F9FAFB]">
              <div className="flex items-center gap-2 text-[12px] text-[#374151]">
                <Mail className="h-3.5 w-3.5 text-[#9CA3AF] shrink-0" /><span className="truncate">{req.customerEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-[#374151]">
                <Phone className="h-3.5 w-3.5 text-[#9CA3AF] shrink-0" /><span>{req.customerPhone}</span>
              </div>
            </div>

            <button
              onClick={handleOpenChat}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#D1D5DB] text-[#374151] hover:text-[#111827] rounded-xl text-[12px] font-semibold transition-all">
              <MessageSquare className="h-3.5 w-3.5 text-indigo-500" /> Start Conversation
            </button>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 space-y-3">
            <p className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider border-b border-[#F3F4F6] pb-3">Actions Console</p>

            {req.status === 'New' && (
              <>
                <button onClick={() => handleStatusChange('Accepted')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#111827] hover:bg-[#1F2937] text-white rounded-xl text-[12px] font-semibold transition-colors shadow-sm">
                  <CheckCircle className="h-4 w-4" /> Accept Request
                </button>
                <button onClick={() => handleStatusChange('Rejected')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-[#E5E7EB] hover:bg-rose-50 hover:border-rose-100 text-rose-600 rounded-xl text-[12px] font-semibold transition-all">
                  <XCircle className="h-4 w-4" /> Reject Request
                </button>
              </>
            )}

            {req.status === 'In Review' && (
              <>
                <button onClick={() => handleStatusChange('Accepted')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#111827] hover:bg-[#1F2937] text-white rounded-xl text-[12px] font-semibold transition-colors shadow-sm">
                  <CheckCircle className="h-4 w-4" /> Accept Proposal
                </button>
                <button onClick={() => handleStatusChange('Rejected')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-[#E5E7EB] hover:bg-rose-50 hover:border-rose-100 text-rose-600 rounded-xl text-[12px] font-semibold transition-all">
                  <XCircle className="h-4 w-4" /> Decline
                </button>
              </>
            )}

            {req.status === 'Accepted' && (
              <button onClick={() => handleStatusChange('Completed')}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[12px] font-semibold transition-colors shadow-sm">
                <CheckCircle className="h-4 w-4" /> Mark Completed
              </button>
            )}

            {req.status === 'Completed' && (
              <div className="py-2.5 text-center text-[12px] text-emerald-700 font-semibold bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4" /> Job Successfully Completed
              </div>
            )}

            {req.status === 'Rejected' && (
              <div className="py-2.5 text-center text-[12px] text-rose-600 font-semibold bg-rose-50 border border-rose-100 rounded-xl flex items-center justify-center gap-2">
                <XCircle className="h-4 w-4" /> Lead Declined
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetail;
