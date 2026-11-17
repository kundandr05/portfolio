import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-xs font-mono uppercase tracking-widest text-[#c2410c] dark:text-orange-400 font-bold mb-2">
        Error 404
      </span>
      <h1 className="font-serif-editorial text-4xl sm:text-5xl font-semibold text-stone-900 dark:text-stone-100 mb-3">
        Page Not Found
      </h1>
      <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has moved. Head back to the homepage to explore projects and writing.
      </p>
      <Link href="/" className="btn-editorial-primary text-xs">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Homepage
      </Link>
    </div>
  );
}
