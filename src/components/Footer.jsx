import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="AK Sofa Studio"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-gold/30"
          />
          <span className="font-display text-lg text-gold-light">
            AK Sofa Studio
          </span>
        </div>
        <p className="text-xs text-cream-dim">
          &copy; {new Date().getFullYear()} AK Sofa Studio, Clifton, Karachi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
