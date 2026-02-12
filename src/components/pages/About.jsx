"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to BookHub - Your ultimate platform for discovering,
            managing, and sharing books.
          </p>
        </div>

        {/* Developer Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About the Developer
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Frontend Developer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hello! I'm a passionate frontend developer with a keen interest
                in building beautiful, user-friendly web applications. With
                expertise in React, Tailwind CSS, and modern JavaScript, I
                create responsive and interactive interfaces that provide
                exceptional user experiences. BookHub is a testament to my
                commitment to combining clean code with elegant design.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                I'm constantly learning and exploring new technologies to stay
                at the forefront of web development. When I'm not coding, you
                can find me reading books, contributing to open-source projects,
                or collaborating with other developers in the community.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <FaTwitter size={20} />
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BookHub was created with a simple mission: to make book management
            and discovery simple, intuitive, and enjoyable for everyone. Whether
            you're a casual reader, an avid book collector, or a literary
            enthusiast, BookHub provides the tools you need to organize,
            explore, and share your love for books.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe that technology should enhance our love for reading, not
            complicate it. That's why we've built BookHub with user experience
            at its core.
          </p>
        </div>
      </div>
    </main>
  );
}
