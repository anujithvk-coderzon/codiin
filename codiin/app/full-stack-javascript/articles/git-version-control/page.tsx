import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Git Version Control: Essential Developer Tool",
  description: "Learn Git version control - commits, branches, merge, pull requests, and collaboration workflows. Understand why version control is essential for developers.",
  keywords: ["Git tutorial", "version control", "GitHub", "branches", "commits", "merge", "pull requests", "collaboration"],
  alternates: { canonical: "/full-stack-javascript/articles/git-version-control" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/git-version-control",
    title: "Git Version Control: Essential Developer Tool",
    description: "Master Git for tracking code changes and team collaboration.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Git Version Control: Essential Developer Tool",
  "description": "Complete guide to Git version control for developers",
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

export default function FullStackJavascriptGitVersionControlPage() {
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
              <Link href="/full-stack-javascript">
                {"Full Stack JavaScript"}
              </Link>
              {" / "}
              <span>
                {"Git Version Control"}
              </span>
            </div>
            <h1>
              {"Git Version Control"}
            </h1>
            <p className="article-subtitle">
              {"Essential Developer Tool"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"20 min read"}
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
                  {"Git is a distributed version control system that tracks changes in your code over time. It's like a time machine for your project - you can save snapshots (commits) of your code and go back to any point in history."}
                </p>
                <p>
                  {"Think of Git as Google Docs version history, but much more powerful. Instead of just \"Save\" and \"Undo\", you get complete control over your code's history, can work on multiple features simultaneously, and collaborate with teams without overwriting each other's work."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Git Matters"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Track Changes:"}
                    </strong>
                    {" Know exactly what changed, when, and why"}
                  </li>
                  <li>
                    <strong>
                      {"Undo Mistakes:"}
                    </strong>
                    {" Easily revert to any previous version of your code"}
                  </li>
                  <li>
                    <strong>
                      {"Collaborate:"}
                    </strong>
                    {" Multiple developers can work on the same project without conflicts"}
                  </li>
                  <li>
                    <strong>
                      {"Branching:"}
                    </strong>
                    {" Work on new features without affecting the main code"}
                  </li>
                  <li>
                    <strong>
                      {"Backup:"}
                    </strong>
                    {" Your code is stored remotely (GitHub/GitLab), never lose work"}
                  </li>
                  <li>
                    <strong>
                      {"Industry Standard:"}
                    </strong>
                    {" Every tech company uses Git, essential skill"}
                  </li>
                  <li>
                    <strong>
                      {"Open Source:"}
                    </strong>
                    {" Contribute to millions of projects on GitHub"}
                  </li>
                  <li>
                    <strong>
                      {"Portfolio:"}
                    </strong>
                    {" Your GitHub profile is your developer resume"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Git vs GitHub: Understanding the Difference"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Git (Local)
- Software installed on your computer
- Tracks changes locally
- Works offline
- Created by Linus Torvalds (Linux creator)

GitHub (Remote)
- Cloud platform for hosting Git repositories
- Share code with others
- Collaboration features (pull requests, issues)
- Social coding (follow developers, star projects)
- Owned by Microsoft

Analogy:
Git = Microsoft Word (software on your computer)
GitHub = Google Drive (cloud storage and sharing)

Alternatives to GitHub:
- GitLab (open source, self-hosted option)
- Bitbucket (free private repos)
- Azure DevOps (Microsoft)
- Gitea (self-hosted)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts: Repository, Commits, Branches"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Repository (Repo)
- Folder containing your project + Git tracking
- Local repo: On your computer
- Remote repo: On GitHub/GitLab

Commit
- Snapshot of your code at a specific point
- Like saving a game checkpoint
- Contains: changes, message, author, timestamp

Branch
- Independent line of development
- Like parallel universes of your code
- Default branch: main (or master)

Working Directory → Staging Area → Repository

┌─────────────────┐
│ Working Dir     │  Your files (make changes here)
│ (modified)      │
└────────┬────────┘
         │ git add
         ↓
┌─────────────────┐
│ Staging Area    │  Files ready to commit
│ (staged)        │
└────────┬────────┘
         │ git commit
         ↓
┌─────────────────┐
│ Repository      │  Permanent history
│ (.git folder)   │
└─────────────────┘

Commit History (timeline):
main: A ← B ← C ← D (latest)
      ↓
   feature: E ← F (working on new feature)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Essential Git Commands"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// SETUP (one-time configuration)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list  // View settings

// CREATING REPOSITORIES

// Create new repository
git init
→ Creates .git folder in current directory

// Clone existing repository
git clone https://github.com/user/repo.git
→ Downloads remote repo to your computer

// BASIC WORKFLOW

// Check status
git status
→ See modified files, staged changes

// Stage files (prepare for commit)
git add index.html        // Add specific file
git add .                 // Add all changes
git add *.js              // Add all .js files

// Commit changes (save snapshot)
git commit -m "Add login feature"
→ Save staged changes with message

// Shortcut: stage and commit
git commit -am "Fix bug in header"
→ Only works for modified files (not new files)

// View commit history
git log
git log --oneline         // Compact view
git log --graph --all     // Visual tree

// WORKING WITH REMOTES

// View remote repositories
git remote -v

// Add remote
git remote add origin https://github.com/user/repo.git

// Push changes to remote
git push origin main
→ Upload commits to GitHub

// Pull changes from remote
git pull origin main
→ Download and merge remote changes

// Fetch (download without merging)
git fetch origin

// UNDOING CHANGES

// Discard changes in working directory
git checkout -- file.txt
→ Restore file to last commit

// Unstage file (keep changes)
git reset file.txt
→ Remove from staging area

// Undo last commit (keep changes)
git reset --soft HEAD~1
→ Moves back 1 commit, changes stay staged

// Undo last commit (discard changes)
git reset --hard HEAD~1
→ WARNING: Permanently deletes changes!

// Revert commit (safe way)
git revert abc123
→ Creates new commit that undoes previous commit`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Branching: Parallel Development"}
                </h2>
                <p>
                  {"Branches allow you to work on features independently without affecting the main codebase. Think of them as alternate timelines."}
                </p>
                <div className="code-block">
                  <pre><code>{`// VIEW BRANCHES
git branch              // List local branches
git branch -a           // List all (local + remote)

// CREATE BRANCH
git branch feature-login
→ Creates new branch (doesn't switch to it)

git checkout -b feature-login
→ Create and switch to new branch (shortcut)

git switch -c feature-login
→ Modern way (Git 2.23+)

// SWITCH BRANCHES
git checkout main
git switch main         // Modern way

// MERGE BRANCHES
// Scenario: Merge feature into main

git checkout main       // Switch to main
git merge feature-login // Merge feature into main

// DELETE BRANCH
git branch -d feature-login      // Delete (safe, checks if merged)
git branch -D feature-login      // Force delete

// TYPICAL WORKFLOW

1. Create feature branch from main
   git checkout main
   git pull origin main
   git checkout -b feature-payment

2. Work on feature (make commits)
   git add .
   git commit -m "Add payment integration"

3. Push feature branch to remote
   git push origin feature-payment

4. Create Pull Request on GitHub
   (Review → Approve → Merge)

5. Delete feature branch
   git branch -d feature-payment

// BRANCH NAMING CONVENTIONS
feature/user-authentication
bugfix/header-alignment
hotfix/security-patch
release/v1.2.0`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Merge Conflicts: Resolution Guide"}
                </h2>
                <p>
                  {"Merge conflicts occur when Git can't automatically merge changes because the same lines were modified in both branches."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Conflict example
git merge feature-branch
→ CONFLICT (content): Merge conflict in index.html
→ Automatic merge failed; fix conflicts and then commit

// Conflicted file looks like this:
<<<<<<< HEAD (current branch)
<h1>Welcome to Our Site</h1>
=======
<h1>Welcome to My Website</h1>
>>>>>>> feature-branch

// How to resolve:

1. Open the conflicted file
2. Decide which version to keep (or combine)
3. Remove conflict markers (<<<, ===, >>>)
4. Save the file
5. Stage and commit

// After fixing:
git add index.html
git commit -m "Resolve merge conflict in header"

// Abort merge (go back)
git merge --abort

// PREVENTING CONFLICTS

1. Pull often
   git pull origin main

2. Keep branches small and short-lived
   Merge frequently

3. Communicate with team
   Don't work on same files simultaneously

4. Use .gitignore
   Don't track generated files (node_modules, .env)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"GitHub Workflow: Pull Requests"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// FORKING WORKFLOW (Open Source)

1. Fork repository on GitHub
   → Creates your own copy

2. Clone your fork
   git clone https://github.com/YOUR-USERNAME/repo.git

3. Add upstream remote
   git remote add upstream https://github.com/ORIGINAL/repo.git

4. Create feature branch
   git checkout -b fix-typo

5. Make changes and commit
   git add .
   git commit -m "Fix typo in README"

6. Push to your fork
   git push origin fix-typo

7. Create Pull Request on GitHub
   → Compare: ORIGINAL:main ← YOUR-FORK:fix-typo

8. Wait for review and approval

9. After merge, sync your fork
   git checkout main
   git pull upstream main
   git push origin main

// BRANCH WORKFLOW (Team Projects)

1. Clone repository
   git clone https://github.com/company/project.git

2. Create feature branch
   git checkout -b feature-search

3. Work and commit
   git add .
   git commit -m "Add search functionality"

4. Push to remote
   git push origin feature-search

5. Create Pull Request
   → Compare: main ← feature-search
   → Add description, screenshots, tests

6. Code Review
   → Team reviews your code
   → Request changes or approve

7. Merge Pull Request
   → Squash and merge (clean history)
   → Merge commit (keep all commits)
   → Rebase and merge (linear history)

8. Delete branch
   git branch -d feature-search
   git push origin --delete feature-search

// PULL REQUEST BEST PRACTICES
- Small, focused changes (easier to review)
- Clear, descriptive title
- Detailed description (what, why)
- Link related issues
- Add screenshots for UI changes
- Write tests
- Keep commits clean and meaningful`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Git Ignore: What Not to Track"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// .gitignore file (place in root directory)
// Tell Git which files to ignore

# Dependencies
node_modules/
vendor/

# Environment variables
.env
.env.local
config.local.js

# Build outputs
dist/
build/
*.min.js
*.min.css

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Database
*.sqlite
*.db

# Temporary files
*.tmp
temp/

// Example .gitignore for Node.js project
node_modules/
.env
dist/
.DS_Store
*.log

// How to use:
1. Create .gitignore in project root
2. Add patterns for files to ignore
3. Commit .gitignore
   git add .gitignore
   git commit -m "Add gitignore"

// Already tracked files?
// Remove from Git but keep locally
git rm --cached .env

// Global .gitignore (for all projects)
git config --global core.excludesfile ~/.gitignore_global`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Git Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Commit often:"}
                    </strong>
                    {" Small, focused commits are better than large ones"}
                  </li>
                  <li>
                    <strong>
                      {"Write good commit messages:"}
                    </strong>
                    {" \"Fix login bug\" not \"fixes\""}
                  </li>
                  <li>
                    <strong>
                      {"Pull before you push:"}
                    </strong>
                    {" Always sync with remote first"}
                  </li>
                  <li>
                    <strong>
                      {"Use branches:"}
                    </strong>
                    {" Never work directly on main"}
                  </li>
                  <li>
                    <strong>
                      {"Review before committing:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"git diff"}
                    </code>
                    {" to check changes"}
                  </li>
                  <li>
                    <strong>
                      {"Don't commit secrets:"}
                    </strong>
                    {" Use .env files and .gitignore"}
                  </li>
                  <li>
                    <strong>
                      {"Keep commits atomic:"}
                    </strong>
                    {" One feature/fix per commit"}
                  </li>
                  <li>
                    <strong>
                      {"Use meaningful branch names:"}
                    </strong>
                    {" feature/user-auth not feature1"}
                  </li>
                  <li>
                    <strong>
                      {"Delete merged branches:"}
                    </strong>
                    {" Keep repository clean"}
                  </li>
                  <li>
                    <strong>
                      {"Learn to resolve conflicts:"}
                    </strong>
                    {" Essential team skill"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Git Workflows"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// DAILY WORKFLOW

// Morning - Start work
git checkout main
git pull origin main
git checkout -b feature-new-button

// During day - Save work
git add .
git commit -m "Add button component"
git push origin feature-new-button

// End of day - Push changes
git add .
git commit -m "Style button and add tests"
git push origin feature-new-button

// Next day - Continue work
git checkout feature-new-button
git pull origin main    // Get latest main changes
git merge main          // Merge into your branch
// Continue working...

// Feature complete - Create PR
// On GitHub: Create Pull Request
// After approval and merge:
git checkout main
git pull origin main
git branch -d feature-new-button

// EMERGENCY FIX (Hotfix)

git checkout main
git pull origin main
git checkout -b hotfix-critical-bug
// Fix the bug
git add .
git commit -m "Fix critical bug in payment"
git push origin hotfix-critical-bug
// Create PR, merge immediately
git checkout main
git pull origin main

// STASHING (Save work temporarily)

// You're working on feature but need to switch branches
git stash              // Save changes temporarily
git checkout main      // Switch branch
// Do urgent work
git checkout feature   // Back to feature
git stash pop          // Restore saved changes

// View stashes
git stash list

// Apply specific stash
git stash apply stash@{0}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Git Commit Message Guidelines"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// GOOD COMMIT MESSAGES

feat: Add user authentication with JWT
fix: Resolve memory leak in image upload
docs: Update API documentation for v2
style: Format code with Prettier
refactor: Simplify payment processing logic
test: Add unit tests for user service
chore: Update dependencies

// BAD COMMIT MESSAGES

update
fix
changes
asdasd
WIP (Work In Progress)

// CONVENTIONAL COMMITS FORMAT

<type>(<scope>): <subject>

<body>

<footer>

Example:
feat(auth): Add password reset functionality

Implement password reset via email with token validation.
Token expires after 1 hour.

Closes #123

Types:
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Formatting (no code change)
refactor: Code restructuring
test:     Adding tests
chore:    Build/config changes

// COMMIT MESSAGE TIPS

✓ Use imperative mood: "Add feature" not "Added feature"
✓ First line under 50 characters
✓ Add detailed description if needed
✓ Reference issue numbers: "Fixes #123"
✗ Don't commit commented code
✗ Don't commit WIP (work in progress)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"GitHub Profile: Your Developer Portfolio"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Your GitHub profile is your resume

What recruiters look at:
1. Contribution graph (green squares)
2. Pinned repositories (showcase best work)
3. README profile (introduce yourself)
4. Commit frequency and consistency
5. Code quality in repos
6. Documentation (README files)
7. Open source contributions

How to build a strong profile:

1. Create README.md for each project
   - What it does
   - Technologies used
   - How to install/run
   - Screenshots/demo
   - Live link

2. Pin your best 6 repositories
   - Show variety of skills
   - Complete, polished projects

3. Create profile README
   - Create repo: username/username
   - Add README.md with:
     * Bio/Introduction
     * Skills/Technologies
     * Projects
     * Contact info
     * GitHub stats badges

4. Contribute consistently
   - Better 1 commit/day than 50 once/month
   - Shows dedication and habit

5. Contribute to open source
   - Find "good first issue" labels
   - Documentation improvements
   - Bug fixes

6. Add topics/tags to repos
   - javascript, react, nodejs
   - Makes projects discoverable

7. Write good documentation
   - Clear README
   - Code comments
   - API documentation`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Git for Professional Development"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program includes Git from basics to advanced workflows. Learn industry-standard practices for version control and collaboration."}
                </p>
                <Link href="/full-stack-javascript" className="btn btn-primary">
                  {"Explore JavaScript Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-javascript/articles/javascript-fundamentals" className="related-article-card">
                    <h4>
                      {"JavaScript Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Start with JavaScript basics"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/react" className="related-article-card">
                    <h4>
                      {"React.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Build frontend with React"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/nodejs" className="related-article-card">
                    <h4>
                      {"Node.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Backend with JavaScript"}
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
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
                  </Link>
                </li>
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Git version control."} />
    </>
  );
}
