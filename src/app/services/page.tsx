export default function Services() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          BlessedText Solutions SaaS Services
        </h1>

        <div className="mb-16">
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">
              Church Management Software
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Our comprehensive church management platform helps religious organizations streamline operations, engage members, and grow their community through powerful digital tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Member Management</h3>
                <p className="text-gray-600">
                  Complete CRM system for tracking members, families, and visitors with detailed profiles and communication history.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Event Planning</h3>
                <p className="text-gray-600">
                  Schedule services, events, and activities with automated reminders and registration management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Donation Tracking</h3>
                <p className="text-gray-600">
                  Secure online giving platform with detailed reporting and tax receipt generation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Communication Tools</h3>
                <p className="text-gray-600">
                  Email newsletters, SMS alerts, and social media integration for effective community outreach.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Volunteer Management</h3>
                <p className="text-gray-600">
                  Coordinate volunteers with scheduling tools and skill tracking for optimal ministry assignments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Reporting & Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive dashboards and reports to track growth, engagement, and financial health.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 text-purple-600">
              School Management System
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              A complete digital solution for educational institutions to manage students, staff, academics, and operations efficiently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Student Information System</h3>
                <p className="text-gray-600">
                  Centralized database for student records, enrollment, attendance, and academic performance tracking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Grade Book</h3>
                <p className="text-gray-600">
                  Digital grade book with automated calculations, progress reports, and parent notifications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Staff Management</h3>
                <p className="text-gray-600">
                  HR tools for employee records, scheduling, performance reviews, and professional development.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Parent Portal</h3>
                <p className="text-gray-600">
                  Secure portal for parents to view grades, attendance, communicate with teachers, and pay fees.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Financial Management</h3>
                <p className="text-gray-600">
                  Fee collection, billing, and financial reporting with online payment integration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Library System</h3>
                <p className="text-gray-600">
                  Digital library management with book cataloging, borrowing tracking, and resource sharing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Why Choose BlessedText Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-green-500 mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-2">Cloud-Based</h3>
              <p className="text-gray-600">Access your data anywhere, anytime with secure cloud infrastructure.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-500 mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
              <p className="text-gray-600">Enterprise-grade security with compliance to industry standards.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-purple-500 mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Scalable</h3>
              <p className="text-gray-600">Grows with your organization, from small churches to large school districts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}