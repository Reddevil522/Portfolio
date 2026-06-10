"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";
import { toolsPageStyles } from "@/public/dummyStyles";

interface Tool {
  name: string;
  category: string;
  icon: string;
  href: string;
}

const tools: Tool[] = [
  {
    name: "Cursor",
    category: "IDE",
    icon: "/cursor.webp",
    href: "https://cursor.sh",
  },
  {
    name: "ChatGPT",
    category: "Productivity",
    icon: "/chatgpt.webp",
    href: "https://chat.openai.com",
  },
  {
    name: "VS Code",
    category: "IDE",
    icon: "/vscode.webp",
    href: "https://code.visualstudio.com",
  },
  {
    name: "Claude AI",
    category: "Productivity",
    icon: "/claude.webp",
    href: "https://claude.ai",
  },
  {
    name: "Gemini",
    category: "Productivity",
    icon: "/gemini.webp",
    href: "https://gemini.google.com",
  },
  {
    name: "Lovable",
    category: "Productivity",
    icon: "/lovable.webp",
    href: "https://lovable.dev",
  },
  {
    name: "Perplexity",
    category: "Research",
    icon: "/perplexity.webp",
    href: "https://perplexity.ai",
  },
];

export default function ToolsPage() {
  return (
    <div className={toolsPageStyles.pageContainer}>
      <div className={toolsPageStyles.contentContainer}>
        {/* Header */}
        <div className={toolsPageStyles.headerContainer}>
          <h1 className={toolsPageStyles.headerTitle}>Tools</h1>
          <p className={toolsPageStyles.headerSubtitle}>
            Software and tools I use on a daily basis.
          </p>
        </div>

        {/* Tools Grid */}
        <div className={toolsPageStyles.toolsGrid}>
          {tools.map((tool) => (
            <CometCard key={tool.name}>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={toolsPageStyles.toolCardLink}
              >
                <div className={toolsPageStyles.toolIconContainer}>
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className={toolsPageStyles.toolIcon}
                  />
                </div>
                <div className={toolsPageStyles.toolTextContainer}>
                  <p className={toolsPageStyles.toolName}>{tool.name}</p>
                  <p className={toolsPageStyles.toolCategory}>{tool.category}</p>
                </div>
              </a>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}