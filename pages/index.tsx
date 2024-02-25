import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Coming Soon - Clean Coming Soon Page (Tailwind CSS, NextJs & HTML5) created by themeptation.net">
    <img
      src="/images/xera.svg"
      alt="Themeptation "
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    />
    <img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10">
        <h3 className="font-light text-xl font-bold tracking-wider flex items-center justify-center">
          <div>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-48"
            />
            Guyem
          </div>
        </h3>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text">Coming Soon</h1>
        <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
          We're under construction. Check back for an update soon. Stay in
          touch!
        </p>
      </div>
    </div>
    <div className="absolute bottom-5">
      <ul className="flex space-x-3">
        <li>
          <Link href="https://www.facebook.com/profile.php?id=61552166294538">
            <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
