import Link from "next/link";

export default function MethodPage() {
  return (
    <div>
      <nav>
        <div className="nav-content">
          <div className="nav-brand">Pulsate</div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/method" className="active">Method</Link>
            <Link href="/careers">Careers</Link>
          </div>
        </div>
      </nav>

      <h1>Our Method</h1>
      
      <p>
      Investors have no systematic way to encode and reuse their proprietary pattern recognition. General-purpose AI fails to protect IP, nor can it recognize the subtle heuristics key to an investor&apos;s unique approach. Pulsate securely learns each firm&apos;s thesis logic and historical signals to scale its edge internally.
      </p>

      <p>
      To accomplish this, secure data pipelines ingest deal flow while commodity models handle basic summarization and extraction. Our core focus is the reasoning architecture: a system that learns an investor&apos;s thesis through continuous feedback, then uses that captured judgment to construct highly contextual prompts to analyze new deals through the specific lens of that investor.
      </p>
    </div>
  );
} 