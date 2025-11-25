import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Visualize Data, Unlock Insights.</h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed animate-fade-in delay-200ms">
              Transform raw data into actionable intelligence with our interactive dashboard. Understand trends, identify opportunities, and drive better decisions.
            </p>
            <div className="mt-8 animate-fade-in delay-400ms">
              <a href="#" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl mr-4">Start Visualizing</a>
              <a href="#" className="border-2 border-gray-300 hover:border-blue-500 px-6 py-3 rounded-xl text-lg">Learn More</a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f97?w=800&h=600"
              alt="Data Visualization" aria-label="Data Visualization"
              className="rounded-xl shadow-2xl animate-slide-up"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
