import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="md:flex justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p>© 2024 Data Insights, Inc. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-white">Product</a></li>
              <li><a href="#" className="hover:text-white">Company</a></li>
              <li><a href="#" className="hover:text-white">Resources</a></li>
              <li><a href="#" className="hover:text-white">Legal</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
