"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarStyles } from "@/public/dummyStyles";
import { TypingAnimation } from "@/components/ui/typing-animation";
import ProfileImg from "@/public/name.png";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const HomeIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11L12 4l9 7v9a1 1 0 0 1-1 1h-5v-5H9v5H4a1 1 0 0 1-1-1v-9z" />
  </svg>
);

const ProjectsIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h10v8H4zM10 14h10v6H10zM14 4h6v6h-6z" />
  </svg>
);

const UserIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20a8 8 0 0 1 16 0" />
  </svg>
);

const MailIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v12H3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 7 9-7" />
  </svg>
);

const MenuIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l8 8m0-8l-8 8" />
  </svg>
);

const ExperienceIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h10l3 4v14H4V7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4h4M8 13h8M8 17h8" />
  </svg>
);

const ToolsIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 7a4 4 0 0 1 0 8l6 6-2 2-6-6a4 4 0 1 1 2-10z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 8l3 3" />
  </svg>
);

const FileTextIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CpuIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" className={className} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </svg>
);

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { href: string; label: string; Icon: React.ComponentType<IconProps> }[] = [
    { href: "/", label: "Home", Icon: HomeIcon },
    { href: "/projects", label: "Projects", Icon: ProjectsIcon },
    { href: "/experience", label: "Experience", Icon: ExperienceIcon },
    { href: "/skills", label: "Skills", Icon: CpuIcon },
    { href: "/tools", label: "Tools", Icon: ToolsIcon },
    { href: "/about", label: "About", Icon: UserIcon },
    { href: "/resume", label: "Resume", Icon: FileTextIcon },
    { href: "/contact", label: "Contact", Icon: MailIcon },
  ];

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gopal-kumar-2515b7381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      svgPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      label: "Github",
      href: "https://github.com/Reddevil522",
      svgPath: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
    },
    {
      label: "Instagram",
      href: "",
      svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className={sidebarStyles.mobileTopNav}>
        <div className={sidebarStyles.mobileTopNavInner}>
          <div className={sidebarStyles.mobileAvatarContainer}>
            <div className={sidebarStyles.mobileAvatar}>
              <Image
                src={ProfileImg}
                alt="Gopal Kumar Avatar"
                width={40}
                height={40}
                className={sidebarStyles.mobileAvatarImage}
              />
            </div>
            <div>
              <p className={sidebarStyles.mobileName}>Gopal Kumar</p>
              <TypingAnimation
                words={["Full-Stack Developer", "React Enthusiast", "Backend Engineer", "Tech Explorer"]}
                className={sidebarStyles.mobileTyping}
                loop
                showCursor={false}
                duration={80}
                pauseDelay={2000}
              />
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-5 h-5 text-zinc-300" />
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className={sidebarStyles.desktopSidebar}>
        <div className={sidebarStyles.desktopAvatarContainer}>
          <div className={sidebarStyles.desktopAvatar}>
            <Image
              src={ProfileImg}
              alt="Gopal Kumar Avatar"
              width={48}
              height={48}
              className={sidebarStyles.desktopAvatarImage}
            />
          </div>
          <div>
            <p className={sidebarStyles.desktopName}>Gopal Kumar</p>
            <TypingAnimation
              words={["Full-Stack Developer", "React Enthusiast", "Backend Engineer", "Tech Explorer"]}
              className={sidebarStyles.desktopTyping}
              loop
              showCursor={false}
              duration={80}
              pauseDelay={2000}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className={sidebarStyles.navContainer}>
          <ul className={sidebarStyles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${sidebarStyles.navItem} ${isActive(item.href)
                    ? sidebarStyles.navItemActive
                    : sidebarStyles.navItemInactive
                    }`}
                >
                  <item.Icon className={sidebarStyles.navIcon} />
                  <span className={sidebarStyles.navLabel}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <p className={sidebarStyles.connectLabel}>CONNECT</p>
        <ul className={sidebarStyles.socialList}>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={sidebarStyles.socialItem}
              >
                <svg className={sidebarStyles.socialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.svgPath} />
                </svg>
                <span className={sidebarStyles.socialLabel}>{social.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className={sidebarStyles.footerText}>© 2026 Gopal Kumar</p>
      </aside>

      {/* Mobile Menu Overlay */}
      <div
        className={`${sidebarStyles.mobileOverlay} ${mobileMenuOpen ? sidebarStyles.mobileOverlayVisible : sidebarStyles.mobileOverlayHidden
          }`}
      >
        <div
          className={`${sidebarStyles.mobileOverlayBg} ${mobileMenuOpen ? sidebarStyles.mobileOverlayBgVisible : sidebarStyles.mobileOverlayBgHidden
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`${sidebarStyles.mobileSidebar} ${mobileMenuOpen ? sidebarStyles.mobileSidebarVisible : sidebarStyles.mobileSidebarHidden
            }`}
        >
          <div className={sidebarStyles.mobileSidebarHeader}>
            <div className={sidebarStyles.mobileHeaderInner}>
              <div className={sidebarStyles.mobileHeaderAvatarContainer}>
                <div className={sidebarStyles.mobileAvatar}>
                  <Image
                    src={ProfileImg}
                    alt="Gopal Kumar Avatar"
                    width={40}
                    height={40}
                    className={sidebarStyles.mobileAvatarImage}
                  />
                </div>
                <div>
                  <p className={sidebarStyles.mobileName}>Virat K</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={sidebarStyles.mobileCloseButton}
                aria-label="Close menu"
              >
                <CloseIcon className={sidebarStyles.mobileCloseIcon} />
              </button>
            </div>
          </div>

          <div className={sidebarStyles.mobileContent}>
            <p className={sidebarStyles.mobileSectionLabel}>NAVIGATION</p>
            <ul className={sidebarStyles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${sidebarStyles.mobileNavItem} ${isActive(item.href)
                      ? sidebarStyles.navItemActive
                      : sidebarStyles.navItemInactive
                      }`}
                  >
                    <item.Icon className={sidebarStyles.mobileNavIcon} />
                    <span className={sidebarStyles.mobileNavLabel}>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className={sidebarStyles.mobileSocialSection}>
              <p className={sidebarStyles.mobileSectionLabel}>CONNECT</p>
              <ul className={sidebarStyles.mobileSocialList}>
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={sidebarStyles.mobileSocialItem}
                    >
                      <svg className={sidebarStyles.mobileSocialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={social.svgPath} />
                      </svg>
                      <span className={sidebarStyles.mobileSocialText}>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={sidebarStyles.mobileFooter}>
            <p className={sidebarStyles.mobileFooterText}>© 2025 Virat K</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar (Mobile) */}
      <div className={sidebarStyles.bottomNav}>
        <div className={sidebarStyles.bottomNavContainer}>
          <div className={sidebarStyles.bottomNavInner}>
            <div className={sidebarStyles.bottomNavBar}>
              <div className={sidebarStyles.bottomNavGrid}>
                {navItems.slice(0, 5).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${sidebarStyles.bottomNavLink} ${isActive(item.href)
                      ? sidebarStyles.bottomNavLinkActive
                      : sidebarStyles.bottomNavLinkInactive
                      }`}
                  >
                    <item.Icon className={sidebarStyles.bottomNavIcon} />
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className={`${sidebarStyles.bottomNavLink} ${isActive("/contact")
                    ? sidebarStyles.bottomNavLinkActive
                    : sidebarStyles.bottomNavLinkInactive
                    }`}
                >
                  <MailIcon className={sidebarStyles.bottomNavIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
