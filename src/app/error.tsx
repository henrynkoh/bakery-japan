'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for debugging but don't show it to users if it's a hydration error
    if (error.message.includes('Hydration failed') || 
        error.message.includes('expansion-ids')) {
      return;
    }
    console.error(error);
  }, [error]);

  // Don't show error UI for hydration mismatches
  if (error.message.includes('Hydration failed') || 
      error.message.includes('expansion-ids')) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-6">
          We're sorry, but something unexpected happened.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 