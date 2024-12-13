'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <p>
                <strong>Phone:</strong> +1 (234) 567-8900
              </p>
              <p>
                <strong>Address:</strong> 123 Charcoal Street, BBQ City, ST 12345
              </p>
              <div className="space-x-4">
                {/* Add social media icons/links */}
              </div>
            </div>
          </div>
          <div className="h-[400px]">
            {/* Add your map component here */}
          </div>
        </div>
      </div>
    </section>
  );
} 