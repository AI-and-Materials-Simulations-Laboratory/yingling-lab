// ============================================================
// Y-AIMS LAB — AI + Molecules + Materials Physics Background
// Three interwoven layers:
//   1. NEURAL NETWORK  — pulsing AI nodes + synaptic connections
//   2. MOLECULAR       — atoms with correct CPK colors + bond angles
//   3. FORCE FIELD     — flowing gradient streamlines (MD sim feel)
// NCSU brand palette throughout
// ============================================================

(function () {
  'use strict';

  // ── Palette ───────────────────────────────────────────────
  const RED    = [204,  0,   0];
  const RED2   = [153,  0,   0];
  const TEAL   = [ 66,126,147];
  const OLIVE  = [111,125, 28];
  const INDIGO = [ 65, 86,161];
  const AMBER  = [250,200,  0];
  const WHITE  = [255,255,255];

  // CPK-inspired atom colors
  const CPK = {
    C:  [100,100,100], N:  [ 48, 80,248], O:  [255, 13, 13],
    H:  [255,255,255], S:  [255,200, 50], P:  [255,128,  0],
    Fe: [224,102, 51], Si: [240,200,160], Au: [255,209, 35],
    Cl: [ 31,240, 31], Ca: [ 61,255,  0], Na: [171, 92,242],
  };

  function rgba(arr, a) { return `rgba(${arr[0]},${arr[1]},${arr[2]},${a})`; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function rand(min, max) { return min + Math.random() * (max - min); }

  // ── Main class ────────────────────────────────────────────
  class AIMSBackground {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx    = canvas.getContext('2d');
      this.dpr    = Math.min(window.devicePixelRatio || 1, 2);
      this.mouse  = { x: -9999, y: -9999 };
      this.t      = 0;

      // Layer pools
      this.aiNodes     = [];
      this.molecules   = [];
      this.fieldLines  = [];

      this._resize();
      this._build();
      this._bindEvents();
      this._tick();
    }

    // ── Resize ──────────────────────────────────────────────
    _resize() {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      this.W = rect.width  || window.innerWidth;
      this.H = rect.height || window.innerHeight;
      this.canvas.width  = this.W * this.dpr;
      this.canvas.height = this.H * this.dpr;
      this.canvas.style.width  = this.W + 'px';
      this.canvas.style.height = this.H + 'px';
      this.ctx.scale(this.dpr, this.dpr);
    }

    // ── Build all layer objects ──────────────────────────────
    _build() {
      this.aiNodes    = [];
      this.molecules  = [];
      this.fieldLines = [];

      const W = this.W, H = this.H;
      const area = W * H;

      // ── LAYER 1: AI / Neural nodes ──────────────────────
      // Two types: regular neurons + "activated" glowing hubs
      const aiCount = Math.min(55, Math.floor(area / 16000));
      for (let i = 0; i < aiCount; i++) {
        const isHub = i < Math.floor(aiCount * 0.18);
        const color = isHub ? RED : (Math.random() < 0.5 ? INDIGO : TEAL);
        const spd   = rand(0.08, 0.2);
        const angle = rand(0, Math.PI * 2);
        this.aiNodes.push({
          x: rand(0, W), y: rand(0, H),
          vx: Math.cos(angle) * spd, vy: Math.sin(angle) * spd,
          r:  isHub ? rand(4, 7) : rand(2, 4),
          color, isHub,
          pulse: rand(0, Math.PI * 2),
          pulseSpd: rand(0.012, 0.028),
          alpha: rand(0.35, 0.7),
          // signal: travelling dot along synapse
          signalT: rand(0, 1),
          signalTarget: null,
        });
      }

      // ── LAYER 2: Molecules ───────────────────────────────
      // Small pre-defined molecule shapes drifting through the scene
      const MOLECULE_TEMPLATES = [
        // Benzene-ish ring (6-membered)
        { name: 'benzene', atoms: _hexRing(6, 18, ['C','C','C','C','C','C']),
          bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]], doubleBonds: [[0,1],[2,3],[4,5]] },
        // Water
        { name: 'water',  atoms: [{s:'O',dx:0,dy:0},{s:'H',dx:-14,dy:10},{s:'H',dx:14,dy:10}],
          bonds: [[0,1],[0,2]], doubleBonds: [] },
        // CO2
        { name: 'co2',    atoms: [{s:'C',dx:0,dy:0},{s:'O',dx:-20,dy:0},{s:'O',dx:20,dy:0}],
          bonds: [[0,1],[0,2]], doubleBonds: [[0,1],[0,2]] },
        // Methane-ish tetrahedral projection
        { name: 'methane', atoms: [{s:'C',dx:0,dy:0},{s:'H',dx:0,dy:-16},{s:'H',dx:14,dy:9},{s:'H',dx:-14,dy:9},{s:'H',dx:0,dy:18}],
          bonds: [[0,1],[0,2],[0,3],[0,4]], doubleBonds: [] },
        // Phosphate (P + 4 O)
        { name: 'phosphate', atoms: [{s:'P',dx:0,dy:0},{s:'O',dx:0,dy:-18},{s:'O',dx:18,dy:8},{s:'O',dx:-18,dy:8},{s:'O',dx:0,dy:18}],
          bonds: [[0,1],[0,2],[0,3],[0,4]], doubleBonds: [[0,1]] },
        // Iron cluster (Fe-S)
        { name: 'fes', atoms: [{s:'Fe',dx:0,dy:0},{s:'S',dx:16,dy:0},{s:'Fe',dx:32,dy:0},{s:'S',dx:16,dy:16}],
          bonds: [[0,1],[1,2],[0,3],[3,2]], doubleBonds: [] },
        // Silicon chain
        { name: 'si',  atoms: [{s:'Si',dx:0,dy:0},{s:'Si',dx:22,dy:0},{s:'Si',dx:44,dy:0}],
          bonds: [[0,1],[1,2]], doubleBonds: [] },
        // Gold nano fragment
        { name: 'au', atoms: _hexRing(6, 14, Array(6).fill('Au')),
          bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]], doubleBonds: [] },
      ];

      const molCount = Math.min(18, Math.floor(area / 50000));
      for (let i = 0; i < molCount; i++) {
        const tpl  = MOLECULE_TEMPLATES[i % MOLECULE_TEMPLATES.length];
        const spd  = rand(0.04, 0.12);
        const angle = rand(0, Math.PI * 2);
        const rot  = rand(0, Math.PI * 2);
        const rotSpd = rand(-0.003, 0.003);
        this.molecules.push({
          x: rand(0, W), y: rand(0, H),
          vx: Math.cos(angle) * spd, vy: Math.sin(angle) * spd,
          rot, rotSpd,
          alpha: rand(0.25, 0.55),
          tpl,
          scale: rand(0.7, 1.3),
          pulse: rand(0, Math.PI * 2),
          pulseSpd: rand(0.008, 0.018),
        });
      }

      // ── LAYER 3: Force-field / MD streamlines ────────────
      // Bezier curves that undulate — simulate vector field / potential energy surface
      const lineCount = Math.min(22, Math.floor(area / 30000));
      for (let i = 0; i < lineCount; i++) {
        const color = [RED2, TEAL, INDIGO, OLIVE, AMBER][Math.floor(Math.random() * 5)];
        this.fieldLines.push({
          // 4 control points that oscillate
          pts: Array.from({length: 4}, () => ({
            x: rand(0, W), y: rand(0, H),
            vx: rand(-0.06, 0.06), vy: rand(-0.06, 0.06),
          })),
          color,
          alpha: rand(0.04, 0.12),
          width: rand(0.5, 1.5),
          phase: rand(0, Math.PI * 2),
          phaseSpd: rand(0.005, 0.012),
        });
      }
    }

    // ── Events ───────────────────────────────────────────────
    _bindEvents() {
      window.addEventListener('resize', () => { this._resize(); this._build(); }, { passive: true });
      this.canvas.addEventListener('mousemove', (e) => {
        const r = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - r.left;
        this.mouse.y = e.clientY - r.top;
      }, { passive: true });
      this.canvas.addEventListener('mouseleave', () => {
        this.mouse.x = this.mouse.y = -9999;
      });
    }

    // ── Tick ─────────────────────────────────────────────────
    _tick() {
      this.raf = requestAnimationFrame(() => this._tick());
      this.t++;
      this._update();
      this._draw();
    }

    _update() {
      const W = this.W, H = this.H;
      const mx = this.mouse.x, my = this.mouse.y;
      const MR = 160, MS = 0.5;

      // Update AI nodes
      for (const n of this.aiNodes) {
        n.x += n.vx; n.y += n.vy;
        n.pulse += n.pulseSpd;

        // Mouse repulsion
        const dx = n.x - mx, dy = n.y - my;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < MR && d > 0) {
          const f = (MR - d) / MR * MS;
          n.vx += dx/d * f; n.vy += dy/d * f;
        }
        n.vx *= 0.993; n.vy *= 0.993;
        const spd = Math.hypot(n.vx, n.vy);
        if (spd < 0.04) { const a = rand(0,Math.PI*2); n.vx=Math.cos(a)*0.1; n.vy=Math.sin(a)*0.1; }

        // Wrap
        if (n.x < -30) n.x = W+30; if (n.x > W+30) n.x = -30;
        if (n.y < -30) n.y = H+30; if (n.y > H+30) n.y = -30;
      }

      // Update molecules
      for (const m of this.molecules) {
        m.x += m.vx; m.y += m.vy;
        m.rot += m.rotSpd;
        m.pulse += m.pulseSpd;

        // Mouse repulsion (gentle)
        const dx = m.x - mx, dy = m.y - my;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 120 && d > 0) {
          const f = (120 - d) / 120 * 0.2;
          m.vx += dx/d * f; m.vy += dy/d * f;
        }
        m.vx *= 0.996; m.vy *= 0.996;
        const spd = Math.hypot(m.vx, m.vy);
        if (spd < 0.02) { const a = rand(0,Math.PI*2); m.vx=Math.cos(a)*0.06; m.vy=Math.sin(a)*0.06; }

        if (m.x < -80) m.x = W+80; if (m.x > W+80) m.x = -80;
        if (m.y < -80) m.y = H+80; if (m.y > H+80) m.y = -80;
      }

      // Update field lines
      for (const fl of this.fieldLines) {
        fl.phase += fl.phaseSpd;
        for (const p of fl.pts) {
          p.x += p.vx + Math.sin(this.t * 0.007 + p.x * 0.005) * 0.04;
          p.y += p.vy + Math.cos(this.t * 0.007 + p.y * 0.005) * 0.04;
          // Soft bounce
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          p.x = Math.max(0, Math.min(W, p.x));
          p.y = Math.max(0, Math.min(H, p.y));
        }
      }
    }

    _draw() {
      const ctx = this.ctx;
      const W = this.W, H = this.H;
      ctx.clearRect(0, 0, W, H);

      // Draw in order: field lines → AI network → molecules
      this._drawFieldLines(ctx, W, H);
      this._drawAINetwork(ctx, W, H);
      this._drawMolecules(ctx, W, H);
    }

    // ── Layer 3: Force field streamlines ────────────────────
    _drawFieldLines(ctx, W, H) {
      for (const fl of this.fieldLines) {
        const [p0, p1, p2, p3] = fl.pts;
        // Animated alpha pulse
        const a = fl.alpha * (0.7 + 0.3 * Math.sin(fl.phase));

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        ctx.strokeStyle = rgba(fl.color, a);
        ctx.lineWidth   = fl.width;
        ctx.lineCap     = 'round';
        ctx.stroke();

        // Draw a small arrowhead / energy dot along the curve
        const dot_t = (Math.sin(fl.phase * 1.3) * 0.5 + 0.5);
        const dp = _bezierPoint(p0, p1, p2, p3, dot_t);
        ctx.beginPath();
        ctx.arc(dp.x, dp.y, fl.width * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = rgba(fl.color, a * 2.5);
        ctx.fill();
      }
    }

    // ── Layer 1: AI Neural network ───────────────────────────
    _drawAINetwork(ctx, W, H) {
      const nodes = this.aiNodes;
      const CONN  = 150, CONN_SQ = CONN * CONN;

      // Connections (synapses) with animated signal pulses
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x-b.x, dy = a.y-b.y, dSq = dx*dx+dy*dy;
          if (dSq > CONN_SQ) continue;

          const frac  = 1 - Math.sqrt(dSq) / CONN;
          const alpha = frac * frac * 0.35;

          // Hub connections are red, others are indigo/teal
          const isHubConn = a.isHub || b.isHub;
          const lineCol = isHubConn ? rgba(RED, alpha * 1.6) : rgba(INDIGO, alpha * 0.8);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = lineCol;
          ctx.lineWidth   = isHubConn ? 0.9 : 0.5;
          ctx.stroke();

          // Travelling signal dot along synapse
          if (isHubConn && frac > 0.55) {
            const st = (this.t * 0.012 + i * 0.37 + j * 0.19) % 1;
            const sx = lerp(a.x, b.x, st);
            const sy = lerp(a.y, b.y, st);
            ctx.beginPath();
            ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = rgba(AMBER, alpha * 4);
            ctx.fill();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const breathe = 1 + Math.sin(n.pulse) * (n.isHub ? 0.3 : 0.15);
        const r = n.r * breathe;

        // Outer glow
        const glowR = r * (n.isHub ? 5 : 3);
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        if (n.isHub) {
          grd.addColorStop(0, rgba(RED,   n.alpha * 0.5));
          grd.addColorStop(0.4, rgba(RED2, n.alpha * 0.15));
          grd.addColorStop(1,   rgba(RED,  0));
        } else {
          grd.addColorStop(0, rgba(n.color, n.alpha * 0.3));
          grd.addColorStop(1, rgba(n.color, 0));
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Solid core
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(n.color, n.alpha);
        ctx.fill();

        // Bright ring for hubs
        if (n.isHub) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = rgba(AMBER, n.alpha * 0.7);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // ── Layer 2: Molecules ───────────────────────────────────
    _drawMolecules(ctx, W, H) {
      for (const mol of this.molecules) {
        const { x, y, rot, alpha, tpl, scale } = mol;
        const breatheA = alpha * (0.85 + 0.15 * Math.sin(mol.pulse));

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.globalAlpha = breatheA;

        // Resolve atom positions
        const positions = tpl.atoms.map(a => ({
          s: a.s,
          px: a.dx * scale,
          py: a.dy * scale,
        }));

        // Draw bonds first
        for (const [i, j] of tpl.bonds) {
          const pa = positions[i], pb = positions[j];
          const isDouble = tpl.doubleBonds.some(d => (d[0]===i&&d[1]===j)||(d[0]===j&&d[1]===i));

          const aColor = CPK[pa.s] || WHITE;
          const bColor = CPK[pb.s] || WHITE;
          // Gradient bond — color-coded from atom to atom
          const grd = ctx.createLinearGradient(pa.px, pa.py, pb.px, pb.py);
          grd.addColorStop(0, rgba(aColor, 0.75));
          grd.addColorStop(1, rgba(bColor, 0.75));

          ctx.beginPath();
          ctx.moveTo(pa.px, pa.py);
          ctx.lineTo(pb.px, pb.py);
          ctx.strokeStyle = grd;
          ctx.lineWidth = isDouble ? 1.4 : 0.9;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Double bond offset line
          if (isDouble) {
            const dx = pb.px - pa.px, dy = pb.py - pa.py;
            const len = Math.hypot(dx, dy);
            const nx = -dy/len * 3, ny = dx/len * 3;
            ctx.beginPath();
            ctx.moveTo(pa.px+nx, pa.py+ny);
            ctx.lineTo(pb.px+nx, pb.py+ny);
            ctx.strokeStyle = grd;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw atoms
        for (const { s, px, py } of positions) {
          const ac = CPK[s] || WHITE;
          const ar = s.length > 1 ? 6 * scale : 5 * scale;  // larger for multi-char

          // Glow
          const grd2 = ctx.createRadialGradient(px, py, 0, px, py, ar * 2.5);
          grd2.addColorStop(0, rgba(ac, 0.25));
          grd2.addColorStop(1, rgba(ac, 0));
          ctx.beginPath();
          ctx.arc(px, py, ar * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = grd2;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(px, py, ar, 0, Math.PI * 2);
          ctx.fillStyle = rgba(ac, 0.8);
          ctx.fill();

          // Rim highlight
          ctx.beginPath();
          ctx.arc(px, py, ar, 0, Math.PI * 2);
          ctx.strokeStyle = rgba(WHITE, 0.35);
          ctx.lineWidth = 0.6;
          ctx.stroke();

          // Element label
          const fs = Math.max(5, ar * 1.1);
          ctx.font = `bold ${fs}px 'Roboto Condensed', Arial, sans-serif`;
          ctx.fillStyle = rgba(WHITE, 0.9);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(s, px, py);
        }

        ctx.globalAlpha = 1;
        ctx.restore();
      }
    }

    destroy() {
      if (this.raf) cancelAnimationFrame(this.raf);
    }
  }

  // ── Geometry helpers ──────────────────────────────────────

  function _hexRing(n, r, labels) {
    return Array.from({length: n}, (_, i) => ({
      s:  labels[i % labels.length],
      dx: Math.cos((i / n) * Math.PI * 2 - Math.PI/2) * r,
      dy: Math.sin((i / n) * Math.PI * 2 - Math.PI/2) * r,
    }));
  }

  function _bezierPoint(p0, p1, p2, p3, t) {
    const u = 1 - t;
    return {
      x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
      y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y,
    };
  }

  // ── Init ──────────────────────────────────────────────────
  function init() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    if (window._aimsBg) window._aimsBg.destroy();
    window._aimsBg = new AIMSBackground(canvas);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
