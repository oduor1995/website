export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          About BlessedText Solutions
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              At BlessedText Solutions, we are dedicated to empowering organizations with cutting-edge software as a service platforms. Our mission is to streamline operations, enhance efficiency, and foster growth for churches and educational institutions worldwide.
            </p>
            <p className="text-gray-600">
              With years of experience in software development and deep understanding of organizational needs, we create tailored solutions that adapt to your unique requirements and scale with your success.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Expertise in church and school management systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Cloud-based solutions for accessibility anywhere</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>24/7 support and regular updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Customizable features to fit your needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Data security and compliance standards</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Church Management Software
              </h3>
              <p className="text-gray-600">
                Comprehensive tools for member management, event planning, donations, and community engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                School Management System
              </h3>
              <p className="text-gray-600">
                Complete solution for student records, academic tracking, staff management, and parent communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}