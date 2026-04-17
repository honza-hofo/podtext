"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionHeader from "@/components/podtext/SectionHeader";

const serviceTypes = [
  "Produkce videa",
  "Tvorba obsahu",
  "PR & komunikace",
  "Podcasty",
  "Jiné",
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Děkujeme za zprávu! Ozveme se vám co nejdříve.");
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Kontakt"
            subtitle="Máte projekt na srdci? Rádi si o něm popovídáme."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Jméno
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-600 focus:outline-none focus:border-[#E8B84B] transition-colors"
                  placeholder="Vaše jméno"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-600 focus:outline-none focus:border-[#E8B84B] transition-colors"
                  placeholder="vas@email.cz"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Typ projektu
                </label>
                <select
                  id="type"
                  required
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-[#E8B84B] transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Vyberte typ projektu
                  </option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Zpráva
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-600 focus:outline-none focus:border-[#E8B84B] transition-colors resize-none"
                  placeholder="Popište svůj projekt nebo nápad..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#E8B84B] text-[#0F0F0F] rounded-lg font-medium text-sm hover:bg-[#d4a63e] transition-colors shadow-lg shadow-[#E8B84B]/20"
              >
                <Send className="w-4 h-4" />
                Odeslat zprávu
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3
                className="text-lg font-bold mb-6"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Kontaktní údaje
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8B84B]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#E8B84B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a
                      href="mailto:info@podtext.cz"
                      className="text-gray-900 hover:text-[#E8B84B] transition-colors"
                    >
                      info@podtext.cz
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8B84B]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#E8B84B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telefon</p>
                    <a
                      href="tel:+420777123456"
                      className="text-gray-900 hover:text-[#E8B84B] transition-colors"
                    >
                      +420 777 123 456
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8B84B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#E8B84B]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Adresa</p>
                    <p className="text-gray-900">
                      Karlín, Praha 8<br />
                      Česká republika
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-xl border border-gray-200 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#E8B84B] mx-auto mb-2" />
                <p className="text-sm text-gray-500">Karlín, Praha 8</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
