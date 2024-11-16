import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <header className="bg-white w-full py-6 shadow">
          <nav className="container mx-auto flex justify-between items-center px-4">
            <div className="text-xl font-bold">My Landing Page</div>
            <div className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </nav>
        </header>
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <h1 className="text-5xl font-bold text-gray-900">Welcome to My Landing Page</h1>
          <p className="mt-4 text-lg text-gray-600">This is a simple landing page made with Next.js and Tailwind CSS.</p>
          <div className="mt-6">
            <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">Get Started</a>
          </div>
        </main>
        <footer className="bg-white w-full py-4 shadow mt-8">
          <div className="container mx-auto text-center text-gray-500">
            © 2024 My Landing Page. All rights reserved.
          </div>
        </footer>
      </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
