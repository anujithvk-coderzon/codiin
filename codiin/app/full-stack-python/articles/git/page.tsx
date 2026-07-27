import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Git for Beginners: Complete Guide",
  description: "Learn Git fundamentals - version control for developers. Master essential Git commands, branching, merging, and collaboration workflows.",
  keywords: ["Git tutorial", "Git for beginners", "version control", "Git commands", "GitHub", "branching", "merging", "Git workflow"],
  alternates: { canonical: "/full-stack-python/articles/git" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/git",
    title: "Git: Version Control for Developers",
    description: "Master Git for effective version control and collaboration.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Git: Version Control for Developers",
  "description": "Complete guide to Git version control",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-24",
  "dateModified": "2024-12-24"
} as const;

export default function FullStackPythonGitPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="article-hero">
          <div className="container">
            <div className="article-breadcrumb">
              <Link href="/">
                {"Home"}
              </Link>
              {" / "}
              <Link href="/full-stack-python">
                {"Full Stack Python"}
              </Link>
              {" / "}
              <span>
                {"Git"}
              </span>
            </div>
            <h1>
              {"Git"}
            </h1>
            <p className="article-subtitle">
              {"Version Control for Every Developer"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"18 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Git?"}
                </h2>
                <p>
                  {"Git is a distributed version control system that tracks changes in your code over time. It allows you to save snapshots of your project, collaborate with others, and revert to previous versions if something goes wrong."}
                </p>
                <p>
                  {"Think of Git like a time machine for your code. Every time you save (commit), you create a checkpoint you can return to at any time."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Git?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Track changes:"}
                    </strong>
                    {" See exactly what changed, when, and by whom"}
                  </li>
                  <li>
                    <strong>
                      {"Undo mistakes:"}
                    </strong>
                    {" Revert to any previous state"}
                  </li>
                  <li>
                    <strong>
                      {"Collaborate:"}
                    </strong>
                    {" Work with others without overwriting each other's work"}
                  </li>
                  <li>
                    <strong>
                      {"Branches:"}
                    </strong>
                    {" Experiment safely without affecting main code"}
                  </li>
                  <li>
                    <strong>
                      {"Backup:"}
                    </strong>
                    {" Your code is stored in multiple places"}
                  </li>
                  <li>
                    <strong>
                      {"Industry standard:"}
                    </strong>
                    {" Every developer needs to know Git"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Git
# Windows: Download from git-scm.com
# Mac: brew install git
# Linux: sudo apt install git

# Configure Git (one-time setup)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Create a new repository
mkdir my-project
cd my-project
git init

# Or clone an existing repository
git clone https://github.com/user/repo.git`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Basic Git Workflow"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────┐    git add    ┌─────────────┐   git commit   ┌─────────────┐
│  Working    │ ────────────> │   Staging   │ ─────────────> │ Repository  │
│  Directory  │               │    Area     │                │  (History)  │
└─────────────┘               └─────────────┘                └─────────────┘

1. You modify files in your working directory
2. You stage changes you want to commit (git add)
3. You commit staged changes to history (git commit)
4. You push commits to remote (git push)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential Commands"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Check status of your files
git status

# Stage files for commit
git add file.py           # Add specific file
git add .                  # Add all changes
git add -p                 # Add interactively

# Commit changes
git commit -m "Add user authentication"

# View commit history
git log                    # Full history
git log --oneline          # Compact view
git log --graph            # Show branch structure

# See what changed
git diff                   # Unstaged changes
git diff --staged          # Staged changes
git diff HEAD~1            # Compare with previous commit

# Undo changes
git checkout -- file.py    # Discard changes to file
git reset HEAD file.py     # Unstage a file
git reset --hard HEAD~1    # Undo last commit (careful!)

# Work with remote
git remote add origin https://github.com/user/repo.git
git push -u origin main    # Push to remote
git pull                   # Get latest from remote
git fetch                  # Download without merging`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Branching"}
                </h2>
                <p>
                  {"Branches let you work on features without affecting the main code."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Create and switch to a new branch
git branch feature-login     # Create branch
git checkout feature-login   # Switch to branch
# Or in one command:
git checkout -b feature-login

# List branches
git branch                   # Local branches
git branch -a                # All branches (including remote)

# Switch between branches
git checkout main
git checkout feature-login

# Merge a branch into current branch
git checkout main
git merge feature-login

# Delete a branch
git branch -d feature-login  # Safe delete (merged only)
git branch -D feature-login  # Force delete

# Typical workflow
git checkout -b feature-x    # Create feature branch
# ... make changes ...
git add .
git commit -m "Implement feature X"
git push -u origin feature-x # Push branch
# Create Pull Request on GitHub
# After merge, clean up:
git checkout main
git pull
git branch -d feature-x`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Merging and Conflicts"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Merge another branch into current
git merge feature-branch

# If there are conflicts, Git will tell you
# Open the file and look for conflict markers:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> feature-branch

# Resolve by editing the file, then:
git add resolved-file.py
git commit -m "Resolve merge conflict"

# Alternatively, use a merge tool
git mergetool

# Abort a merge if it's too messy
git merge --abort`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Scenarios"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Oops, I committed to the wrong branch
git checkout correct-branch
git cherry-pick <commit-hash>
git checkout wrong-branch
git reset --hard HEAD~1

# I need to update my branch with latest main
git checkout my-feature
git rebase main
# Or merge:
git merge main

# I need to save my work but not commit
git stash                    # Save changes
git stash list               # See stashed changes
git stash pop                # Apply and remove stash
git stash apply              # Apply but keep stash

# I made a typo in my last commit message
git commit --amend -m "Fixed message"

# I forgot to add a file to my last commit
git add forgotten-file.py
git commit --amend --no-edit

# I need to undo a pushed commit
git revert <commit-hash>     # Creates new commit that undoes changes`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Git with GitHub"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Fork a repository on GitHub, then:
git clone https://github.com/your-username/repo.git
cd repo

# Add upstream remote to get updates from original
git remote add upstream https://github.com/original/repo.git

# Keep your fork updated
git fetch upstream
git checkout main
git merge upstream/main
git push

# Create a pull request workflow
git checkout -b fix-bug
# ... make changes ...
git push -u origin fix-bug
# Go to GitHub and create Pull Request`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {".gitignore"}
                </h2>
                <p>
                  {"Tell Git which files to ignore:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# .gitignore for Python projects
__pycache__/
*.py[cod]
*$py.class
.Python
venv/
env/
.env
*.egg-info/
dist/
build/

# IDE
.vscode/
.idea/
*.swp

# Testing
.coverage
htmlcov/
.pytest_cache/

# Local settings
*.local
config.local.py`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Commit often:"}
                    </strong>
                    {" Small, focused commits are easier to understand and revert"}
                  </li>
                  <li>
                    <strong>
                      {"Write good messages:"}
                    </strong>
                    {" Explain why, not just what"}
                  </li>
                  <li>
                    <strong>
                      {"Use branches:"}
                    </strong>
                    {" Never commit directly to main"}
                  </li>
                  <li>
                    <strong>
                      {"Pull before push:"}
                    </strong>
                    {" Get latest changes first"}
                  </li>
                  <li>
                    <strong>
                      {"Review your changes:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"git diff"}
                    </code>
                    {" before committing"}
                  </li>
                  <li>
                    <strong>
                      {"Don't commit secrets:"}
                    </strong>
                    {" Use .gitignore for .env files"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Good commit messages
git commit -m "Add password validation to login form"
git commit -m "Fix #123: Handle empty user input"

# Bad commit messages
git commit -m "Fix bug"
git commit -m "Update"
git commit -m "asdfasdf"`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Git with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers Git workflows and collaboration. Learn professional version control practices with personalized guidance."}
                </p>
                <Link href="/full-stack-python" className="btn btn-primary">
                  {"Explore Full Stack Python Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-python/articles/github-actions" className="related-article-card">
                    <h4>
                      {"GitHub Actions"}
                    </h4>
                    {" "}
                    <p>
                      {"Automate with CI/CD"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/cicd" className="related-article-card">
                    <h4>
                      {"CI/CD"}
                    </h4>
                    {" "}
                    <p>
                      {"Continuous integration"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/devops-concepts" className="related-article-card">
                    <h4>
                      {"DevOps"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern development practices"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Connect"}
              </h4>
              <ul>
                <li>
                  <a href="mailto:contact@codiin.com">
                    {"contact@codiin.com"}
                  </a>
                </li>
                <li>
                  <a href="tel:+918301890158">
                    {"+91 83018 90158"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
            <div className="footer-legal">
              <Link href="/privacy-policy">
                {"Privacy Policy"}
              </Link>
              <Link href="/terms-of-service">
                {"Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Git."} />
    </>
  );
}
