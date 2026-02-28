<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Omar Muhammad Sabry – Full-Stack Developer</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600;700&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --primary: #00d4ff;
      --secondary: #ff5733;
      --accent: #a855f7;
      --bg: #0a0e1a;
      --card: #0f1628;
      --card2: #131b2e;
      --text: #e2e8f0;
      --muted: #94a3b8;
      --glow: 0 0 20px rgba(0,212,255,0.4);
      --glow2: 0 0 20px rgba(168,85,247,0.4);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Exo 2', sans-serif;
      overflow-x: hidden;
      direction: ltr;
    }

    /* ── Animated background ── */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background:
        radial-gradient(ellipse at 20% 20%, rgba(0,212,255,0.07) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(168,85,247,0.07) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(255,87,51,0.04) 0%, transparent 60%);
      pointer-events: none;
      z-index: 0;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
    }

    /* ── HERO ── */
    .hero {
      text-align: center;
      padding: 80px 24px 60px;
      position: relative;
    }

    .hero-badge {
      display: inline-block;
      background: linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15));
      border: 1px solid rgba(0,212,255,0.3);
      border-radius: 50px;
      padding: 8px 24px;
      font-size: 13px;
      color: var(--primary);
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 32px;
      animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
      0%,100% { box-shadow: 0 0 10px rgba(0,212,255,0.2); }
      50% { box-shadow: 0 0 30px rgba(0,212,255,0.5); }
    }

    .hero-avatar {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 3px solid var(--primary);
      box-shadow: var(--glow), 0 0 60px rgba(0,212,255,0.2);
      margin: 0 auto 28px;
      background: linear-gradient(135deg, #1e3a5f, #2d1b69);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0%,100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }

    .hero-name {
      font-family: 'Orbitron', monospace;
      font-size: clamp(28px, 5vw, 52px);
      font-weight: 900;
      background: linear-gradient(135deg, var(--primary), var(--accent), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 12px;
      line-height: 1.2;
    }

    .hero-title {
      font-size: 18px;
      color: var(--muted);
      margin-bottom: 24px;
      font-weight: 300;
      letter-spacing: 1px;
    }

    .hero-title span { color: var(--primary); font-weight: 600; }

    .typing-line {
      font-family: 'Orbitron', monospace;
      font-size: 14px;
      color: var(--accent);
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 40px;
      min-height: 22px;
    }

    /* ── Buttons ── */
    .btn-group {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 60px;
    }

    .btn {
      padding: 12px 28px;
      border-radius: 8px;
      font-family: 'Exo 2', sans-serif;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s;
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--primary), var(--accent));
      color: #fff;
      box-shadow: 0 4px 20px rgba(0,212,255,0.3);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(0,212,255,0.5);
    }

    .btn-outline {
      background: transparent;
      border: 1px solid rgba(0,212,255,0.4);
      color: var(--primary);
    }

    .btn-outline:hover {
      background: rgba(0,212,255,0.1);
      transform: translateY(-3px);
    }

    /* ── Section ── */
    .section { padding: 60px 0; }

    .section-title {
      font-family: 'Orbitron', monospace;
      font-size: clamp(20px, 3vw, 28px);
      font-weight: 700;
      text-align: center;
      margin-bottom: 48px;
      position: relative;
      color: var(--text);
    }

    .section-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      margin: 12px auto 0;
      border-radius: 2px;
    }

    .section-title .icon { margin-right: 10px; }

    /* ── Stats ── */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 60px;
    }

    .stat-card {
      background: var(--card);
      border: 1px solid rgba(0,212,255,0.15);
      border-radius: 16px;
      padding: 28px 20px;
      text-align: center;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }

    .stat-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
    }

    .stat-card:hover {
      transform: translateY(-6px);
      border-color: var(--primary);
      box-shadow: var(--glow);
    }

    .stat-number {
      font-family: 'Orbitron', monospace;
      font-size: 36px;
      font-weight: 900;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-size: 13px;
      color: var(--muted);
      margin-top: 6px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* ── About ── */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 0;
    }

    @media (max-width: 700px) { .about-grid { grid-template-columns: 1fr; } }

    .about-card {
      background: var(--card);
      border: 1px solid rgba(168,85,247,0.15);
      border-radius: 16px;
      padding: 28px;
      transition: all 0.3s;
    }

    .about-card:hover {
      border-color: var(--accent);
      box-shadow: var(--glow2);
      transform: translateY(-4px);
    }

    .about-card h3 {
      font-family: 'Orbitron', monospace;
      font-size: 16px;
      color: var(--accent);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .about-card p, .about-card li {
      font-size: 14px;
      color: var(--muted);
      line-height: 1.8;
    }

    .about-card ul { padding-left: 20px; }
    .about-card li { margin-bottom: 6px; }
    .about-card li span { color: var(--primary); font-weight: 600; }

    /* ── Tech Stack ── */
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
    }

    .tech-card {
      background: var(--card);
      border: 1px solid rgba(0,212,255,0.1);
      border-radius: 16px;
      padding: 28px 16px;
      text-align: center;
      transition: all 0.3s;
      cursor: default;
    }

    .tech-card:hover {
      border-color: var(--primary);
      box-shadow: var(--glow);
      transform: translateY(-8px) scale(1.03);
    }

    .tech-icon { font-size: 44px; margin-bottom: 12px; display: block; }

    .tech-name {
      font-family: 'Orbitron', monospace;
      font-size: 13px;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 6px;
    }

    .tech-desc { font-size: 11px; color: var(--muted); line-height: 1.5; }

    .tech-bar-wrap {
      margin-top: 12px;
      background: rgba(255,255,255,0.05);
      border-radius: 10px;
      height: 4px;
      overflow: hidden;
    }

    .tech-bar {
      height: 100%;
      border-radius: 10px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      animation: barGrow 1.5s ease forwards;
    }

    @keyframes barGrow { from { width: 0%; } }

    /* ── Projects ── */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    .project-card {
      background: var(--card);
      border: 1px solid rgba(0,212,255,0.1);
      border-radius: 16px;
      padding: 28px;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }

    .project-card::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      transform: scaleX(0);
      transition: transform 0.3s;
    }

    .project-card:hover::after { transform: scaleX(1); }

    .project-card:hover {
      border-color: var(--primary);
      box-shadow: var(--glow);
      transform: translateY(-6px);
    }

    .project-icon { font-size: 36px; margin-bottom: 14px; }

    .project-title {
      font-family: 'Orbitron', monospace;
      font-size: 15px;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 8px;
    }

    .project-desc {
      font-size: 13px;
      color: var(--muted);
      margin-bottom: 16px;
      line-height: 1.6;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 18px;
    }

    .tag {
      background: rgba(0,212,255,0.1);
      border: 1px solid rgba(0,212,255,0.25);
      color: var(--primary);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
    }

    .project-link {
      color: var(--primary);
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: gap 0.3s;
    }

    .project-link:hover { gap: 12px; }

    /* ── GitHub Stats Images ── */
    .github-stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      padding: 20px 0;
    }

    .github-stats img {
      max-width: 100%;
      border-radius: 16px;
      border: 1px solid rgba(0,212,255,0.15);
      transition: all 0.3s;
    }

    .github-stats img:hover {
      border-color: var(--primary);
      box-shadow: var(--glow);
      transform: translateY(-4px);
    }

    .stats-row {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }

    .stats-row img { flex: 1; min-width: 250px; }

    /* ── Snake ── */
    .snake-wrap {
      background: var(--card);
      border: 1px solid rgba(0,212,255,0.15);
      border-radius: 16px;
      padding: 32px;
      text-align: center;
      overflow: hidden;
    }

    .snake-wrap img { max-width: 100%; border-radius: 8px; }

    /* ── Connect ── */
    .connect-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
    }

    .social-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 24px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.3s;
      border: 1px solid transparent;
    }

    .social-btn:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.4);
    }

    .social-btn.linkedin { background: rgba(0,119,181,0.2); border-color: #0077B5; color: #0077B5; }
    .social-btn.github   { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.3); color: #fff; }
    .social-btn.gmail    { background: rgba(209,72,54,0.15); border-color: #D14836; color: #D14836; }
    .social-btn.whatsapp { background: rgba(37,211,102,0.15); border-color: #25D366; color: #25D366; }

    .social-icon { font-size: 20px; }

    /* ── Quote ── */
    .quote-section {
      background: var(--card);
      border: 1px solid rgba(168,85,247,0.2);
      border-radius: 16px;
      padding: 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .quote-section::before {
      content: '"';
      position: absolute;
      top: -20px;
      left: 20px;
      font-size: 120px;
      color: rgba(168,85,247,0.1);
      font-family: serif;
      line-height: 1;
    }

    .quote-text {
      font-size: 20px;
      font-style: italic;
      color: var(--text);
      margin-bottom: 16px;
      line-height: 1.6;
    }

    .quote-author {
      font-size: 14px;
      color: var(--accent);
      font-family: 'Orbitron', monospace;
      font-weight: 600;
    }

    /* ── Footer ── */
    .footer {
      text-align: center;
      padding: 48px 24px;
      border-top: 1px solid rgba(0,212,255,0.1);
      margin-top: 60px;
    }

    .footer-name {
      font-family: 'Orbitron', monospace;
      font-size: 18px;
      font-weight: 700;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 12px;
    }

    .footer p { font-size: 13px; color: var(--muted); }

    /* ── Visitor badge ── */
    .visitor-wrap {
      text-align: center;
      margin: 32px 0;
    }

    .visitor-wrap img { border-radius: 8px; }

    /* ── Divider ── */
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent);
      margin: 0;
    }

    /* ── Scroll animations ── */
    .fade-in {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── Responsive ── */
    @media (max-width: 600px) {
      .tech-grid { grid-template-columns: repeat(2, 1fr); }
      .projects-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<!-- ══════════════════════════════════════════
     HERO
══════════════════════════════════════════ -->
<section class="hero">
  <div class="hero-badge">🔥 Available for work &amp; collaboration</div>
  <div class="hero-avatar">👨‍💻</div>
  <h1 class="hero-name">Omar Muhammad Sabry</h1>
  <p class="hero-title"><span>Full-Stack Developer</span> · Cybersecurity Learner · Tech Enthusiast</p>
  <p class="typing-line" id="typing"></p>

  <div class="btn-group">
    <a class="btn btn-primary" href="https://novds.com" target="_blank">🌐 Nova Digital Solutions</a>
    <a class="btn btn-outline" href="https://github.com/eng-omar12" target="_blank">⭐ GitHub Profile</a>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════════════════════════════════════
     STATS
══════════════════════════════════════════ -->
<section class="section container fade-in">
  <h2 class="section-title"><span class="icon">📊</span>At a Glance</h2>
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-number" data-target="9">0</div>
      <div class="stat-label">Live Projects</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" data-target="5">0</div>
      <div class="stat-label">Tech Stacks</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" data-target="2">0</div>
      <div class="stat-label">Years Experience</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" data-target="100" data-suffix="%">0</div>
      <div class="stat-label">Passion for Code</div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════════════════════════════════════
     ABOUT
══════════════════════════════════════════ -->
<section class="section container fade-in">
  <h2 class="section-title"><span class="icon">🚀</span>About Me</h2>
  <div class="about-grid">
    <div class="about-card">
      <h3>💡 What I Do</h3>
      <p>I build <strong style="color:var(--primary)">modern, interactive, and scalable</strong> web applications from front to back. I love crafting experiences that are both beautiful and performant — clean code is my art form.</p>
    </div>
    <div class="about-card">
      <h3>🌱 Currently Learning</h3>
      <ul>
        <li><span>React & Next.js</span> – advanced patterns &amp; SSR</li>
        <li><span>Cybersecurity</span> – ethical hacking &amp; secure coding</li>
        <li><span>API Design</span> – REST &amp; GraphQL architecture</li>
        <li><span>DevOps basics</span> – CI/CD &amp; cloud deployment</li>
      </ul>
    </div>
    <div class="about-card">
      <h3>🏆 Mission</h3>
      <p>Think big, innovate, and make the world better through technology. Every line of code I write is a step toward building solutions that genuinely help people.</p>
    </div>
    <div class="about-card">
      <h3>☕ Fun Fact</h3>
      <p>The secret formula: <strong style="color:var(--secondary)">Coding + Coffee = Productivity</strong>. I debug best late at night when the world is quiet and the ideas are loudest.</p>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════════════════════════════════════
     TECH STACK
══════════════════════════════════════════ -->
<section class="section container fade-in">
  <h2 class="section-title"><span class="icon">🛠️</span>Tech Stack</h2>
  <div class="tech-grid">
    <div class="tech-card">
      <span class="tech-icon">🌐</span>
      <div class="tech-name">HTML5</div>
      <div class="tech-desc">Semantic &amp; Accessible Markup</div>
      <div class="tech-bar-wrap"><div class="tech-bar" style="width:95%"></div></div>
    </div>
    <div class="tech-card">
      <span class="tech-icon">🎨</span>
      <div class="tech-name">CSS3</div>
      <div class="tech-desc">Responsive Layouts &amp; Animations</div>
      <div class="tech-bar-wrap"><div class="tech-bar" style="width:92%"></div></div>
    </div>
    <div class="tech-card">
      <span class="tech-icon">⚡</span>
      <div class="tech-name">JavaScript</div>
      <div class="tech-desc">ES6+, DOM &amp; API Integration</div>
      <div class="tech-bar-wrap"><div class="tech-bar" style="width:88%"></div></div>
    </div>
    <div class="tech-card">
      <span class="tech-icon">⚛️</span>
      <div class="tech-name">React.js</div>
      <div class="tech-desc">Hooks, Context &amp; Components</div>
      <div class="tech-bar-wrap"><div class="tech-bar" style="width:75%"></div></div>
    </div>
    <div class="tech-card">
      <span class="tech-icon">🐘</span>
      <div class="tech-name">PHP</div>
      <div class="tech-desc">Backend Logic &amp; Security</div>
      <div class="tech-bar-wrap"><div class="tech-bar" style="width:82%"></div></div>
    </div>
    <div class="tech-card">
      <span class="tech-icon">🗄️</span>
      <div class="tech-name">MySQL</div>
      <div class="tech-desc">Database Design &amp; Queries</div>
      <div class="tech-bar-wrap"><div class="tech-bar" style="width:80%"></div></div>
    </div>
    <div class="tech-card">
      <span class="tech-icon">🔐</span>
      <div class="tech-name">Cybersec</div>
      <div class="tech-desc">Secure Coding &amp; Pentesting</div>
      <div class="tech-bar-wrap"><div class="tech-bar" style="width:55%"></div></div>
    </div>
    <div class="tech-card">
      <span class="tech-icon">🔧</span>
      <div class="tech-name">Git &amp; GitHub</div>
      <div class="tech-desc">Version Control &amp; Collaboration</div>
      <div class="tech-bar-wrap"><div class="tech-bar" style="width:85%"></div></div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════════════════════════════════════
     PROJECTS
══════════════════════════════════════════ -->
<section class="section container fade-in">
  <h2 class="section-title"><span class="icon">💻</span>Live Projects</h2>
  <div class="projects-grid">

    <div class="project-card">
      <div class="project-icon">💻</div>
      <div class="project-title">Nova Digital Solutions</div>
      <div class="project-desc">A professional digital agency platform offering modern web solutions, branding, and tech consulting services.</div>
      <div class="project-tags"><span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">JS</span><span class="tag">PHP</span></div>
      <a class="project-link" href="https://novds.com" target="_blank">Visit Site →</a>
    </div>

    <div class="project-card">
      <div class="project-icon">⚕️</div>
      <div class="project-title">Pharma Hub</div>
      <div class="project-desc">A comprehensive pharmaceutical platform built for managing drug information and pharmacy workflows.</div>
      <div class="project-tags"><span class="tag">PHP</span><span class="tag">MySQL</span><span class="tag">Bootstrap</span></div>
      <a class="project-link" href="https://platforms.free.nf" target="_blank">Visit Site →</a>
    </div>

    <div class="project-card">
      <div class="project-icon">🎓</div>
      <div class="project-title">Educational Platform</div>
      <div class="project-desc">An interactive e-learning system with course management, student tracking, and content delivery.</div>
      <div class="project-tags"><span class="tag">PHP</span><span class="tag">JS</span><span class="tag">MySQL</span></div>
      <a class="project-link" href="https://platform-t.free.nf" target="_blank">Visit Site →</a>
    </div>

    <div class="project-card">
      <div class="project-icon">🛠️</div>
      <div class="project-title">Cashier System</div>
      <div class="project-desc">A full-featured point-of-sale cashier system for managing transactions, inventory, and receipts.</div>
      <div class="project-tags"><span class="tag">PHP</span><span class="tag">MySQL</span><span class="tag">JS</span></div>
      <a class="project-link" href="https://cashier.free.nf" target="_blank">Visit Site →</a>
    </div>

    <div class="project-card">
      <div class="project-icon">📖</div>
      <div class="project-title">NewsHub Pro</div>
      <div class="project-desc">A dynamic news aggregation platform with real-time updates, categories, and rich article layouts.</div>
      <div class="project-tags"><span class="tag">PHP</span><span class="tag">JS</span><span class="tag">API</span></div>
      <a class="project-link" href="https://newsit.free.nf/" target="_blank">Visit Site →</a>
    </div>

    <div class="project-card">
      <div class="project-icon">🔎</div>
      <div class="project-title">SEOra</div>
      <div class="project-desc">An advanced SEO analysis tool that helps websites rank better with actionable insights and audits.</div>
      <div class="project-tags"><span class="tag">React</span><span class="tag">Node</span><span class="tag">SEO</span></div>
      <a class="project-link" href="https://seora.pro/" target="_blank">Visit Site →</a>
    </div>

    <div class="project-card">
      <div class="project-icon">💻</div>
      <div class="project-title">CodeCraft Pro</div>
      <div class="project-desc">A developer-focused platform with coding tools, snippet management, and interactive challenges.</div>
      <div class="project-tags"><span class="tag">React</span><span class="tag">JS</span><span class="tag">CSS3</span></div>
      <a class="project-link" href="https://codecpro.netlify.app" target="_blank">Visit Site →</a>
    </div>

    <div class="project-card">
      <div class="project-icon">🧥</div>
      <div class="project-title">Jacket Store</div>
      <div class="project-desc">A sleek e-commerce storefront for fashion jackets with filtering, cart, and smooth UI animations.</div>
      <div class="project-tags"><span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">JS</span></div>
      <a class="project-link" href="https://jacstor.netlify.app" target="_blank">Visit Site →</a>
    </div>

    <div class="project-card">
      <div class="project-icon">🌌</div>
      <div class="project-title">Space Project</div>
      <div class="project-desc">An immersive space-themed interactive experience showcasing CSS animations and creative design.</div>
      <div class="project-tags"><span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">JS</span></div>
      <a class="project-link" href="http://spacepr.netlify.app" target="_blank">Visit Site →</a>
    </div>

  </div>
</section>

<div class="divider"></div>

<!-- ══════════════════════════════════════════
     GITHUB STATS
══════════════════════════════════════════ -->
<section class="section container fade-in">
  <h2 class="section-title"><span class="icon">📈</span>GitHub Stats</h2>
  <div class="github-stats">
    <div class="stats-row">
      <img
        src="https://github-readme-stats-rho-rust-73.vercel.app/api?username=eng-omar12&show_icons=true&theme=tokyonight&count_private=true&hide_border=true&bg_color=0f1628&title_color=00d4ff&icon_color=a855f7&text_color=e2e8f0"
        alt="GitHub Stats"
        onerror="this.src='https://github-readme-stats.vercel.app/api?username=eng-omar12&show_icons=true&theme=tokyonight&count_private=true&hide_border=true'"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=eng-omar12&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f1628&title_color=00d4ff&text_color=e2e8f0"
        alt="Top Languages"
      />
    </div>
    <img
      src="https://github-readme-streak-stats.herokuapp.com?user=eng-omar12&theme=tokyonight&hide_border=true&background=0f1628&stroke=00d4ff&ring=a855f7&fire=ff5733&currStreakLabel=00d4ff"
      alt="GitHub Streak"
      style="max-width:600px; width:100%"
    />
  </div>
</section>

<div class="divider"></div>

<!-- ══════════════════════════════════════════
     CONTRIBUTION SNAKE
══════════════════════════════════════════ -->
<section class="section container fade-in">
  <h2 class="section-title"><span class="icon">🐍</span>Contribution Snake</h2>
  <div class="snake-wrap">
    <picture>
      <source media="(prefers-color-scheme: dark)"
        srcset="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake-dark.svg" />
      <source media="(prefers-color-scheme: light)"
        srcset="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake.svg" />
      <img
        alt="GitHub Contribution Snake"
        src="https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake-dark.svg"
        style="max-width:100%; border-radius:8px;"
      />
    </picture>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════════════════════════════════════
     QUOTE
══════════════════════════════════════════ -->
<section class="section container fade-in">
  <div class="quote-section">
    <p class="quote-text">"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."</p>
    <p class="quote-author">— Albert Einstein</p>
  </div>
</section>

<div class="divider"></div>

<!-- ══════════════════════════════════════════
     VISITOR COUNT
══════════════════════════════════════════ -->
<div class="visitor-wrap container fade-in">
  <p style="font-size:13px; color:var(--muted); margin-bottom:12px; font-family:'Orbitron',monospace; letter-spacing:2px;">👀 PROFILE VISITORS</p>
  <img src="https://komarev.com/ghpvc/?username=eng-omar12&style=for-the-badge&color=blueviolet&label=VISITORS" alt="Profile Views"/>
</div>

<div class="divider" style="margin-top:40px;"></div>

<!-- ══════════════════════════════════════════
     CONNECT
══════════════════════════════════════════ -->
<section class="section container fade-in">
  <h2 class="section-title"><span class="icon">🌍</span>Connect with Me</h2>
  <div class="connect-grid">
    <a class="social-btn linkedin" href="https://www.linkedin.com/in/omar-muhammad-sabry-92a3982b0" target="_blank">
      <span class="social-icon">💼</span> LinkedIn
    </a>
    <a class="social-btn github" href="https://github.com/eng-omar12" target="_blank">
      <span class="social-icon">🐙</span> GitHub
    </a>
    <a class="social-btn gmail" href="mailto:mrmhmdsbryb@gmail.com">
      <span class="social-icon">📧</span> Gmail
    </a>
    <a class="social-btn whatsapp" href="https://wa.me/201224267594" target="_blank">
      <span class="social-icon">💬</span> WhatsApp
    </a>
  </div>
</section>

<!-- ══════════════════════════════════════════
     FOOTER
══════════════════════════════════════════ -->
<footer class="footer">
  <div class="footer-name">Omar Muhammad Sabry</div>
  <p>Crafted with ❤️ &amp; 🔥 · Full-Stack Developer · Egypt 🇪🇬</p>
  <p style="margin-top:8px; font-size:12px; color:#475569;">⭐ Think big, innovate, and make the world better</p>
</footer>

<!-- ══════════════════════════════════════════
     SCRIPTS
══════════════════════════════════════════ -->
<script>
  /* ── Typing Animation ── */
  const phrases = [
    "🚀 Building the Future, One Line at a Time",
    "💻 Full-Stack Developer & Problem Solver",
    "🔐 Cybersecurity Learner",
    "☕ Coding + Coffee = Productivity",
    "🌐 Open to Collaboration & Innovation"
  ];
  let pi = 0, ci = 0, deleting = false;
  const el = document.getElementById('typing');

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 40 : 60);
  }
  type();

  /* ── Counter Animation ── */
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 40);
  }

  /* ── Scroll Observer ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counters when stats section appears
        entry.target.querySelectorAll('[data-target]').forEach(el => {
          const target = parseInt(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
        });
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
</script>

</body>
</html>
