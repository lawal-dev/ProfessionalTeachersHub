import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">ProfessionalTeacherHub</h3>
            <p className="text-gray-600">A platform dedicated to connecting educators with opportunities for growth and development.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-600">123 Street Name, City, Country</p>
            <p className="text-gray-600">Email: info@professionalteacherhub.com</p>
            <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <p className="text-center text-gray-600 text-sm">&copy; 2024 Professional Teacher Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
