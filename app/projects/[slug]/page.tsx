"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects-data";
import { projectDetailStyles as s } from "@/public/dummyStyles";
import { ArrowLeft, ExternalLink, Github, Package, Youtube } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-2 text-zinc-400">Project not found</p>
          <Link href="/projects" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        {/* Back Button */}
        <Link href="/projects" className={s.backButton}>
          <ArrowLeft className={s.backIcon} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className={s.projectHeader}>
          <div className={s.headerFlex}>
            <div className={s.headerLeft}>
              <div className={s.titleContainer}>
                <h1 className={s.projectTitle}>{project.title}</h1>
                <span
                  className={`${s.statusBadge} ${project.status === "active" ? s.statusActive : s.statusInactive
                    }`}
                >
                  {project.status}
                </span>
              </div>
              <p className={s.projectDescription}>{project.detailedDescription}</p>

              {/* Tags */}
              <div className={s.tagsContainer}>
                {project.tags.map((tag) => (
                  <span key={tag} className={s.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Primary Actions */}
              <div className={s.actionButtonsContainer}>
                {project.links.visit && (
                  <Link
                    href={project.links.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.visitButton}
                  >
                    <ExternalLink className={s.buttonIcon} />
                    Visit Live
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className={s.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className={s.projectImage}
            priority
          />
        </div>

        {/* Main Content Grid */}
        <div className={s.gridContainer}>
          {/* Left Column (Content) */}
          <div className={s.mainContent}>
            {/* Features */}
            <section>
              <h2 className={s.sectionTitle}>Key Features</h2>
              <div className={s.featuresGrid}>
                {project.features.map((feature, index) => (
                  <div key={index} className={s.featureCard}>
                    <div className={s.featureCardInner}>
                      <div className={s.featureIconContainer}>
                        <div className={s.featureIcon} />
                      </div>
                      <span className={s.featureText}>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className="mt-12">
              <h2 className={s.sectionTitle}>Learning Outcomes</h2>
              <div className={s.learningOutcomesGrid}>
                {project.learningOutcomes.map((outcome, index) => (
                  <div key={index} className={s.learningOutcomeCard}>
                    <div className={s.learningOutcomeNumber}>
                      <span className={s.learningOutcomeNumberText}>
                        {index + 1}
                      </span>
                    </div>
                    <span className={s.learningOutcomeText}>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className={s.sidebar}>
            {/* Tech Stack */}
            <div className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Technologies</h3>
              <div className={s.techStackContainer}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={s.techStackItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Links</h3>
              <div className={s.linksContainer}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Github className={s.linkIcon} />
                    <span className={s.linkText}>View Source Code</span>
                  </a>
                )}
                {project.links.visit && (
                  <a
                    href={project.links.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <ExternalLink className={s.linkIcon} />
                    <span className={s.linkText}>Live Demo</span>
                  </a>
                )}
                {project.links.pypi && (
                  <a
                    href={project.links.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Package className={s.linkIcon} />
                    <span className={s.linkText}>PyPI Package</span>
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Project Info</h3>
              <div className={s.projectInfoContainer}>
                <div>
                  <p className={s.projectInfoLabel}>Author</p>
                  <div className={s.authorContainer}>
                    {/* <Image
                      src={project.authorAvatar}
                      alt={project.author}
                      width={32}
                      height={32}
                      className={s.authorAvatar}
                    /> */}
                    <span className={s.authorName}>{project.author}</span>
                  </div>
                </div>
                <div>
                  <p className={s.projectInfoLabel}>Status</p>
                  <p className={s.projectInfoText}>{project.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}