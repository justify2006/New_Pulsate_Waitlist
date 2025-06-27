import Navigation from "@/components/Navigation";

export default function MethodPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage="method" />
      
      <main className="max-w-4xl mx-auto px-6">
        <div className="py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 mb-12 leading-tight">
            Our Method
          </h1>
          
          <div className="max-w-3xl space-y-8">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Secure data pipelines ingest deal flow. Basic summarization and data extraction 
              are handled instantly by commodity models.
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Our focus is the reasoning architecture. The system learns an investor&apos;s thesis 
              through continuous feedback loops. This captured judgment is then used to construct 
              highly contextual prompts, allowing the agent to analyze new deals through the 
              specific lens of that investor.
            </p>
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