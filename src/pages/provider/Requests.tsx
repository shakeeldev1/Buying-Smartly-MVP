import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProviderState } from '../../context/ProviderState';
import type { RequestItem } from '../../context/ProviderState';
import { DollarSign, Eye, XCircle, Move } from 'lucide-react';

const COLUMNS: { title: string; status: RequestItem['status']; accent: string; dot: string }[] = [
  { title: 'New Leads',  status: 'New',       accent: 'border-t-[#111827]',  dot: 'bg-blue-500' },
  { title: 'In Review',  status: 'In Review',  accent: 'border-t-amber-400',  dot: 'bg-amber-400' },
  { title: 'Accepted',   status: 'Accepted',   accent: 'border-t-indigo-500', dot: 'bg-indigo-500' },
  { title: 'Completed',  status: 'Completed',  accent: 'border-t-emerald-500',dot: 'bg-emerald-500' },
  { title: 'Rejected',   status: 'Rejected',   accent: 'border-t-rose-400',   dot: 'bg-rose-400' },
];

const Requests: React.FC = () => {
  const navigate = useNavigate();
  const { requests, updateRequestStatus } = useProviderState();
  const [dragOverCol, setDragOverCol] = useState<string | null>(null);
  const [activeDragId, setActiveDragId] = useState<string | null>(null);

  const onDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
    setActiveDragId(id);
  };
  const onDragEnd = () => { setActiveDragId(null); setDragOverCol(null); };
  const onDragOver = (e: React.DragEvent, status: string) => { e.preventDefault(); setDragOverCol(status); };
  const onDragLeave = (e: React.DragEvent) => { e.preventDefault(); };
  const onDrop = (e: React.DragEvent, status: RequestItem['status']) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if (id) updateRequestStatus(id, status);
    setActiveDragId(null);
    setDragOverCol(null);
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-300">

      {/* Header */}
      <div>
        <h2 className="text-[15px] font-bold text-[#111827] tracking-tight">Request Pipeline</h2>
        <p className="text-[11px] text-[#9CA3AF] mt-0.5">Drag cards across columns to advance their stage.</p>
      </div>

      {/* Board */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar w-full">
        {COLUMNS.map(col => {
          const colCards = requests.filter(r => r.status === col.status);
          const isOver = dragOverCol === col.status;

          return (
            <div
              key={col.status}
              onDragOver={e => onDragOver(e, col.status)}
              onDragLeave={onDragLeave}
              onDrop={e => onDrop(e, col.status)}
              className={`flex flex-col min-w-[272px] w-[272px] shrink-0 rounded-xl border border-t-2 p-3.5 transition-all duration-200 ${col.accent} ${
                isOver && activeDragId
                  ? 'bg-[#F3F4F6] border-[#D1D5DB] scale-[0.985] shadow-inner'
                  : 'bg-[#FAFAFA] border-[#E5E7EB]'
              }`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#F3F4F6]">
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${col.dot}`} />
                  <h3 className="text-[10px] font-bold text-[#374151] uppercase tracking-wider">{col.title}</h3>
                </div>
                <span className="bg-white border border-[#E5E7EB] text-[#374151] font-bold text-[9px] px-2 py-0.5 rounded-full">
                  {colCards.length}
                </span>
              </div>

              {/* Cards */}
              <div className="flex flex-col gap-2.5 flex-1 min-h-[160px]">
                {colCards.map(req => (
                  <div
                    key={req.id}
                    draggable
                    onDragStart={e => onDragStart(e, req.id)}
                    onDragEnd={onDragEnd}
                    className={`bg-white rounded-xl p-3.5 border space-y-3 group transition-all duration-200 ${
                      activeDragId === req.id
                        ? 'opacity-40 border-dashed border-indigo-300 bg-indigo-50/10 scale-[0.97] cursor-grabbing'
                        : 'border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-md cursor-grab active:cursor-grabbing'
                    }`}
                  >
                    {/* Customer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {req.customerAvatar
                          ? <img src={req.customerAvatar} alt={req.customerName} className="h-6 w-6 rounded-full object-cover border border-[#E5E7EB] shrink-0" />
                          : <div className="h-6 w-6 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[9px] font-bold text-[#374151] shrink-0">{req.customerName.charAt(0)}</div>
                        }
                        <span className="text-[11px] font-bold text-[#111827] truncate">{req.customerName}</span>
                      </div>
                      <Move className="h-3 w-3 text-[#D1D5DB] group-hover:text-[#9CA3AF] transition-colors shrink-0" />
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold text-[#111827] leading-snug truncate">{req.title}</p>
                      <p className="text-[10px] text-[#9CA3AF] line-clamp-2 leading-relaxed">{req.description}</p>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-[#111827] flex items-center gap-0.5">
                        <DollarSign className="h-3 w-3 text-indigo-500 shrink-0" />{req.budget}
                      </span>
                      <span className="text-[#9CA3AF] font-medium">{req.date}</span>
                    </div>

                    {/* Divider + Actions */}
                    <div className="border-t border-[#F3F4F6] pt-2.5 flex items-center justify-between">
                      <button
                        onClick={() => navigate(`/provider/requests/${req.id}`)}
                        className="flex items-center gap-1 text-[10px] font-semibold text-[#6B7280] hover:text-[#111827] transition-colors"
                      >
                        <Eye className="h-3 w-3" /> Details
                      </button>
                      {req.status === 'New' && (
                        <button
                          onClick={() => updateRequestStatus(req.id, 'Rejected')}
                          className="p-1 rounded-lg border border-[#E5E7EB] bg-white hover:bg-rose-50 hover:border-rose-100 text-[#9CA3AF] hover:text-rose-600 transition-all"
                          title="Reject"
                        >
                          <XCircle className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                {/* Drop Zone */}
                {isOver && activeDragId && (
                  <div className="border border-dashed border-indigo-200 bg-indigo-50/20 rounded-xl h-16 flex flex-col items-center justify-center gap-1 select-none animate-pulse">
                    <Move className="h-3.5 w-3.5 text-indigo-400" />
                    <span className="text-[9px] font-bold text-indigo-500 uppercase tracking-wider">Drop here</span>
                  </div>
                )}

                {/* Empty Column */}
                {colCards.length === 0 && !isOver && (
                  <div className="border border-dashed border-[#E5E7EB] rounded-xl h-16 flex items-center justify-center select-none">
                    <span className="text-[9px] font-semibold text-[#D1D5DB] uppercase tracking-wider">Empty</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
