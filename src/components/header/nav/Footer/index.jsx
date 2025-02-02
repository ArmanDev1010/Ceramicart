import { translate } from "../../anim";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const contactInfo = [
    {
      label: "Location:",
      value: "Erevan, Armenia",
      isLink: true,
      href: "",
    },
    {
      label: "Phone:",
      value: "+123 456 7890",
      isLink: true,
      href: "tel:+123 456 7890",
    },
    {
      label: "Email:",
      value: "info@example.com",
      isLink: true,
      href: "mailto:info@example.com",
    },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/", icon: FaFacebook },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: FaInstagram,
    },
    {
      label: "Youtube",
      href: "https://www.youtube.com/",
      icon: FaYoutube,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/yourphonenumber",
      icon: FaWhatsapp,
    },
  ];

  return (
    <div className="flex items-end gap-[50px] wrap text-[12px] uppercase mt-[40px]">
      <ul className="flex items-center space-x-4">
        {socialLinks.map((link, index) => (
          <motion.li
            key={index}
            custom={[0.3, 0.1 * (index + contactInfo.length)]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
            className="inline-block"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between w-full">
        <ul className="flex items-center space-x-4">
          {contactInfo.map((item, index) => (
            <motion.li
              key={index}
              custom={[0.3, 0.1 * index]}
              variants={translate}
              initial="initial"
              animate="enter"
              exit="exit"
              className="inline-block"
            >
              <a href={item.isLink ? item.href : ""}>
                <span className="text-[#9f9689]">{item.label}</span>
                <span> {item.value}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
