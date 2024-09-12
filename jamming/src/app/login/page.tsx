"use client"

import { useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation';
import { Music } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-indigo-950 text-white px-4">
      <div className="max-w-md w-full bg-blue-800 bg-opacity-50 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <Music className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Jamming
            </h1>
          </div>
          <p className="text-center text-xl mb-8">
            Discover and enjoy your favorite music
          </p>
          <a 
            href="/api/login" 
            className="block w-full bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-3 px-4 rounded-full transition duration-300 text-center"
          >
            Login with Spotify
          </a>
        </div>
        <div className="px-8 py-4 bg-blue-900 bg-opacity-50 flex items-center justify-between">
          <span className="text-sm">Don't have Spotify?</span>
          <a 
            href="https://www.spotify.com/signup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition duration-300"
          >
            Sign up for free
          </a>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 text-sm text-gray-400">
        Powered by Spotify
      </div>
    </div>
  );
};

export default LoginPage;