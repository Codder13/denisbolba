import Image from "next/image";
import Presentation from "./components/Presentation";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <Presentation>
      {/* Title Slide */}
      <Slide
        backgroundColor="bg-gradient-to-br from-blue-600 to-purple-700"
        textColor="text-white"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            My Awesome Presentation
          </h1>
          <p className="text-xl md:text-2xl mb-12">Created with Next.js</p>
          <p className="text-lg opacity-80 mt-16">
            Press right arrow or click Next to continue
          </p>
        </div>
      </Slide>

      {/* Introduction Slide */}
      <Slide>
        <h2 className="text-4xl font-bold mb-8">Introduction</h2>
        <ul className="text-xl space-y-4 list-disc pl-6">
          <li>This is a simple presentation app built with Next.js</li>
          <li>Navigate using keyboard arrows or buttons</li>
          <li>Fully customizable with Tailwind CSS</li>
          <li>Easy to add new slides and content</li>
        </ul>
      </Slide>

      {/* Features Slide */}
      <Slide backgroundColor="bg-gray-100">
        <h2 className="text-4xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Keyboard Navigation</h3>
            <p>Use arrow keys to navigate between slides</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
            <p>Works on all screen sizes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Custom Styling</h3>
            <p>Each slide can have its own background and text colors</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Easy to Extend</h3>
            <p>Add your own components and functionality</p>
          </div>
        </div>
      </Slide>

      {/* Code Example Slide */}
      <Slide>
        <h2 className="text-4xl font-bold mb-8">Code Example</h2>
        <div className="bg-gray-900 text-white p-6 rounded-lg overflow-auto max-h-[60vh]">
          <pre className="text-sm md:text-base">
            <code>{`// Example of creating a new slide
<Slide backgroundColor="bg-indigo-700" textColor="text-white">
  <h2 className="text-4xl font-bold mb-4">My Custom Slide</h2>
  <p className="text-xl">This is the content of my slide</p>
  <div className="mt-8 bg-white/20 p-4 rounded-lg">
    <p className="text-lg">You can add any React components here!</p>
  </div>
</Slide>`}</code>
          </pre>
        </div>
      </Slide>

      {/* Image Slide */}
      <Slide>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Add Images</h2>
            <p className="text-xl mb-4">
              You can easily include images in your slides using Next.js Image
              component
            </p>
            <p className="text-lg opacity-80">
              Images are optimized automatically
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Slide>

      {/* Thank You Slide */}
      <Slide
        backgroundColor="bg-gradient-to-br from-green-500 to-teal-600"
        textColor="text-white"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">Thank You!</h1>
          <p className="text-xl mb-12">
            Start creating your own presentations now
          </p>
          <p className="text-lg opacity-80 mt-16">
            Edit src/app/page.js to customize this presentation
          </p>
        </div>
      </Slide>
    </Presentation>
  );
}
