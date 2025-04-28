import Image from "next/image";

export default function Home() {
  return (
    <>
    <header className="sticky top-0 z-50 w-full z-50 bg-white/50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left section */}
          <div className="flex items-center space-x-2">
            <a href="/">
            <Image src="/TT.png" alt="Company Logo" className="h-15 w-auto" width="100" height="100"/>
            </a>
            <a href="/">
            <span className="font-bold text-lg">Trend<span style={{ color: "#f57f17", textShadow: '1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black' }}>T</span>racker</span>
            </a>
          </div>
          
          {/* Middle section */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-black">Integrations</a>
          <a href="#" className="hover:text-black">About Us</a> 
          <a href="#" className="hover:text-black">Services</a>
          <a href="#" className="hover:text-black">Blog</a>
          <a href="#" className="hover:text-black">Pricing</a>
          </nav>
          
          {/* Right section */}
          <div className="flex items-center space-x-4">
          <button className="bg-white text-gray-700 font-medium border border-gray-300 hover:bg-gray-200 hover:text-black px-4 py-2 rounded-lg cursor-pointer">
            <a href="/signin">Log in</a>
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer">
            <a href="/signup">Get Started</a>
          </button>
          </div>

        </div>
      </div>
    </header>

    {/* Hero section */}
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-24 min-h-[80vh] gap-12 bg-gray-200">
    <div className="flex flex-col items-start text-left space-y-6 max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold">
        Transform Your Business with Our Solutions
      </h1>
      <p className="text-lg text-gray-700">
        We help businesses like yours grow and thrive in the digital landscape with innovative strategies and proven results.
      </p>

      <div className="flex space-x-4">
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition cursor-pointer">
            <a href="/signup">Get Started</a>
          <span className="text-lg">→</span>
        </button>

        <button className="bg-gray-800/20 text-white px-6 py-3 rounded-lg border border-white hover:bg-gray-100/25 hover:text-black transition cursor-pointer">
        Learn More
        </button>
      </div>

    </div>

    {/* Image on Right (placeholder image for now i think)*/}
    <Image
      src="/chart.png"
      alt="Chart"
      width={1000}
      height={1000}
      className="h-auto max-w-md md:max-w-lg w-full"
    />
    </section>
    
    </>
  );
};
  