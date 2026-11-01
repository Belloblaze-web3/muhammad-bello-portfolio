import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Circle,
  Code2,
  Edit3,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Plus,
  Sparkles,
  Terminal,
  Trash2,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
};

type Filter = "all" | "active" | "completed";

const starterTasks: Task[] = [
  { id: 1, text: "Polish case study copy", completed: false, createdAt: "Today" },
  { id: 2, text: "Send portfolio to mentor", completed: true, createdAt: "Yesterday" },
  { id: 3, text: "Review accessibility notes", completed: false, createdAt: "Today" },
];

const projects = [
  {
    number: "01",
    title: "Northstar Finance",
    type: "Product design + frontend",
    description:
      "A calmer way for first-time investors to understand their money, with a dashboard that turns dense data into confident next steps.",
    role: "Lead developer",
    stack: "React · TypeScript · D3",
    outcome: "34% more users completed their first learning path.",
    accent: "orange",
  },
  {
    number: "02",
    title: "Citymapper concept",
    type: "UX concept + prototyping",
    description:
      "A transit experience built around the moments between destinations: clearer transfers, better context, less waiting anxiety.",
    role: "UX engineer",
    stack: "Figma · React · Motion",
    outcome: "Testers found routes 2.1× faster in a prototype study.",
    accent: "ink",
  },
  {
    number: "03",
    title: "Field Notes CMS",
    type: "Full-stack web app",
    description:
      "A lightweight publishing system for an independent research studio, designed to keep the editorial voice ahead of the admin layer.",
    role: "Full-stack developer",
    stack: "Next.js · Postgres · Playwright",
    outcome: "Cut article publishing time from 20 minutes to under 5.",
    accent: "sand",
  },
];

const experiences = [
  {
    period: "2024 — now",
    company: "Independent / freelance",
    role: "Frontend developer & designer",
    copy: "Partnering with small teams to turn fuzzy ideas into useful, shippable interfaces. I lead discovery, prototyping, and the details that make products feel finished.",
  },
  {
    period: "2022 — 2024",
    company: "Studio North",
    role: "Product designer",
    copy: "Worked across fintech and culture accounts, translating research into systems that were easier to build, easier to use, and easier to explain.",
  },
  {
    period: "2020 — 2022",
    company: "Brightside Labs",
    role: "Junior web developer",
    copy: "Built responsive marketing sites and internal tools while learning to care equally about semantic HTML, component APIs, and a good handoff.",
  },
];

const writing = [
  { tag: "Process", title: "Designing the handoff, not just the handoff file", date: "6 min read" },
  { tag: "Frontend", title: "What a good empty state is really saying", date: "4 min read" },
  { tag: "Career", title: "The small portfolio details that do the heavy lifting", date: "8 min read" },
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Devfolio home">
      <span className="logo-mark">DV</span>
      <span className="logo-name">devfolio<span>.</span></span>
    </a>
  );
}

function SectionLabel({ children, number }: { children: string; number: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem("devfolio-tasks");
      return stored ? JSON.parse(stored) : starterTasks;
    } catch {
      return starterTasks;
    }
  });
  const [draft, setDraft] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("devfolio-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(
    () => tasks.filter((task) => (filter === "all" ? true : filter === "completed" ? task.completed : !task.completed)),
    [filter, tasks],
  );

  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = tasks.length - completedCount;

  function addTask(event: FormEvent) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setTasks((current) => [
      ...current,
      { id: Date.now(), text, completed: false, createdAt: "Just now" },
    ]);
    setDraft("");
  }

  function toggleTask(id: number) {
    setTasks((current) => current.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }

  function deleteTask(id: number) {
    setTasks((current) => current.filter((task) => task.id !== id));
    if (editingId === id) setEditingId(null);
  }

  function startEditing(task: Task) {
    setEditingId(task.id);
    setEditingText(task.text);
  }

  function saveEdit(id: number) {
    const text = editingText.trim();
    if (!text) return;
    setTasks((current) => current.map((task) => (task.id === id ? { ...task, text } : task)));
    setEditingId(null);
  }

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <button className="mobile-menu-button" type="button" aria-label="Toggle navigation" onClick={() => setMobileMenuOpen((open) => !open)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`main-nav ${mobileMenuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#todo" onClick={() => setMobileMenuOpen(false)}>To-do app</a>
            <a className="nav-contact" href="#contact" onClick={() => setMobileMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Personal portfolio / 2026</p>
            <h1>I build <em>digital products</em> with a sharp point of view.</h1>
            <p className="hero-lede">Hi, I&apos;m Alex Kim — a frontend developer and product thinker who likes turning complex problems into clear, human experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See selected work <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a>
            </div>
            <p className="edit-note"><Sparkles size={14} /> Editable sample content — replace with your details before submission.</p>
          </div>
          <div className="hero-card" aria-label="Profile snapshot">
            <div className="hero-card-top"><span>01 / 04</span><span>AK — 2026</span></div>
            <div className="portrait-block"><span className="portrait-initials">AK</span><span className="portrait-caption">Curious by default.<br />Precise on purpose.</span></div>
            <div className="hero-card-bottom"><span>Based in London / open to remote</span><span className="availability"><span className="availability-dot" /> Available for select projects</span></div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true"><div className="ticker-track"><span>Design with intent</span><i>✳</i><span>Build with care</span><i>✳</i><span>Make it memorable</span><i>✳</i><span>Design with intent</span><i>✳</i><span>Build with care</span><i>✳</i><span>Make it memorable</span></div></div>

        <section className="section container about-section" id="about">
          <SectionLabel number="01" >A little context</SectionLabel>
          <div className="about-grid">
            <h2>Good work lives somewhere between <span>clarity</span> and character.</h2>
            <div className="about-copy"><p>I&apos;m a developer with a designer&apos;s eye and a writer&apos;s habit of asking one more question. I care about systems that are resilient under the hood and obvious to the person using them.</p><p>My ambition is simple: make ambitious digital work feel more considered, more useful, and a little more alive.</p><a className="text-link" href="#contact">More about my approach <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="facts-row"><div><span className="fact-number">05+</span><span className="fact-label">years making for the web</span></div><div><span className="fact-number">18</span><span className="fact-label">products shipped with teams</span></div><div><span className="fact-number">03</span><span className="fact-label">things I&apos;m learning now</span></div></div>
        </section>

        <section className="section container credentials-section">
          <div className="credentials-column"><SectionLabel number="02">Learning in public</SectionLabel><h3>Education &amp;<br /><span>certifications</span></h3></div>
          <div className="credential-list"><div className="credential-item"><div><p className="credential-date">2018 — 2021</p><h4>BA (Hons) Digital Media &amp; Design</h4><p className="credential-place">University of the Arts London</p></div><span className="credential-index">01</span></div><div className="credential-item"><div><p className="credential-date">2023</p><h4>Google UX Design Professional Certificate</h4><p className="credential-place">Coursera / Google</p></div><span className="credential-index">02</span></div><div className="credential-item"><div><p className="credential-date">2024</p><h4>Accessibility for Web Developers</h4><p className="credential-place">The A11y Project</p></div><span className="credential-index">03</span></div></div>
        </section>

        <section className="section work-section" id="work">
          <div className="container"><SectionLabel number="03">Selected work</SectionLabel><div className="work-heading"><h2>Projects with a point<br />to <span>make.</span></h2><p>A selection of coursework, client, and self-directed projects. Each one started with a question worth answering.</p></div><div className="projects-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-meta"><span>{project.number} / 03</span><span>{project.type}</span></div><div className="project-body"><div className="project-title-wrap"><h3>{project.title}</h3><span className="project-arrow"><ArrowUpRight size={22} /></span></div><p className="project-description">{project.description}</p><div className="project-details"><div><span>My role</span><strong>{project.role}</strong></div><div><span>Tools</span><strong>{project.stack}</strong></div><div><span>Outcome</span><strong>{project.outcome}</strong></div></div></div></article>)}</div></div>
        </section>

        <section className="section container capabilities-section" id="skills">
          <SectionLabel number="04">The toolkit</SectionLabel><div className="capabilities-grid"><div><h2>Useful skills,<br /><span>not buzzwords.</span></h2><p className="section-intro">The best tool is the one that lets the idea land. Here&apos;s what I reach for most often — and how I like to work with others.</p></div><div className="skills-list"><div className="skill-group"><div className="skill-heading"><Code2 size={18} /><h3>Technical</h3></div><p>HTML &amp; CSS · JavaScript / TypeScript · React · Next.js · Git &amp; GitHub · REST APIs · Responsive design · Accessibility</p></div><div className="skill-group"><div className="skill-heading"><Layers3 size={18} /><h3>Product &amp; design</h3></div><p>Design systems · Prototyping · User flows · Information architecture · UX writing · Usability testing</p></div><div className="skill-group"><div className="skill-heading"><Terminal size={18} /><h3>How I work</h3></div><p>Clear communication · Facilitation · Documentation · Mentoring · Presenting · Thoughtful collaboration</p></div></div></div>
        </section>

        <section className="section experience-section" id="experience"><div className="container"><SectionLabel number="05">The path so far</SectionLabel><div className="experience-heading"><h2>Experience that<br /><span>keeps moving.</span></h2><p>Different titles, same through-line: make the work clearer for the team and the people it serves.</p></div><div className="timeline">{experiences.map((item) => <div className="timeline-item" key={item.period}><div className="timeline-period">{item.period}</div><div className="timeline-content"><div className="timeline-marker" /><p className="timeline-company">{item.company}</p><h3>{item.role}</h3><p>{item.copy}</p></div></div>)}</div></div></section>

        <section className="section container proof-section"><SectionLabel number="06">Good words</SectionLabel><div className="proof-grid"><div><h2>What collaborators<br /><span>say.</span></h2><p className="edit-note"><Sparkles size={14} /> Sample testimonials — swap for real endorsements when available.</p></div><div className="quote-card"><span className="quote-mark">“</span><blockquote>Alex has the rare ability to zoom out to the big idea and zoom in to the one pixel that makes it feel right. They made our team faster and our product clearer.</blockquote><div className="quote-person"><span className="quote-avatar">JM</span><span><strong>Jordan Malik</strong><small>Product lead, Northstar Finance</small></span></div></div></div></section>

        <section className="section writing-section"><div className="container"><SectionLabel number="07">Notes from the field</SectionLabel><div className="writing-heading"><h2>Writing to<br /><span>think better.</span></h2><a className="text-link" href="#contact">Read all notes <ArrowUpRight size={16} /></a></div><div className="writing-list">{writing.map((item, index) => <a className="writing-item" href="#contact" key={item.title}><span className="writing-number">0{index + 1}</span><div><span className="writing-tag">{item.tag}</span><h3>{item.title}</h3></div><span className="writing-date">{item.date} <ArrowUpRight size={16} /></span></a>)}</div></div></section>

        <section className="section todo-section" id="todo"><div className="container"><div className="todo-intro"><SectionLabel number="08">A functional extra</SectionLabel><h2>Make a list.<br /><span>Make it happen.</span></h2><p>This small to-do app is part of the coursework submission. Add, edit, complete, filter, and delete tasks — your list stays in this browser using local storage.</p></div><div className="todo-card"><div className="todo-card-header"><div><p className="todo-kicker">Personal sprint board</p><h3>Today&apos;s focus <span>{activeCount} active</span></h3></div><div className="todo-progress"><span>{completedCount}/{tasks.length || 0}</span><div className="progress-track"><div style={{ width: `${tasks.length ? (completedCount / tasks.length) * 100 : 0}%` }} /></div></div></div><form className="todo-form" onSubmit={addTask}><input aria-label="New task" placeholder="Add a task to your list..." value={draft} onChange={(event) => setDraft(event.target.value)} /><button className="button button-primary" type="submit"><Plus size={18} /> Add task</button></form><div className="todo-toolbar"><div className="filter-tabs" role="group" aria-label="Filter tasks">{(["all", "active", "completed"] as Filter[]).map((item) => <button type="button" className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)} key={item}>{item[0].toUpperCase() + item.slice(1)}<span>{item === "all" ? tasks.length : item === "active" ? activeCount : completedCount}</span></button>)}</div><span className="storage-note"><CheckCircle2 size={14} /> Saved locally</span></div><div className="task-list">{filteredTasks.length === 0 ? <div className="empty-state"><Circle size={18} /><p>No tasks here yet. Add one above to get moving.</p></div> : filteredTasks.map((task) => <div className={`task-row ${task.completed ? "is-complete" : ""}`} key={task.id}><button className="task-check" type="button" aria-label={task.completed ? `Mark ${task.text} active` : `Complete ${task.text}`} onClick={() => toggleTask(task.id)}>{task.completed ? <Check size={15} /> : null}</button>{editingId === task.id ? <input className="task-edit-input" autoFocus value={editingText} onChange={(event) => setEditingText(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") saveEdit(task.id); if (event.key === "Escape") setEditingId(null); }} onBlur={() => saveEdit(task.id)} aria-label="Edit task" /> : <span className="task-text">{task.text}</span>}<span className="task-date">{task.createdAt}</span><div className="task-actions">{editingId === task.id ? <button type="button" aria-label="Cancel editing" onClick={() => setEditingId(null)}><X size={15} /></button> : <button type="button" aria-label={`Edit ${task.text}`} onClick={() => startEditing(task)}><Edit3 size={15} /></button>}<button type="button" aria-label={`Delete ${task.text}`} onClick={() => deleteTask(task.id)}><Trash2 size={15} /></button></div></div>)}</div></div></div></section>

        <section className="section container achievements-section"><div className="achievement-copy"><SectionLabel number="09">A few milestones</SectionLabel><h2>Small wins<br /><span>add up.</span></h2></div><div className="achievement-list"><div><span>2024</span><p>Shortlisted — Young Digital Talent Awards</p></div><div><span>2023</span><p>Speaker — London Web Performance Meetup</p></div><div><span>2022</span><p>Featured project — Awwwards Honorable Mention</p></div></div></section>

        <section className="contact-section" id="contact"><div className="container contact-inner"><div><SectionLabel number="10">Your turn</SectionLabel><h2>Have a good<br /><em>question?</em></h2><p>I&apos;m always interested in thoughtful collaborations, ambitious side projects, and conversations about making the web feel a little more human.</p></div><div className="contact-links"><a href="mailto:alex.kim@example.com"><span><Mail size={19} /> alex.kim@example.com</span><ArrowUpRight size={20} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><span><Linkedin size={19} /> linkedin.com/in/alexkim</span><ArrowUpRight size={20} /></a><a href="https://github.com" target="_blank" rel="noreferrer"><span><Github size={19} /> github.com/alexkim</span><ArrowUpRight size={20} /></a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><Logo /><span>Built with curiosity &amp; a little bit of CSS.</span><span>© 2026 Alex Kim</span></div></footer>
    </div>
  );
}
