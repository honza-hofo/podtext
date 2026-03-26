import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      {/* Yellow accent line */}
      <div className="h-1 bg-[#E8B84B]" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Podtext<span className="text-[#E8B84B]">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kreativní studio, které spojuje video produkci s redakční tvorbou.
              Pomáháme firmám vyprávět příběhy, které rezonují.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigace
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/produkce", label: "Produkce" },
                { href: "/redakce", label: "Redakce" },
                { href: "/o-nas", label: "O nás" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>info@podtext.cz</li>
              <li>+420 777 123 456</li>
              <li>
                Karlín, Praha 8<br />
                Česká republika
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#E8B84B] transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#E8B84B] transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#E8B84B] transition-colors text-sm"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2A2A2A] text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Podtext. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
