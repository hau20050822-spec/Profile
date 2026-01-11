"use client";

import Link from "next/link";

export default function Footer() {
    const date = new Date();
    return(
    <footer className='bg-gray-50 border-t border-gray-200 text-center'>
      <div className='text-center py-6 px-4'>
        <p className="text-sm text-gray-600 font-medium">
          &copy; {date.getFullYear()} Copyright{' '}
          <Link 
            className='text-blue-600 hover:text-blue-700 font-semibold no-underline transition-colors' 
            href='/'
          >
            Lê Hậu
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
    );
}