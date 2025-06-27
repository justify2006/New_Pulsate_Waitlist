"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call - replace with your actual waitlist API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-400">Thank you. We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter your email address"
        className="flex-1 bg-transparent border-b border-gray-600 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-800/60 transition-colors"
        required
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-2 border border-gray-600 text-gray-300 hover:border-purple-800/60 hover:text-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "..." : "Join Waitlist"}
      </button>
    </form>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage="home" />
      
      <main className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <div className="py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 mb-8 leading-tight">
            Your judgment, scaled.
          </h1>
          
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12">
              Pulsate is a decision intelligence platform that learns your investment thesis. 
              We are building systems that codify your experience, turning your institutional 
              memory into an analytical edge.
            </p>
          </div>
        </div>

        {/* Waitlist Section */}
        <div className="py-20 border-t border-gray-800">
          <div className="mb-8">
            <WaitlistForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-800 mt-20">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>Copyright © 2025 Pulsate Inc.</p>
          <div className="flex items-center space-x-4">
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
