import React from 'react';

/* Component: SpotifyStyleCard
   Author: revengee2919@gmail.com 
   Instagram: @Wacut_e
*/

const SpotifyStyleCard = ({ post }) => {
  return (
    <div className="bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-all duration-300 group cursor-pointer shadow-xl border border-transparent hover:border-cyan-500/30">
      <div className="relative mb-4">
        {/* صورة الغلاف */}
        <img 
          src={post.coverArt || 'https://via.placeholder.com/300x300/121212/00ffff'} 
          className="w-full aspect-square object-cover rounded-lg shadow-2xl" 
          alt="cover"
        />
        {/* زر التشغيل العائم */}
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg hover:scale-110">
          <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      <h4 className="font-bold text-white truncate">{post.title}</h4>
      <p className="text-sm text-gray-400 mt-1">بواسطة: {post.author}</p>
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
           <span className="text-cyan-400 font-mono text-xs">{post.upvotes} UPVOTES</span>
        </div>
        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
           Verified by @Wacut_e
        </span>
      </div>
    </div>
  );
};

export default SpotifyStyleCard; // هذا السطر مهم جداً
