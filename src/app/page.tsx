"use client";

import { useState } from "react";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState("Join Waitlist");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const trimmedEmail = email.trim();
    setIsSubmitting(true);
    setButtonText("Joining...");

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: trimmedEmail }]);

      if (error) {
        console.error('Error inserting email:', error);
        setButtonText("Submission failed");
        setTimeout(() => {
          setIsSubmitting(false);
          setButtonText("Join Waitlist");
        }, 2000);
      } else {
        setButtonText("Thank you!");
        setEmail("");
      }
    } catch (error) {
      console.error('Error:', error);
      setButtonText("Submission failed");
      setTimeout(() => {
        setIsSubmitting(false);
        setButtonText("Join Waitlist");
      }, 2000);
    }
  };

  return (
    <div>
      <nav>
        <div className="nav-content">
          <div className="nav-brand">Pulsate</div>
          <div className="nav-links">
            <a href="/method">Method</a>
            <a href="/careers">Careers</a>
          </div>
        </div>
      </nav>

      <h1>Your judgment, scaled.</h1>
      
      <p>
        Pulsate is a decision intelligence platform that learns your investment thesis. 
        We are building systems that codify your experience, turning your institutional 
        memory into an analytical edge.
      </p>

      <form id="waitlist-form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email address"
          required
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}
