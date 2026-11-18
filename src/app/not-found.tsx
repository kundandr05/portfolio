import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="bg-white border-2 border-[#18181b] rounded-2xl p-8 sm:p-12 shadow-[8px_8px_0px_#18181b] text-center max-w-md mx-auto -rotate-1 relative">
        <div className="w-14 h-14 rounded-2xl bg-[#fde047] border-2 border-[#18181b] flex items-center justify-center mx-auto mb-4 shadow-[2px_2px_0px_#18181b]">
          <FileQuestion className="w-8 h-8 text-[#18181b]" />
        </div>

        <span className="rubber-stamp text-xs py-0.5 px-2 mb-2 inline-block">
          ERROR 404
        </span>

        <h1 className="text-3xl font-display font-black text-[#18181b] mb-2">
          Page Torn Away
        </h1>

        <p className="text-stone-600 text-sm mb-6">
          The scrapbook page you&apos;re looking for couldn&apos;t be found. It may have been moved or removed.
        </p>

        <Link
          href="/"
          className="btn-scrapbook-primary text-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
