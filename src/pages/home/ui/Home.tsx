export function Home() {
  return (
    <div className="flex flex-col h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans">
      <header className="sticky top-0 z-10 flex items-center px-6 py-4 justify-center bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <h1 className="text-xl font-bold tracking-tight justify-center">
            BRAND NAME {/* 여기에 상호명을 입력하세요 */}
          </h1>
      </header>

      {/* 2. 메인 채팅 영역 (스크롤 가능) */}
      <main className="flex-1 w-full max-w-3xl mx-auto p-4 overflow-y-auto space-y-6">
        
        {/* 웰컴 메시지 (채팅 시작 전 표시) */}
        <div className="flex flex-col items-center justify-center py-10 text-center gap-4 opacity-60">
          <p className="text-zinc-500 dark:text-zinc-400">
            무엇을 도와드릴까요? 자유롭게 대화를 시작해보세요.
          </p>
        </div>

        {/* 예시: 봇의 메시지 (왼쪽) */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
             {/* 봇 아바타 이미지 */}
             <span className="text-xs">🤖</span>
          </div>
          <div className="flex flex-col gap-1 max-w-[80%]">
            <span className="text-xs text-zinc-500 ml-1">AI Assistant</span>
            <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl rounded-tl-none shadow-sm text-sm leading-relaxed">
              안녕하세요! <strong>BRAND NAME</strong> 챗봇입니다. <br/>
              무엇을 도와드릴까요?
            </div>
          </div>
        </div>

        {/* 예시: 유저의 메시지 (오른쪽) */}
        <div className="flex items-start justify-end gap-3">
          <div className="flex flex-col gap-1 items-end max-w-[80%]">
             <div className="p-3 bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-sm text-sm leading-relaxed">
              서비스 이용 가격이 궁금해요.
            </div>
          </div>
        </div>

        {/* 예시: 봇의 응답 (왼쪽) */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
             <span className="text-xs">🤖</span>
          </div>
          <div className="flex flex-col gap-1 max-w-[80%]">
            <span className="text-xs text-zinc-500 ml-1">AI Assistant</span>
            <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl rounded-tl-none shadow-sm text-sm leading-relaxed">
              저희 서비스는 Basic, Pro, Enterprise 세 가지 플랜을 제공하고 있습니다. 자세한 내용은 아래 링크를 참고해주세요.
            </div>
          </div>
        </div>
      </main>

      <div className="sticky bottom-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 p-4">
        <div className="max-w-3xl mx-auto">
          <form className="relative flex items-center gap-2">
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="w-full p-4 pr-12 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:bg-white dark:focus:bg-black transition-all shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-2 p-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-zinc-400">
              AI는 실수를 할 수 있습니다. 중요한 정보는 확인이 필요합니다.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}