import Link from "next/link";

export default function CareersPage() {
  return (
    <div>
      <nav>
        <div className="nav-content">
          <div className="nav-brand">Pulsate</div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/method">Method</Link>
            <Link href="/careers" className="active">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="careers-content">
        <h1>Contact Us</h1>
        
        <p>
        We are always open to conversations with people exploring the applications of machine learning to investment analysis. 
        </p>

        <p>
        If any of this sounds interesting, please email us at <a href="mailto:thepulsate@gmail.com">thepulsate@gmail.com</a>.
        </p>    
      </div>
    </div>
  );
} 