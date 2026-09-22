import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { BsGlobe, BsWhatsapp } from "react-icons/bs"; 
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs"; 
import { FaExternalLinkAlt, FaRegCopy } from "react-icons/fa";
import { useState } from "react";
import Logo from "./assets/logo.jpg";
import QRCode from "./assets/QR Forrabix.png";

const profile = {
  name: "Forrabix all rights reserved",
  username: "forrabix.com",
  description: "আমাদের সাথে সকল প্ল্যাটফর্মে যুক্ত থাকুন",
  logo: <img src={Logo} alt="Forrabix Logo" className="w-full h-full object-cover" />,
};

const socialLinks = [
  {
    name: "Facebook",
    username: "আমাদের ফেসবুক পেজে যুক্ত থাকতে ফলো করুন।",
    url: "https://www.facebook.com/profile.php?id=61578359867734",
    color: "#1877F2",
    icon: <BsFacebook />,
  },
  {
    name: "Instagram",
    username: "আমাদের ইনস্টাগ্রামে যুক্ত থাকতে ফলো করুন।",
    url: "https://www.instagram.com/forrabixinfo/",
    color: "#D62976",
    icon: <BsInstagram/>,
  },
  {
    name: "Website",
    username: "আমাদের ওয়েবসাইট ভিজিট করুন",
    url: "https://forrabix.com",
    color: "#627f7a",
    icon: <AiOutlineShoppingCart />,
  },
  {
    name: "whatsapp",
    username: "আমাদের হোয়াটসঅ্যাপ যুক্ত থাকতে ফলো করুন।",
    url: "https://wa.me/+8801873651590",
    color: "#22D366",
    icon: <BsWhatsapp />,
  },
  {
    name: "TikTok",
    username: "আমাদের টিকটকে যুক্ত থাকতে ফলো করুন।",
    url: "https://www.tiktok.com/@forrabix",
    color: "#080808",
    icon: <BsTiktok />,
  },
];

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyProfile = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Unable to copy the link. Please copy it manually.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f6f3] px-5 py-5">
      <div className="mx-auto w-full max-w-md">
        {/* Profile */}
        <section className="flex flex-col items-center text-center">
          {/* Logo */}
          {/* <div className="logo-glow mb-4 flex h-32 w-32 items-center justify-center rounded-full">
            <span className="logo-text text-8xl font-bold">{profile.logo}</span>
          </div> */}

          {/* <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            {profile.name}
          </h1> */}

          <p className="mt-2 text-lg font-bold text-gray-500">{profile.username}</p>

          <p className="mt-3 text-base  text-gray-600">{profile.description}</p>
        </section>


        {/* Social Links */}
        <section className="mt-8 space-y-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name}`}
                className="social-card group flex min-h-[88px] items-center gap-4 rounded-full px-6 py-4 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
                style={{ backgroundColor: social.color }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <span className="text-4xl font-bold">{social.icon}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-lg text-center font-semibold">{social.name}</h2>
                  <p className="text-center text-sm text-white/80">
                    {social.username}
                  </p>
                </div>

                <FaExternalLinkAlt
                  size={20}
                  className="shrink-0 opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
                />
              </a>
            );
          })}
        </section>

        

        {/* Footer */}
        <footer className="mt-10 text-center">
          <p className="text-xs tracking-wide text-gray-400">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="mt-1 text-xs text-gray-400">
            {/* কেনাকাটা হবে মন খুলে, সাশ্রয় হবে ওয়েবসাইট জুড়ে! 🛒 */}
          </p>
        </footer>
      </div>
    </main>
  );
}
