import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <header className="sticky top-0 z-50 w-full z-50 bg-white/50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left section */}
          <div className="flex items-center space-x-2">
            <Link href="/">
            <Image 
            src="/TT.png" 
            alt="Company Logo" 
            className="h-15 w-auto" 
            width="100" 
            height="100"
            />
            </Link>
            <Link href="/">
            <span className="font-bold text-lg">Trend<span style={{ color: "#f57f17", textShadow: '1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black' }}>T</span>racker</span>
            </Link>
          </div>
          
          {/* Middle section */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="#" className="hover:text-black">Integrations</Link>
          <Link href="#" className="hover:text-black">About Us</Link> 
          <Link href="#" className="hover:text-black">Services</Link>
          <Link href="#" className="hover:text-black">Blog</Link>
          <Link href="#" className="hover:text-black">Pricing</Link>
          </nav>
          
          {/* Right section */}
          <div className="flex items-center space-x-4">
          <button className="bg-white text-gray-700 font-medium border border-gray-300 hover:bg-gray-200 hover:text-black px-4 py-2 rounded-lg cursor-pointer">
            <Link href="/signin">Sign in</Link>
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer">
            <Link href="/signup">Get Started</Link>
          </button>
          </div>

        </div>
      </div>
    </header>

    {/* Hero section */}
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-24 min-h-[80vh] gap-12 bg-gray-100">
    <div className="flex flex-col items-start text-left space-y-6 max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold">
        Transform Your Business with Our Solutions
      </h1>
      <p className="text-lg text-gray-700">
        We help businesses like yours grow and thrive in the digital landscape with innovative strategies and proven results.
      </p>

      <div className="flex space-x-4">
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition cursor-pointer">
            <Link href="/signup">Get Started</Link>
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

    {/* Advertising Highlights - no images */}
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">🚀 SEO Optimization</h3>
          <p className="text-gray-600">
            Boost your visibility and rank higher on search engines with our tailored SEO strategies.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">🎯 Ad Campaigns</h3>
          <p className="text-gray-600">
            Drive traffic and conversions with powerful, data-driven ad campaigns across platforms.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">📊 Advanced Analytics</h3>
          <p className="text-gray-600">
            Understand your audience and optimize performance with our detailed analytics reports.
          </p>
        </div>
      </div>
    </section>

    {/* Features Grid */}
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">Why Choose TrendTracker?</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Everything you need to monitor, grow, and dominate your presence across platforms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Real-Time Data</h3>
            <p className="text-gray-600">
              Stay on top of your numbers with minute-to-minute tracking and alerts.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Multi-Platform Sync</h3>
            <p className="text-gray-600">
              Connect YouTube, Twitter, Instagram and more — all in one place.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
            <p className="text-gray-600">
              Let smart suggestions guide your next best post, time, and strategy.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Secure & Reliable</h3>
            <p className="text-gray-600">
              Your data is protected with top-tier encryption and platform standards.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Reports</h3>
            <p className="text-gray-600">
              Export beautifully crafted PDF reports for clients or investors.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Dedicated Support</h3>
            <p className="text-gray-600">
              Reach out to our real humans anytime for help or troubleshooting.
            </p>
          </div>
        </div>
      </div>
    </section>


    {/* Testimonials */}
    <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg text-left space-y-4">
            <p className="text-gray-700">
              “TrendTracker has been a game-changer for our content strategy.
              I check it every morning to guide our next steps.”
            </p>
            <div>
              <span className="font-semibold">Alex R.</span> — Social Media Lead at ViralForge
            </div>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-left space-y-4">
            <p className="text-gray-700">
              “The insights from TrendTracker helped us grow our channel by 3x in just 4 months.
              Highly recommend!”
            </p>
            <div>
              <span className="font-semibold">Maya L.</span> — Creator & Coach at VisionGrow
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Trusted Brands */}
    <section className="bg-gray-200 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Trusted by Leading Brands</h2>
        <p className="text-gray-600 text-lg">
          Join thousands of businesses that rely on TrendTracker to scale their digital growth.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-700 font-semibold">
          <span>ViralForge</span>
          <span>SocialPulse</span>
          <span>GrowthWave</span>
          <span>InsightLoop</span>
        </div>
      </div>
    </section>
    </>
  );
};
  