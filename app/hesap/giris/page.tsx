import React from 'react';
import Link from 'next/link';

export default function GirisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h1>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              E-posta Adresiniz
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E-posta Adresiniz"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Şifreniz
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Şifreniz"
              required
            />
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-gray-700">
                Beni hatırla
              </label>
            </div>
            
            <a href="/hesap/sifremi-unuttum" className="text-blue-600 hover:underline">
              Şifremi Unuttum
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-bold"
          >
            Giriş Yap
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Hesabınız yok mu? 
            <Link href="/hesap/kayit" className="text-blue-600 hover:underline ml-1">
              Hemen Kayıt Olun
            </Link>
          </p>
        </div>
        
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                veya şununla devam edin
              </span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full py-2 px-4 border rounded-lg text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="#4285F4"/>
                <path d="M7.545,14.761l-1.414-1.056c-0.893,1.033-1.431,2.377-1.431,3.839c0,3.259,2.641,5.9,5.9,5.9c1.397,0,2.678-0.487,3.687-1.3l-1.535-1.535C11.786,19.521,9.62,17.9,7.545,14.761z" fill="#34A853"/>
                <path d="M12.545,17.521c3.46,0,6.326-2.784,6.326-6.239c0-3.455-2.866-6.239-6.326-6.239c-3.46,0-6.326,2.784-6.326,6.239c0,3.455,2.866,6.239,6.326,6.239z" fill="#FBBC05"/>
                <path d="M12.545,17.521c-2.337,0-4.304-1.587-4.929-3.732l-4.321,2.205C4.688,20.227,8.299,23,12.545,23c2.97,0,5.691-1.054,7.805-2.798l-2.814-2.814C16.335,16.842,14.679,17.521,12.545,17.521z" fill="#EA4335"/>
              </svg>
              Google ile
            </button>
            <button
              type="button"
              className="w-full py-2 px-4 border rounded-lg text-gray-700 hover:bg-gray-50 transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" fill="#3B5998"/>
              </svg>
              Facebook ile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 