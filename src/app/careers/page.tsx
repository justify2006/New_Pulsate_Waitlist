import Navigation from "@/components/Navigation";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage="careers" />
      
      <main className="max-w-4xl mx-auto px-6">
        <div className="py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 mb-12 leading-tight">
            Careers
          </h1>
          
          <div className="max-w-3xl space-y-8">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              We are looking for a small number of exceptional people to solve a very hard problem.
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              If that&apos;s you, email us.
            </p>
            
            <div className="pt-8">
              <p className="text-lg text-gray-300">
                Contact: <a href="mailto:thepulsate@gmail.com" className="text-gray-200 hover:text-purple-300 transition-colors underline">thepulsate@gmail.com</a>
              </p>
            </div>
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