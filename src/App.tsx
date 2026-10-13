import { useState, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode } from "react";

type IconName =
  | "home" | "monitor" | "folder" | "camera" | "book" | "message" | "grid"
  | "cube" | "settings" | "search" | "file" | "globe" | "sparkle" | "brain"
  | "check" | "mic" | "mute" | "stop" | "more" | "paperclip" | "send"
  | "chevron" | "plus" | "activity" | "sun" | "wifi" | "volume";

const paths: Partial<Record<IconName, ReactNode>> = {
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
  monitor: <><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8m-4-4v4"/></>,
  folder: <path d="M3 7h7l2 2h9v10H3zM3 7V5h7l2 2"/>,
  camera: <><rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="4"/><path d="m8 6 1-2h6l1 2"/></>,
  book: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h6"/></>,
  message: <path d="M20 15a7 7 0 0 1-10 5l-6 1 2-5a8 8 0 1 1 14-1Z"/>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  cube: <><path d="m12 2 9 5-9 5-9-5zM3 7v10l9 5 9-5V7M12 12v10"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/></>,
  search: <><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/></>,
  file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
  sparkle: <><path d="m12 2 2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/></>,
  brain: <path d="M9 5a3 3 0 0 0-5 2 3 3 0 0 0 0 5 3 3 0 0 0 3 5h2m6-12a3 3 0 0 1 5 2 3 3 0 0 1 0 5 3 3 0 0 1-3 5h-2M9 3v18m6-18v18M9 9H6m9 3h4M9 17H6m9-10h3"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  mic: <><rect x="8" y="3" width="8" height="13" rx="4"/><path d="M5 12a7 7 0 0 0 14 0M12 19v3M8 22h8"/></>,
  mute: <><path d="M9 9v3a3 3 0 0 0 5 2M16 10V7a4 4 0 0 0-7-2"/><path d="M5 12a7 7 0 0 0 11 6M19 12a7 7 0 0 1-.5 2.6M12 19v3M8 22h8M3 3l18 18"/></>,
  stop: <rect x="6" y="6" width="12" height="12" rx="2"/>,
  more: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
  paperclip: <path d="m9 12 6-6a3 3 0 0 1 4 4l-8 8a5 5 0 0 1-7-7l8-8"/>,
  send: <path d="m3 3 18 9-18 9 4-9zM7 12h14"/>,
  chevron: <path d="m9 6 6 6-6 6"/>,
  plus: <path d="M12 5v14M5 12h14"/>,
  activity: <path d="M3 12h3l2-6 4 12 3-9 2 3h4"/>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M19 5l-1 1M6 18l-1 1"/></>,
  wifi: <><path d="M3 9a14 14 0 0 1 18 0M6 13a9 9 0 0 1 12 0M9 17a4 4 0 0 1 6 0"/><circle cx="12" cy="21" r="1"/></>,
  volume: <><path d="M4 10h4l5-4v12l-5-4H4zM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/></>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Button({ className = "", children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={className} {...props}>{children}</button>;
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />;
}

const navItems: [IconName, string, string][] = [
  ["home", "Home", "Chat with LUCA"],
  ["monitor", "Computer Control", "Apps, windows, automation"],
  ["folder", "Files & Documents", "Browse, open, summarize"],
  ["camera", "Vision (Screen & Camera)", "See and understand"],
  ["book", "Knowledge (RAG)", "Documents & your data"],
  ["message", "WhatsApp", "Messages & calls"],
  ["grid", "Apps", "Launch and manage"],
  ["cube", "Skills & Plugins", "Extensions and tools"],
  ["settings", "Settings", "Models, voice, appearance"],
];

const quickActions: [IconName, string, string][] = [
  ["search", "Search the Web", "Find information"],
  ["file", "Summarize This", "PDF, text, docs"],
  ["monitor", "Control My Computer", "Open apps, automate"],
  ["camera", "Analyze Screen", "Understand what's on it"],
  ["message", "Send WhatsApp", "Message or call"],
];

function Header() {
  return (
    <header className="titlebar">
      <div className="brand">
        <div className="logo">L</div>
        <div><strong>LUCA</strong><small>Last Universal Common Assistant</small></div>
      </div>
      <div className="listen-status"><i /><div><b>Listening</b><small>Ready for your command</small></div></div>
      <Button className="model-select"><span className="model-glyph"><Icon name="brain" size={19}/></span><span><b>GPT-OSS 20B</b><small>Local (Ollama)</small></span><Icon name="chevron" size={15}/></Button>
      <div className="top-tools">
        <div className="tool"><Icon name="wifi"/><small>Online</small></div>
        <div className="tool"><Icon name="volume"/><small>Audio On</small></div>
        <div className="tool"><Icon name="settings"/><small>Settings</small></div>
        <div className="clock"><b>04:42 PM</b><small>Wed, 01 Oct 2026</small></div>
        <div className="greeting"><Icon name="sun"/><small>Evening, Pradeep</small></div>
        <div className="window-controls"><Button aria-label="Minimize">−</Button><Button aria-label="Maximize">□</Button><Button aria-label="Close">×</Button></div>
      </div>
    </header>
  );
}

function LeftSidebar({ active, setActive }: { active: string; setActive: (value: string) => void }) {
  return (
    <aside className="left-sidebar">
      <nav>
        {navItems.map(([icon, label, subtitle]) => (
          <Button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => setActive(label)}>
            <span className="nav-icon"><Icon name={icon} size={25}/></span>
            <span className="nav-copy"><b>{label}</b><small>{subtitle}</small></span>
          </Button>
        ))}
      </nav>
      <div className="privacy"><span className="privacy-dot"/><div><b>Local-first privacy</b><small>Your data stays on device</small></div></div>
    </aside>
  );
}

function QuickActions() {
  return (
    <div className="quick-actions">
      {quickActions.map(([icon, title, subtitle]) => (
        <Button className="quick-card" key={title}>
          <span className="quick-icon"><Icon name={icon}/></span>
          <span><b>{title}</b><small>{subtitle}</small></span>
          <Icon name="chevron" size={15}/>
        </Button>
      ))}
    </div>
  );
}

function Waveform() {
  return <span className="waveform" aria-hidden="true">{[1,2,3,4,5].map((bar) => <i key={bar}/>)}</span>;
}

function Hero({ listening }: { listening: boolean }) {
  return (
    <section className="hero" aria-label="LUCA Central AI Animation">
      <video className="hero-video" src="/luca-central-ai.mp4" autoPlay loop muted playsInline aria-label="LUCA futuristic voice assistant animation"/>
      <div className="hero-shade"/>
      <div className="hero-copy">
        <div className="eyebrow"><span/> PRIVATE • LOCAL • ALWAYS READY</div>
        <div className="hero-title">Good Evening, <em>Pradeep</em></div>
        <p>How was your day? I'm here to help.</p>
      </div>
      <div className="video-ambient" aria-hidden="true"><i/><i/><i/></div>
      <div className="speech-card"><Waveform/><span>You can talk to me naturally in Tamil, English, Hindi, or any language.</span></div>
      <div className={`voice-pill ${listening ? "" : "muted"}`}><Waveform/><div><b>{listening ? "Listening..." : "Microphone muted"}</b><small>{listening ? "Speak naturally... I'm hearing you." : "Select Talk to LUCA to resume"}</small></div></div>
      <div className="video-label"><span/> LIVE AI CORE</div>
    </section>
  );
}

function Conversation() {
  const steps = [
    ["Checking WhatsApp Desktop installation", "Completed", "done"],
    ["Opening WhatsApp Desktop", "In progress", "progress"],
    ["Waiting for application to load", "Pending", "pending"],
    ["Reading recent messages", "Pending", "pending"],
  ];
  return (
    <section className="conversation">
      <div className="messages">
        <div className="message-row"><div className="avatar user">P</div><div><div className="message-meta"><b>You</b><small>04:42 PM</small></div><p>Open WhatsApp Desktop and show my recent messages.</p></div></div>
        <div className="message-row"><div className="avatar luca">L</div><div className="response"><div className="message-meta"><b>LUCA</b><small>04:42 PM</small></div><p>I'll open WhatsApp Desktop and show your recent messages. Let me do this step by step.</p>
          <div className="steps">{steps.map(([task, status, state]) => <div className="step" key={task}><span className={`step-icon ${state}`}>{state === "done" ? <Icon name="check" size={13}/> : ""}</span><span>{task}</span><small>{status}</small></div>)}</div>
        </div></div>
      </div>
      <div className="app-preview">
        <div className="preview-title"><span>Opening WhatsApp Desktop...</span><span>↗ &nbsp; ×</span></div>
        <div className="preview-body"><div className="chat-list">{[1,2,3,4,5].map(n => <i key={n}/>)}</div><div className="whatsapp-mark"><Icon name="message" size={36}/><small>WhatsApp Desktop</small></div></div>
      </div>
    </section>
  );
}

function CommandArea({ listening, setListening }: { listening: boolean; setListening: (v: boolean) => void }) {
  return (
    <section className="command-area">
      <div className="command-input">
        <Button aria-label="Attach file"><Icon name="paperclip"/></Button>
        <Input placeholder="Ask LUCA or give a command..." aria-label="Command"/>
        <Button aria-label="AI options"><Icon name="sparkle"/></Button>
        <Button className="send" aria-label="Send command"><Icon name="send"/></Button>
      </div>
      <div className="voice-controls">
        <Button className="round-control"><span><Icon name="settings"/></span><small>Settings</small></Button>
        <Button className="round-control danger" onClick={() => setListening(false)}><span><Icon name="mute"/></span><small>Mute</small></Button>
        <Button className={`round-control talk ${listening ? "active" : ""}`} onClick={() => setListening(!listening)}><span><Icon name="mic" size={27}/></span><small>Talk to LUCA</small></Button>
        <Button className="round-control"><span><Icon name="stop"/></span><small>Stop</small></Button>
        <Button className="round-control"><span><Icon name="more"/></span><small>More</small></Button>
      </div>
    </section>
  );
}

function Panel({ title, icon, children, action }: { title: string; icon: IconName; children: ReactNode; action?: string }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="side-panel">
      <Button className="panel-heading" onClick={() => setOpen(!open)}><span><Icon name={icon} size={18}/>{title}</span><small>{action || (open ? "⌄" : "›")}</small></Button>
      {open && <div className="panel-content">{children}</div>}
    </section>
  );
}

const tools: [IconName, string, string, string][] = [
  ["sparkle", "Gemini Live", "Cloud AI · Multimodal", "purple"],
  ["brain", "Local AI Models", "GPT-OSS 20B · Qwen3-VL", "violet"],
  ["globe", "Web Search", "Real-time information", "blue"],
  ["monitor", "Computer Control", "Apps, windows, automation", "indigo"],
  ["camera", "Vision & Camera", "Screen, webcam, OCR", "pink"],
];

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <Panel title="AI & Tools" icon="sparkle">
        {tools.map(([icon, title, sub, color], i) => <Button className="tool-row" key={title}><span className={`colored-icon ${color}`}><Icon name={icon}/></span><span><b>{title}</b><small>{sub}</small></span>{i === 0 ? <em>Active</em> : <Icon name="chevron" size={14}/>}</Button>)}
      </Panel>
      <Panel title="Remember" icon="brain">
        <AddInput placeholder="Add a note to remember..."/>
        {[["Appa's birthday","October 15, 2026"],["Project meeting points","Key discussion topics..."],["Car service","November 5, 2026"]].map(([a,b]) => <Button className="memory-row" key={a}><span className="memory-icon"><Icon name="file" size={16}/></span><span><b>{a}</b><small>{b}</small></span><Icon name="chevron" size={13}/></Button>)}
      </Panel>
      <Panel title="To-Do List" icon="check">
        <AddInput placeholder="Add a new task..."/>
        {[["Prepare Q4 presentation","Oct 10",false],["Call Amma","Today",false],["Check cricket match result","Today",true],["Review project document","Tomorrow",false]].map(([a,b,c]) => <div className="todo-row" key={String(a)}><span className={`checkbox ${c ? "checked" : ""}`}>{c ? <Icon name="check" size={11}/> : ""}</span><span>{a}</span><small>{b}</small></div>)}
      </Panel>
      <Panel title="Activity Log" icon="activity" action="Clear">
        {[["04:42 PM","Opening WhatsApp..."],["04:41 PM","Screen captured"],["04:39 PM","Chrome opened"],["04:35 PM","Voice command processed"]].map(([a,b]) => <div className="activity-row" key={a}><small>{a}</small><span>{b}</span></div>)}
      </Panel>
    </aside>
  );
}

function AddInput({ placeholder }: { placeholder: string }) {
  return <div className="add-input"><Input placeholder={placeholder}/><Button aria-label="Add"><Icon name="plus" size={17}/></Button></div>;
}

function MiniAssistant() {
  const controls: [IconName, string, string][] = [
    ["mic", "Listening", "active"],
    ["mute", "Mute", "danger"],
    ["monitor", "Screen", ""],
    ["camera", "Camera", ""],
    ["grid", "Open", ""],
  ];
  return (
    <section className="mini-frame">
      <div className="mini-top">
        <div className="mini-brand"><div className="logo">L</div><b>LUCA</b><span/><strong>Listening</strong></div>
        <div className="mini-window"><span>−</span><span>×</span></div>
      </div>
      <div className="mini-controls">
        {controls.map(([icon, label, state]) => <Button className={`mini-control ${state}`} key={label}><span><Icon name={icon}/></span><small>{label}</small></Button>)}
      </div>
    </section>
  );
}

function ComponentShowcase() {
  return (
    <section className="component-frame">
      <div className="showcase-title"><Icon name="sparkle"/><div><b>LUCA Component Showcase</b><small>Reusable controls and system states</small></div></div>
      <div className="showcase-grid">
        <div className="showcase-group">
          <span className="group-label">BUTTONS</span>
          <div className="button-row">
            <Button className="demo-button primary"><Icon name="send" size={17}/>Primary</Button>
            <Button className="demo-button secondary"><Icon name="cube" size={17}/>Secondary</Button>
            <Button className="demo-button success"><Icon name="check" size={17}/>Success</Button>
            <Button className="demo-button danger-demo"><Icon name="stop" size={17}/>Danger</Button>
            <Button className="demo-button warning"><span>!</span>Warning</Button>
          </div>
        </div>
        <div className="showcase-group">
          <span className="group-label">INPUTS & STATES</span>
          <div className="state-row">
            <label className="demo-toggle"><Input type="checkbox" defaultChecked/><span/><small>Toggle ON</small></label>
            <label className="demo-toggle"><Input type="checkbox"/><span/><small>Toggle OFF</small></label>
            <Button className="demo-dropdown">GPT-OSS 20B <span>⌄</span></Button>
            <div className="demo-search"><Icon name="search" size={17}/><Input placeholder="Search LUCA..."/></div>
            <span className="demo-status"><i/>Listening</span>
          </div>
        </div>
        <div className="showcase-group">
          <span className="group-label">ICON & VOICE CONTROLS</span>
          <div className="icon-demo-row">
            {(["home","monitor","folder","camera","message","grid","settings"] as IconName[]).map(icon => <Button key={icon}><Icon name={icon}/></Button>)}
            <Button className="showcase-mic"><Icon name="mic" size={25}/></Button>
            <Waveform/>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [active, setActive] = useState("Home");
  const [listening, setListening] = useState(true);
  return (
    <>
      <main className="app-shell">
        <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
        <div className="window">
          <Header/>
          <div className="dashboard-grid">
            <LeftSidebar active={active} setActive={setActive}/>
            <div className="workspace">
              {active !== "Home" && <div className="section-notice"><Icon name="sparkle"/><span><b>{active}</b> workspace selected</span><Button onClick={() => setActive("Home")}>Return Home</Button></div>}
              <QuickActions/>
              <Hero listening={listening}/>
              <Conversation/>
              <CommandArea listening={listening} setListening={setListening}/>
            </div>
            <RightSidebar/>
          </div>
        </div>
      </main>
      <section className="additional-frames">
        <div className="frames-heading"><span>02</span><div><b>LUCA Companion Interfaces</b><small>Additional frames using the core dashboard system</small></div></div>
        <div className="frames-layout">
          <div><span className="frame-label">FRAME A · LUCA MINI ASSISTANT</span><MiniAssistant/></div>
          <div><span className="frame-label">FRAME B · LUCA COMPONENT SHOWCASE</span><ComponentShowcase/></div>
        </div>
      </section>
    </>
  );
}

export default App;
