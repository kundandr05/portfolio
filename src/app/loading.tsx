export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center py-20">
      <div className="bg-white border-2 border-[#18181b] rounded-2xl p-6 shadow-[6px_6px_0px_#18181b] flex items-center gap-3 rotate-1">
        <span className="w-5 h-5 rounded-md bg-[#fde047] border-2 border-[#18181b] animate-spin" />
        <span className="font-display font-black text-sm text-[#18181b]">
          Flipping the page...
        </span>
      </div>
    </div>
  );
}
