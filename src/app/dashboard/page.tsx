import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome to your Dashboard!
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              You have successfully authenticated using federated login.
            </p>
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">✓</span> You are now logged in
              </p>
              <p className="text-sm text-blue-800 mt-1">
                <span className="font-semibold">✓</span> This is a protected route
              </p>
              <p className="text-sm text-blue-800 mt-1">
                <span className="font-semibold">✓</span> Federated authentication is working
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">Secure Access</h3>
              <p className="text-slate-600 text-sm">
                Your account is protected with industry-standard authentication.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">Multiple Providers</h3>
              <p className="text-slate-600 text-sm">
                Sign in with Google, GitHub, or other federated identity providers.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">Session Management</h3>
              <p className="text-slate-600 text-sm">
                Your session is automatically managed and secured by Clerk.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
