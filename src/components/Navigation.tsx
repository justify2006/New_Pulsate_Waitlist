import Link from "next/link";

interface NavigationProps {
  currentPage?: 'home' | 'method' | 'careers';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  return (
    <nav className="w-full py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-light text-gray-200 hover:text-white transition-colors">
            Pulsate
          </Link>
        </div>
        
        {/* Centered Navigation */}
        <div className="flex items-center justify-center space-x-8 border-b border-gray-800 pb-4">
          <Link 
            href="/" 
            className={`transition-colors ${
              currentPage === 'home' 
                ? 'text-gray-200 border-b border-purple-900/50' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/method" 
            className={`transition-colors ${
              currentPage === 'method' 
                ? 'text-gray-200 border-b border-purple-900/50' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Method
          </Link>
          <Link 
            href="/careers" 
            className={`transition-colors ${
              currentPage === 'careers' 
                ? 'text-gray-200 border-b border-purple-900/50' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Careers
          </Link>
        </div>
      </div>
    </nav>
  );
} 