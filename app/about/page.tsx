"use client";

import React from "react";
import Link from "next/link";
import { aboutPageStyles } from "@/public/dummyStyles";

export default function AboutPage() {
  const interests = [
    "FULL-STACK DEV",
    "MERN DEVELOPER",
    "AI BUILDER",
    "STARTUPS",
    "OPEN SOURCE",
    "UI/UX",
    "TECH",
    "INNOVATION"
  ];

  const techStack = [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "JavaScript",
    "Bootstrap",
    "Next.js",
  ];

  const email = "gopalkumar20357@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <div className={aboutPageStyles.pageContainer}>
      <div className={aboutPageStyles.contentContainer}>
        <div className={aboutPageStyles.backgroundContainer}>
          <div className={aboutPageStyles.backgroundEffect} />
          <div className={aboutPageStyles.contentWrapper}>
            {/* Heading */}
            <h1 className={aboutPageStyles.mainHeading}>About Me</h1>

            {/* Interests */}
            <div className={aboutPageStyles.interestsContainer}>
              {interests.map((interest, index) => (
                <span key={interest} className={aboutPageStyles.interestItem}>
                  {interest}
                  {index < interests.length - 1 && (
                    <span className={aboutPageStyles.interestSeparator}>·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className={aboutPageStyles.techStackContainer}>
              {techStack.map((tech) => (
                <span key={tech} className={aboutPageStyles.techPill}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Content Sections */}
            <div className={aboutPageStyles.sectionsContainer}>
              {/* Who I Am */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Who I Am</h2>
                <p className={aboutPageStyles.paragraph}>
                  Hello! I'm Gopal, a MERN Stack Developer passionate
                  about transforming ideas into impactful digital products.
                  I specialize in building responsive, scalable,
                  and user-friendly web applications using
                  React, Node.js, Express.js, and MongoDB.
                  When I'm not coding, you'll find me exploring new technologies,
                  improving my skills, and working on exciting side projects.

                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>What I Do</h2>
                <p className={aboutPageStyles.paragraph}>
                  I'm a Full-Stack Developer and MCA student at Chandigarh University,
                  specializing in the MERN stack. Passionate about building modern,
                  scalable, and user-friendly web applications, I enjoy transforming
                  ideas into real-world products, solving complex problems, and
                  continuously learning new technologies to create impactful
                  digital experiences.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>My Journey</h2>
                <p className={aboutPageStyles.paragraph}>
                  After completing my B.Sc., I am currently pursuing an MCA at
                  Chandigarh University. As a passionate Full-Stack Developer,
                  I focus on building modern web applications using the MERN
                  stack. Through academic projects and personal initiatives,
                  I have gained experience in developing scalable, user-centric
                  pplications while continuously exploring new technologies and
                  best practices.
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Vision</h2>
                <p className={aboutPageStyles.paragraph}>
                  My vision is to build globally recognized products that transform
                  industries and improve lives. By combining Full-Stack Development,
                  AI, and innovation, I aim to create scalable solutions that empower
                  people, drive progress, and shape the future of technology.
                </p>
              </section>

              {/* Beyond Code */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Beyond Code</h2>
                <p className={aboutPageStyles.paragraph}>
                  Beyond coding, I enjoy exploring new technologies,
                  solving coding challenges, contributing to personal
                  projects, and staying updated with the latest trends
                  in software development and AI. I also enjoy music, movies,
                  and continuous learning that helps me grow both personally
                  and professionally.
                </p>
              </section>
            </div>

            {/* CTA Buttons */}
            <div className={aboutPageStyles.ctaContainer}>
              <Link
                href="/contact"
                className={aboutPageStyles.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={aboutPageStyles.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
              >
                <svg
                  className={aboutPageStyles.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}