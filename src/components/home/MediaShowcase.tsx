import React from 'react'

const videos = [
  { id: 1, title: 'BuySmartly Introduction', time: '2:30' },
  { id: 2, title: 'How It Works', time: '1:45' },
  { id: 3, title: 'Provider Benefits', time: '3:15' },
  { id: 4, title: 'User Guide', time: '4:00' },
  { id: 5, title: 'Success Stories', time: '2:15' },
]

function MediaShowcase() {
  return (
    <section className="py-20 bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Watch & Learn
          </h2>
          <p className="mt-4 text-zinc-700">
            Introduction videos to get you started
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="aspect-video bg-zinc-200 rounded-lg border border-zinc-300 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
                  <div className="w-16 h-16 rounded-full bg-[#A18244]/20 flex items-center justify-center group-hover:bg-[#A18244]/30 transition-all">
                    <svg className="w-8 h-8 text-[#A18244]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.7a1 1 0 0 1 1.4 0l8 8a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4-1.4V3.1a1 1 0 0 1 .3-.4z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-black mt-3">{video.title}</h3>
              <p className="text-sm text-zinc-600">{video.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaShowcase