"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projects-data";
import { projectStyles as s } from "@/public/dummyStyles";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function ProjectsPage() {
  const router = useRouter();
  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        {/* Header */}
        <div className={s.header}>
          <h1 className={s.pageTitle}>Projects</h1>
          <p className={s.pageSubtitle}>
            A collection of things I&apos;ve built over the years.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={s.projectsGrid}>
          {projects.map((project) => (
            <FollowerPointerCard
              key={project.id}
              title={
                <div className={s.titleComponentContainer}>
                  {/* <Image
                    src={project.authorAvatar}
                    alt={project.author}
                    width={20}
                    height={20}
                    className={s.titleComponentAvatar}
                  /> */}
                  <span className={s.titleComponentText}>
                    {project.title}
                  </span>
                </div>
              }
            >
              <div onClick={() => router.push(`/projects/${project.slug}`)} className="cursor-pointer">
                <div className={s.projectCard}>
                  {/* Image */}
                  <div className={s.imageContainer}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={s.projectImage}
                    />
                    {/* Status Badge */}
                    <div className={s.statusBadgeContainer}>
                      <span
                        className={`${s.statusBadge} ${project.status === "active"
                          ? s.statusActive
                          : s.statusInactive
                          }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Bookmark */}
                    <button className={s.bookmarkButton} aria-label="Bookmark">
                      <svg
                        className={s.bookmarkIcon}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className={s.contentSection}>
                    <h3 className={s.projectTitle}>{project.title}</h3>
                    <p className={s.projectDescription}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className={s.tagsContainer}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={s.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className={s.actionsContainer}>
                      <div className={s.actionsLinksContainer}>
                        {project.links.visit && (
                          <a
                            href={project.links.visit}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.visitButton}
                          >
                            Visit
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.otherButton}
                          >
                            GitHub
                          </a>
                        )}
                        {project.links.pypi && (
                          <a
                            href={project.links.pypi}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.otherButton}
                          >
                            PyPI
                          </a>
                        )}
                        {project.links.link && (
                          <a
                            href={project.links.link}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.otherButton}
                          >
                            Link
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </div>
  );
}
