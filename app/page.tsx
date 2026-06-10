"use client";

import React from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { homePageStyles, spotlightStyles } from "@/public/dummyStyles";

export default function HomePage() {
  return (
    <div className={homePageStyles.container}>
      {/* Background Grid */}
      <div className={homePageStyles.backgroundGrid.wrapper}>
        <div className={homePageStyles.backgroundGrid.pattern} />
      </div>
      <div className={homePageStyles.gradientOverlay} />

      {/* Spotlight */}
      <Spotlight className={spotlightStyles.position} fill="#10b981" />

      {/* Hero Section */}
      <div className={homePageStyles.heroSection}>
        <h1 className={homePageStyles.h1}>
          Hi, I&apos;m Gopal Kumar
        </h1>
        <h2 className={homePageStyles.h2}>Full-Stack Web Developer</h2>

        {/* Callout Card */}
        <div className={homePageStyles.calloutCard.wrapper}>
          <div className={homePageStyles.calloutCard.innerContainer}>
            <div className={homePageStyles.calloutCard.textContainer}>
              <svg
                className={homePageStyles.calloutCard.icon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path d="M3 12l9-9 9 9" strokeWidth="1.2" />
              </svg>
              <span className={homePageStyles.calloutCard.text}>
                Building products with AI
              </span>
            </div>
            <Link href="/projects" className={homePageStyles.calloutCard.button}>
              View Projects
            </Link>
          </div>
        </div>

        {/* Description */}
        <p className={homePageStyles.paragraph}>
          I build fast, scalable, and user-friendly web applications using React,
          Node.js, Express, and MongoDB. Passionate about crafting digital
          experiences, exploring new technologies, and transforming ideas into
          impactful products.
        </p>

        {/* Article/Video Card */}
        <div className={homePageStyles.article.wrapper}>
          <div className={homePageStyles.article.videoContainer}>
            <video
              className={homePageStyles.article.video}
              style={homePageStyles.article.videoStyles}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/homevideo.webm" type="video/webm" />
            </video>
          </div>
          <div className={homePageStyles.article.content}>
            <div className={homePageStyles.article.header}>
              <svg className={homePageStyles.article.headerIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>FEATURED</span>
            </div>
            <h3 className={homePageStyles.article.title}>Building with AI</h3>
            <p className={homePageStyles.article.description}>
              A showcase of my journey building AI-powered products — from SaaS applications to productivity tools.
            </p>
            <div className={homePageStyles.article.linkContainer}>
              <Link href="/projects" className={homePageStyles.article.link}>
                Explore Projects
                <svg className={homePageStyles.article.linkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
