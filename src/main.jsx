import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Eye,
  FileText,
  GitBranch,
  Lock,
  Menu,
  PauseCircle,
  Shield,
  Users,
  Workflow,
  X,
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['product', 'Product'],
  ['technical', 'Technical'],
  ['use-cases', 'Use Cases'],
  ['proof', 'Proof Path'],
  ['contact', 'Contact'],
];

const decisions = ['proceed', 'shrink', 'ask', 'pause', 'observe', 'soften', 'withdraw', 'abort', 'request_human_help', 'no_action'];

const runtimeChain = [
  'Input Snapshot',
  'Translator Lift',
  'Read Room Becoming',
  'Context Grammar Switch',
  'Compound Risk',
  'Select Restraint Decision',
  'Translator Ground',
  'Trace Summary',
];

const tests = [
  {
    scenario: 'Nighttime Wandering',
    risk: 'HIGH',
    blocked: 'Physical approach, close-contact assist',
    allowed: 'Ask from distance, observe, safe pause, request human help if unresolved',
    result: 'ASK / speak_only / extra_gentle / no movement',
  },
  {
    scenario: 'Medication Handoff Pending Confirmation',
    risk: 'HIGH',
    blocked: 'Medication handoff until identity and verbal confirmation',
    allowed: 'Ask for confirmation, safe pause, request human help if confirmation fails',
    result: 'ASK / speak_only / identity + verbal confirmation',
  },
  {
    scenario: 'Sudden Guest at Door',
    risk: 'HIGH',
    blocked: 'Open door, greet unknown visitor directly, cross household boundary',
    allowed: 'Ask elder, observe, no action, request human help if unresolved',
    result: 'ASK / speak_only / elder approval required',
  },
  {
    scenario: 'Clean Water Request',
    risk: 'LOW',
    blocked: 'None',
    allowed: 'Proceed with normal assistance',
    result: 'PROCEED / assist / movement allowed',
  },
  {
    scenario: 'Unauthorized Medication Access',
    risk: 'BLOCKED',
    blocked: 'Medication handoff, physical delivery',
    allowed: 'Safe pause, request human help, no action',
    result: 'ABORT / safe_pause / request_human_help',
  },
];

function scrollToId(id) {
  const node = document.getElementById(id);
  if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" onClick={() => scrollToId('top')} aria-label="Go to top">
          <span className="brand-mark"><Shield size={22} /></span>
          <span>
            <strong>Harbor™ Robotics</strong>
            <small>Upstream governance for humanoid robots</small>
          </span>
        </button>

        <nav className="desktop-nav">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => scrollToId(id)}>{label}</button>
          ))}
          <button className="primary small" onClick={() => scrollToId('contact')}>Request Briefing</button>
        </nav>

        <button className="mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => { setOpen(false); scrollToId(id); }}>{label}</button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="container hero-grid">
        <div className="hero-copy fade-in">
          <div className="eyebrow"><PauseCircle size={17} /> Motion should happen only when it belongs.</div>
          <h1>The human-room governance layer for humanoid robots.</h1>
          <p>
            Harbor™ sits upstream of robot action selection. It helps an embodied AI decide whether to proceed, pause, ask, soften, shrink, observe, withdraw, abort, request human help, or do nothing before motion enters a human space.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={() => scrollToId('product')}>See Product Overview <ArrowRight size={18} /></button>
            <button className="secondary" onClick={() => scrollToId('technical')}>View Technical Architecture</button>
          </div>
        </div>

        <div className="action-card fade-in delayed">
          <div className="card-heading">
            <div>
              <span>Action Gate</span>
              <h2>Before the robot moves</h2>
            </div>
            <Activity size={32} />
          </div>
          <div className="mini-stack">
            <div><small>Robot proposes</small><strong>walk to door and open it</strong></div>
            <div><small>Harbor reads</small><strong>consent, privacy, timing, policy, room becoming</strong></div>
            <div><small>Harbor returns</small><strong>ask from distance; do not open door</strong></div>
          </div>
          <p className="note">
            Harbor does not replace perception, planning, locomotion, manipulation, or safety-certified emergency systems. It adds an upstream restraint layer before ordinary policy execution.
          </p>
        </div>
      </div>
    </section>
  );
}

function Product() {
  const cards = [
    [Workflow, 'Interface Layer', 'Receives robot task snapshots and proposed plans. Returns gate decisions, command constraints, and trace summaries.'],
    [Shield, 'Restraint-First Design', 'Makes pause, ask, observe, no_action, and request_human_help valid robot outcomes instead of failures.'],
    [FileText, 'Reviewable Decisions', 'Creates human-readable traces that explain what was blocked, what remained allowed, and why motion did or did not belong.'],
  ];

  return (
    <section id="product" className="section band">
      <div className="container">
        <div className="section-copy">
          <span className="label">Product</span>
          <h2>Harbor™ Upstream Governance Layer</h2>
          <p>
            Harbor is a decision layer for robots that will share space with people. It evaluates whether a proposed action belongs in the current human-room context and returns a smaller, safer, more legible action path when needed.
          </p>
        </div>
        <div className="card-grid three">
          {cards.map(([Icon, title, text]) => (
            <article className="info-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="decision-panel">
          <div>
            <h3>The product question</h3>
            <p>Most robot stacks ask, “Can the robot complete the task?” Harbor adds the upstream question: “Does motion belong in this moment?”</p>
          </div>
          <div className="decision-grid">
            {decisions.map((decision) => <span key={decision}>{decision}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Technical() {
  return (
    <section id="technical" className="section">
      <div className="container technical-grid">
        <div className="section-copy">
          <span className="label">Technical Architecture</span>
          <h2>A lightweight gate between world model and policy selection.</h2>
          <p>
            Harbor can be evaluated as a schema, reference implementation, scenario suite, and audit trace format. It is designed to interface with existing robot stacks rather than replace them.
          </p>
        </div>
        <div className="runtime-card">
          <div className="runtime-title"><Cpu /> Runtime Chain v0.3</div>
          <ol>
            {runtimeChain.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
      </div>
      <div className="container code-grid">
        <div className="code-card">
          <h3><GitBranch /> Input Snapshot</h3>
          <pre>{`{
  "task_goal": "answer front door",
  "proposed_plan": "walk to door and open it",
  "location_context": "home / kitchen",
  "actors_present": ["elder_resident"],
  "privacy_sensitivity": "medium",
  "consent_state": "not_requested",
  "policy_boundary_context": {
    "door_access_rule": "ask resident first"
  },
  "uncertainty_level": 0.32
}`}</pre>
        </div>
        <div className="code-card">
          <h3><Lock /> Gate Output</h3>
          <pre>{`{
  "decision": "ask",
  "command": "speak_only",
  "movement_allowed": false,
  "blocked_actions": ["open_door"],
  "allowed_alternatives": ["ask_elder", "observe"],
  "confirmation_required": "elder_approval",
  "style": "extra_gentle",
  "trace": "Door access requires resident consent."
}`}</pre>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    [Users, 'Home Humanoids', 'Helps a robot decide when to move, when to ask, when to stay still, and when no action is the right action in kitchens, living rooms, doors, and bedrooms.'],
    [Shield, 'Elder Care & Companion Robotics', 'Adds consent, privacy, timing, softness, and safe-distance behavior before assistance, reminders, nighttime guidance, or care-sensitive actions.'],
    [Eye, 'Human-Robot Interaction Safety', 'Turns task-first behavior into room-aware behavior by checking proximity, startle risk, policy boundaries, uncertainty, and smallest helpful action.'],
    [Code2, 'Engineering Evaluation Layer', 'Provides testable input snapshots, gate decisions, command constraints, and trace summaries without replacing the robot’s existing autonomy stack.'],
  ];

  return (
    <section id="use-cases" className="section band">
      <div className="container">
        <div className="section-copy">
          <span className="label">Use Cases</span>
          <h2>Built for robots entering real human rooms.</h2>
          <p>Harbor is aimed at the gap between laboratory task completion and trusted embodied presence around people.</p>
        </div>
        <div className="card-grid four">
          {cases.map(([Icon, title, text]) => (
            <article className="info-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="proof" className="section">
      <div className="container proof-grid">
        <div className="section-copy sticky-copy">
          <span className="label">Proof Path</span>
          <h2>Scenario tests before real-world deployment.</h2>
          <p>
            Harbor’s early proof path is a structured test suite: input snapshots, expected risk, blocked actions, allowed alternatives, gate decisions, command packets, and traces.
          </p>
          <div className="proof-note"><strong>Core proof</strong><br />Harbor restrains when motion does not belong and proceeds when motion does belong.</div>
        </div>
        <div className="test-list">
          {tests.map((test) => (
            <article className="test-card" key={test.scenario}>
              <div className="test-head">
                <h3>{test.scenario}</h3>
                <span>Risk: {test.risk}</span>
              </div>
              <div className="test-cols">
                <div><small>Blocked</small><p>{test.blocked}</p></div>
                <div><small>Allowed</small><p>{test.allowed}</p></div>
                <div><small>Result</small><p>{test.result}</p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const principles = [
    'Harbor is not anti-action. It allows motion when the moment supports motion.',
    'Restraint is not paralysis. Blocked motion can still become smaller safe presence.',
    'Trust can soften style, but it must not override consent, privacy, policy, or safety.',
  ];

  return (
    <section className="section band slim">
      <div className="container card-grid three">
        {principles.map((text) => (
          <article className="principle" key={text}>
            <CheckCircle2 />
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const interfacePacketUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=wtrashrecords@gmail.com&su=Harbor%20Robotics%20Interface%20Packet%20Request&body=Hi%20Donnie%2C%0A%0AI%20would%20like%20to%20request%20the%20Harbor%20Robotics%20Interface%20Packet.%0A%0AThank%20you.';
  const technicalOnePagerUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=wtrashrecords@gmail.com&su=Harbor%20Robotics%20Technical%20One-Pager%20Request&body=Hi%20Donnie%2C%0A%0AI%20would%20like%20to%20request%20the%20Harbor%20Robotics%20technical%20one-pager.%0A%0AThank%20you.';

  return (
    <section id="contact" className="section contact">
      <div className="container narrow center">
        <span className="label">Contact</span>
        <h2>Evaluate Harbor with your robotics team.</h2>
        <p>
          Request the Harbor Interface Packet: engineer brief, schema, reference gate, test scenarios, and trace examples for humanoid robotics, elder-care robotics, or human-robot interaction review.
        </p>
        <div className="hero-actions center-actions">
          <a className="primary" href={interfacePacketUrl} target="_blank" rel="noreferrer">
            Request Harbor Interface Packet <ArrowRight size={18} />
          </a>
          <a className="secondary" href={technicalOnePagerUrl} target="_blank" rel="noreferrer">
            Request Technical One-Pager
          </a>
        </div>
        <p style={{ marginTop: '1.5rem', color: '#cbd5e1' }}>
          Or email directly:{' '}
          <a href="mailto:wtrashrecords@gmail.com" style={{ color: '#67e8f9', fontWeight: 700 }}>
            wtrashrecords@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Product />
        <Technical />
        <UseCases />
        <Proof />
        <Principles />
        <Contact />
      </main>
      <footer>
        <div className="container footer-inner">
          <span>© {year} Harbor™ Robotics. A Donnie Whitbeck / Upstream AI Perspective Lab™ initiative.</span>
          <span><FileText size={16} /> Concept draft for review, demo, and technical briefing.</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
