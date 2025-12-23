import React, { useState, useEffect } from 'react';
/* Project: REVENGEE-SOCIAL-X
   Author: revengee2919@gmail.com
   Instagram: @Wacut_e
   Description: A high-end community platform with futuristic UI.
*/

const App = () => {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('trending');

  // بيانات تجريبية لمحاكاة المحتوى الاحترافي
  const mockData = [
    { id: 1, author: 'User_X', content: 'مستقبل الذكاء الاصطناعي في 2026', votes: 1540, tags: ['AI', 'Tech'] },
    { id: 2, author: 'CreativeMind', content: 'كيف تبني هويتك البصرية الخاصة؟', votes: 890, tags: ['Design', 'Art'] }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-cyan-500">
      {/* Navigation Bar - تصميم زجاجي (Glassmorphism) */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-cyan-500/30 p-4 flex justify-between items-center shadow-lg shadow-cyan-500/10">
        <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          REVENGEE<span className="text-white">2919</span>
        </div>
        
        <div className="flex gap-6 items-center">
          <input 
            type="text" 
            placeholder="ابحث عن مجتمعات سرية..." 
            className="bg-slate-800 border border-slate-700 rounded-full px-6 py-2 focus:outline-none focus:border-cyan-400 transition-all w-64 lg:w-96 text-sm"
          />
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-cyan-500/20">
            انضم الآن
          </button>
        </div>
      </nav>

      <main className="container mx-auto mt-8 flex flex-col lg:flex-row gap-8 px-4">
        {/* Sidebar - القائمة الجانبية المتميزة */}
        <aside className="w-full lg:w-1/4 space-y-4">
          <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
            <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
              <span className="h-2 w-2 bg-cyan-400 rounded-full animate-ping"></span>
              المجتمعات النشطة
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="hover:text-white cursor-pointer transition-all flex justify-between"><span>#برمجيات_الغد</span> <span className="text-xs bg-slate-700 px-2 rounded">+12k</span></li>
              <li className="hover:text-white cursor-pointer transition-all flex justify-between"><span>#عالم_التصميم</span> <span className="text-xs bg-slate-700 px-2 rounded">+8k</span></li>
              <li className="hover:text-white cursor-pointer transition-all flex justify-between"><span>#ريادة_الأعمال</span> <span className="text-xs bg-slate-700 px-2 rounded">+5k</span></li>
            </ul>
          </div>

          {/* تواصل مع المطور (حقوقك) */}
          <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 text-center">
            <p className="text-xs text-slate-400 mb-2 font-mono">Managed by</p>
            <p className="text-sm font-bold text-cyan-400">revengee2919@gmail.com</p>
            <a href="https://instagram.com/Wacut_e" className="text-xs text-blue-400 underline italic mt-1 block">@Wacut_e</a>
          </div>
        </aside>

        {/* Content Area - نظام المنشورات المتطور */}
        <section className="w-full lg:w-3/4 space-y-6">
          <div className="flex gap-4 mb-8 border-b border-slate-800 pb-2">
            {['trending', 'latest', 'top'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize pb-2 px-4 transition-all ${activeTab === tab ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {mockData.map(post => (
            <div key={post.id} className="group bg-slate-800/30 p-6 rounded-[2rem] border border-slate-700 hover:bg-slate-800/50 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex flex-col items-center bg-slate-900/50 p-2 rounded-2xl h-fit">
                  <button className="hover:text-orange-500 text-xl">▲</button>
                  <span className="font-mono font-bold text-cyan-400 my-1">{post.votes}</span>
                  <button className="hover:text-blue-500 text-xl">▼</button>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
                    <span className="text-sm font-bold text-slate-200">{post.author}</span>
                    <span className="text-xs text-slate-500">• منذ ساعتين</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">{post.content}</h2>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer مع حقوق الملكية */}
      <footer className="mt-20 border-t border-slate-800 p-10 text-center text-slate-500">
        <p>© 2025 All Rights Reserved to <span className="text-white font-bold">REVENGEE2919</span></p>
        <p className="text-xs mt-2 italic">Designed for Innovation | IG: @Wacut_e</p>
      </footer>
    </div>
  );
};

export default App;
