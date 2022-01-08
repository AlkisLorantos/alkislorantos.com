import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-5">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Email</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-1">
          <ExternalLink href="https://github.com/alkislorantos">
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-1">
        <ExternalLink href="https://linkedin.com/in/alkislorantos.com28">
            LinkedIn
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-1">
        <ExternalLink href="https://instagram.com/alklorantos">
            Instagram
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-1">
        <ExternalLink href="https://twitter.com/alkis_lorantos">
            Twitter
          </ExternalLink>
        </div>
      </div>
      <p className="flex flex-row text-gray-500 mx-auto">
      © Alkis Lorantos 2022
      </p>
    </footer>
  );
}