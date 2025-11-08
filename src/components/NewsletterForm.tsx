'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const res = await fetch('https://formspree.io/f/movyalpk', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: new FormData(e.currentTarget),
    });

    const data = await res.json();
    if (data.ok) {
      setSubmitted(true);
      setEmail('');
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-neutral-900 font-semibold rounded-md hover:bg-neutral-200 transition-all"
        >
          Subscribe
        </button>
      </form>

      {submitted && (
        <p className="text-green-500 mt-4 text-sm">
          Thanks! We got your email.
        </p>
      )}

      {error && (
        <p className="text-red-500 mt-4 text-sm">
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}