import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  status: 'Active' | 'Draft' | 'Inactive';
  availability: string;
  images: string[];
  tags: string[];
  created: string;
  views: number;
  clicks: number;
  requestsCount: number;
}

export interface RequestItem {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAvatar?: string;
  title: string;
  category: string;
  description: string;
  date: string;
  status: 'New' | 'In Review' | 'Accepted' | 'Completed' | 'Rejected';
  budget: string;
}

export interface ChatMessage {
  id: string;
  sender: 'provider' | 'customer';
  text: string;
  time: string;
  attachment?: string;
}

export interface Conversation {
  id: string;
  customerName: string;
  customerAvatar?: string;
  customerRole?: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: boolean;
  messages: ChatMessage[];
}

export interface ProviderProfile {
  businessName: string;
  logo: string;
  description: string;
  category: string;
  location: string;
  contact: string;
  website: string;
  emailVerified: boolean;
  profileCompleted: boolean;
  completionPercentage: number;
}

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ProviderContextType {
  profile: ProviderProfile;
  services: Service[];
  requests: RequestItem[];
  conversations: Conversation[];
  toasts: Toast[];
  updateProfile: (updated: Partial<ProviderProfile>) => void;
  addService: (service: Omit<Service, 'id' | 'created' | 'views' | 'clicks' | 'requestsCount'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  updateRequestStatus: (id: string, status: RequestItem['status']) => void;
  sendMessage: (conversationId: string, text: string, attachment?: string) => void;
  addToast: (message: string, type?: Toast['type']) => void;
  removeToast: (id: string) => void;
}

const ProviderContext = createContext<ProviderContextType | undefined>(undefined);

const initialProfile: ProviderProfile = {
  businessName: "Elite Global Sourcing",
  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&auto=format&fit=crop&q=60",
  description: "Premium procurement, supply chain logistics, and business sourcing agency servicing corporate clients globally. Specializing in high-end goods, manufacturing connections, and full customs logistics.",
  category: "Sourcing & Logistics",
  location: "New York, USA (Global Operations)",
  contact: "sourcing@eliteglobal.com",
  website: "https://eliteglobalsourcing.com",
  emailVerified: true,
  profileCompleted: true,
  completionPercentage: 85
};

const initialServices: Service[] = [
  {
    id: "s-1",
    title: "Freight Booking Suite",
    category: "Logistics Networks",
    description: "Instant freight quotes across air, sea and road shipments with custom advisory and clearance support.",
    price: "$89",
    status: "Active",
    availability: "Mon - Fri, 9 AM - 6 PM EST",
    images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80&auto=format&fit=crop"],
    tags: ["Freight", "Logistics", "Shipping", "Global"],
    created: "2026-04-10",
    views: 1240,
    clicks: 480,
    requestsCount: 48
  },
  {
    id: "s-2",
    title: "Storage & Fulfillment Solutions",
    category: "Logistics Networks",
    description: "Flexible warehouse allocation plus order consolidation, quality inspection, and last-mile delivery.",
    price: "$125",
    status: "Active",
    availability: "24/7 Operations Support",
    images: ["https://images.unsplash.com/photo-1550565099-8b8c7db9b0ff?w=1200&q=80&auto=format&fit=crop"],
    tags: ["Warehouse", "Fulfillment", "Supply Chain"],
    created: "2026-04-15",
    views: 950,
    clicks: 280,
    requestsCount: 28
  },
  {
    id: "s-3",
    title: "Luxury Sourcing & Manufacturing Advisory",
    category: "Shopping & Sourcing",
    description: "Premium custom sourcing of leather, textiles, and design goods. End-to-end quality assurance and supplier negotiations.",
    price: "$450",
    status: "Active",
    availability: "By Appointment Only",
    images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop"],
    tags: ["Sourcing", "Luxury", "Manufacturing", "Bespoke"],
    created: "2026-05-01",
    views: 540,
    clicks: 110,
    requestsCount: 12
  },
  {
    id: "s-4",
    title: "Supply Chain Audit & Inspection",
    category: "Professional Services",
    description: "Rigorous compliance audit reports, vendor screening, and quality inspection visits at global factories.",
    price: "$299",
    status: "Draft",
    availability: "Flexible Schedule",
    images: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop"],
    tags: ["Audit", "Quality", "Compliance"],
    created: "2026-06-01",
    views: 150,
    clicks: 15,
    requestsCount: 0
  }
];

const initialRequests: RequestItem[] = [
  {
    id: "req-1",
    customerName: "Sarah Jenkins",
    customerEmail: "sarah.j@boutiquecollective.com",
    customerPhone: "+1 (555) 349-2810",
    customerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    title: "Sourcing Luxury Leather Goods",
    category: "Shopping & Sourcing",
    description: "Looking to source custom full-grain leather bags and accessories for an upscale boutique brand. Needs verified Italian or Spanish suppliers with sustainable certifications and initial MOQ under 100 units.",
    date: "2026-06-12",
    status: "New",
    budget: "$5,000"
  },
  {
    id: "req-2",
    customerName: "David Miller",
    customerEmail: "d.miller@millerlogistics.de",
    customerPhone: "+49 172 8839201",
    customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    title: "Urgent Sea Freight Booking",
    category: "Logistics Networks",
    description: "Need immediate logistics coordinator for 2x 40ft containers of consumer electronics from Shanghai port to Hamburg port. Customs clearance and documentation assistance is mandatory.",
    date: "2026-06-11",
    status: "In Review",
    budget: "$2,800"
  },
  {
    id: "req-3",
    customerName: "Marcus Aurelius",
    customerEmail: "marcus@rome-travels.com",
    customerPhone: "+39 333 445566",
    customerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    title: "Bespoke Culinary Tour Sourcing",
    category: "Travel Experiences",
    description: "Looking for an exclusive local travel planner to arrange winery visits, Michelin star dinner reservations, and luxury transport for a private group of 8 in Tuscany over 5 days.",
    date: "2026-06-08",
    status: "Accepted",
    budget: "$12,000"
  },
  {
    id: "req-4",
    customerName: "Elena Rostova",
    customerEmail: "elena@rostov-compliance.org",
    customerPhone: "+44 7911 123456",
    customerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    title: "Supply Chain Compliance Audit",
    category: "Professional Services",
    description: "Audit factory labor conditions, safety procedures, and environmental compliance at our contractor factory in Ho Chi Minh City. Detailed report needed within two weeks.",
    date: "2026-06-05",
    status: "Completed",
    budget: "$4,500"
  }
];

const initialConversations: Conversation[] = [
  {
    id: "chat-1",
    customerName: "Sarah Jenkins",
    customerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    customerRole: "Founder, Boutique Collective",
    lastMessage: "Yes, we are aiming for full-grain calfskin leather, vegetable tanned. Need low minimum order quantities initially.",
    lastMessageTime: "10:42 AM",
    unread: true,
    messages: [
      {
        id: "m1",
        sender: "customer",
        text: "Hello! I saw your luxury sourcing service and would love to chat.",
        time: "10:30 AM"
      },
      {
        id: "m2",
        sender: "provider",
        text: "Hi Sarah, thank you for reaching out! I'd be happy to assist you. Sourcing premium leather goods is one of our primary specialties. Could you share details about the materials and standard quantity you are looking for?",
        time: "10:35 AM"
      },
      {
        id: "m3",
        sender: "customer",
        text: "Yes, we are aiming for full-grain calfskin leather, vegetable tanned. Need low minimum order quantities initially. Ideally under 100 units per style to test the market.",
        time: "10:42 AM"
      }
    ]
  },
  {
    id: "chat-2",
    customerName: "David Miller",
    customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    customerRole: "Logistics Mgr, Miller AG",
    lastMessage: "That sounds excellent. I will send over the bills of lading shortly.",
    lastMessageTime: "Yesterday",
    unread: false,
    messages: [
      {
        id: "m4",
        sender: "customer",
        text: "Hi, can you handle customs clearances in Hamburg port?",
        time: "Yesterday, 3:15 PM"
      },
      {
        id: "m5",
        sender: "provider",
        text: "Yes David, we handle door-to-door logistics including full custom clearance at Hamburg, Rotterdam, and Antwerp ports. We also draft the compliance papers.",
        time: "Yesterday, 3:20 PM"
      },
      {
        id: "m6",
        sender: "customer",
        text: "That sounds excellent. I will send over the bills of lading shortly.",
        time: "Yesterday, 3:45 PM"
      }
    ]
  }
];

export const ProviderStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProviderProfile>(() => {
    const saved = localStorage.getItem('bs_provider_profile');
    return saved ? JSON.parse(saved) : initialProfile;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('bs_provider_services');
    return saved ? JSON.parse(saved) : initialServices;
  });

  const [requests, setRequests] = useState<RequestItem[]>(() => {
    const saved = localStorage.getItem('bs_provider_requests');
    return saved ? JSON.parse(saved) : initialRequests;
  });

  const [conversations, setConversations] = useState<Conversation[]>(() => {
    const saved = localStorage.getItem('bs_provider_conversations');
    return saved ? JSON.parse(saved) : initialConversations;
  });

  const [toasts, setToasts] = useState<Toast[]>([]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('bs_provider_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('bs_provider_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('bs_provider_requests', JSON.stringify(requests));
  }, [requests]);

  useEffect(() => {
    localStorage.setItem('bs_provider_conversations', JSON.stringify(conversations));
  }, [conversations]);

  const addToast = (message: string, type: Toast['type'] = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const updateProfile = (updated: Partial<ProviderProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updated };
      // Dynamically calculate completion
      let completedFields = 0;
      const fieldsToCheck: (keyof ProviderProfile)[] = ['businessName', 'logo', 'description', 'category', 'location', 'contact', 'website'];
      fieldsToCheck.forEach((f) => {
        if (next[f]) completedFields++;
      });
      const strength = Math.min(100, Math.round((completedFields / fieldsToCheck.length) * 85) + (next.emailVerified ? 15 : 0));
      return {
        ...next,
        completionPercentage: strength,
        profileCompleted: strength >= 85
      };
    });
    addToast("Profile updated successfully");
  };

  const addService = (newS: Omit<Service, 'id' | 'created' | 'views' | 'clicks' | 'requestsCount'>) => {
    const id = `s-${Date.now()}`;
    const service: Service = {
      ...newS,
      id,
      created: new Date().toISOString().split('T')[0],
      views: 0,
      clicks: 0,
      requestsCount: 0
    };
    setServices((prev) => [service, ...prev]);
    addToast(`Service "${service.title}" created successfully`);
  };

  const updateService = (id: string, updated: Partial<Service>) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updated } as Service : s))
    );
    addToast("Service updated successfully");
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    addToast("Service deleted successfully", "info");
  };

  const updateRequestStatus = (id: string, status: RequestItem['status']) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
    addToast(`Request status updated to ${status}`);
  };

  const sendMessage = (conversationId: string, text: string, attachment?: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage: ChatMessage = {
      id: `m-${Date.now()}`,
      sender: 'provider',
      text,
      time,
      attachment
    };

    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === conversationId) {
          return {
            ...conv,
            lastMessage: text || (attachment ? "Sent an attachment" : ""),
            lastMessageTime: time,
            messages: [...conv.messages, newMessage],
            unread: false
          };
        }
        return conv;
      })
    );

    // Auto mock reply after 3s to make dashboard feel alive!
    setTimeout(() => {
      const replyText = `Thank you for details! Let me check this and get back to you with quotes.`;
      const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const replyMessage: ChatMessage = {
        id: `m-reply-${Date.now()}`,
        sender: 'customer',
        text: replyText,
        time: replyTime
      };
      setConversations((cPrev) =>
        cPrev.map((conv) => {
          if (conv.id === conversationId) {
            return {
              ...conv,
              lastMessage: replyText,
              lastMessageTime: replyTime,
              messages: [...conv.messages, replyMessage],
              unread: true
            };
          }
          return conv;
        })
      );
      addToast("New message received", "info");
    }, 3000);
  };

  return (
    <ProviderContext.Provider
      value={{
        profile,
        services,
        requests,
        conversations,
        toasts,
        updateProfile,
        addService,
        updateService,
        deleteService,
        updateRequestStatus,
        sendMessage,
        addToast,
        removeToast
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export const useProviderState = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('useProviderState must be used within a ProviderStateProvider');
  }
  return context;
};
