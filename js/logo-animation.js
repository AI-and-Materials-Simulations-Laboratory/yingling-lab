// ============================================================
// AIMS LAB — Wolfpack × AI Logo Animation
// Sequence: Wolf appears → AI network overlays → they MERGE
//           into the combined AIMS logo
// ============================================================

(function () {
  'use strict';

  const STAGES = {
    WOLF:   0,
    AI:     1,
    MERGE:  2,
    LOOP:   3,
  };

  let currentStage = STAGES.WOLF;
  let animFrame;
  let startTime;

  // Duration of each stage in ms
  const TIMING = {
    wolfAppear:   800,
    wolfHold:    1000,
    aiOverlay:    700,
    aiHold:       900,
    mergeFlash:   600,
    mergeHold:   2000,
    fadeToWolf:   800,
  };

  // ─── HERO ANIMATION (large SVG stage) ─────────────────────

  function initHeroAnimation() {
    const stage = document.getElementById('hero-animation-stage');
    if (!stage) return;

    // Build the SVG programmatically for fine control
    stage.innerHTML = buildHeroSVG();

    // Get elements
    const wolfGroup  = stage.querySelector('#anim-wolf-group');
    const aiGroup    = stage.querySelector('#anim-ai-group');
    const mergeGroup = stage.querySelector('#anim-merge-group');
    const pulseRings = stage.querySelectorAll('.anim-pulse');

    if (!wolfGroup) return;

    // Start sequence after a short delay
    setTimeout(() => runHeroSequence(wolfGroup, aiGroup, mergeGroup, pulseRings), 600);
  }

  function runHeroSequence(wolfGroup, aiGroup, mergeGroup, pulseRings) {
    // STAGE 1: Wolf fades in
    fadeIn(wolfGroup, TIMING.wolfAppear, 'ease-out', () => {
      // Glow starts
      wolfGroup.classList.add('glowing');

      setTimeout(() => {
        // STAGE 2: AI network overlays
        fadeIn(aiGroup, TIMING.aiOverlay, 'ease-out', () => {

          setTimeout(() => {
            // STAGE 3: MERGE — both fade out, merged logo flashes in
            const tl = [
              fadeOut(wolfGroup, TIMING.mergeFlash * 0.6, 'ease-in'),
              fadeOut(aiGroup,   TIMING.mergeFlash * 0.6, 'ease-in'),
            ];
            Promise.all(tl).then(() => {
              mergeGroup.style.opacity = '0';
              mergeGroup.style.display = 'block';
              mergeGroup.classList.add('merge-reveal');
              mergeGroup.style.animation = 'merge-flash 0.7s cubic-bezier(0.16,1,0.3,1) forwards';

              // After merge hold, loop back
              setTimeout(() => {
                wolfGroup.classList.remove('glowing');
                mergeGroup.style.animation = '';

                fadeOut(mergeGroup, TIMING.fadeToWolf, 'ease-in', () => {
                  // Reset and loop
                  wolfGroup.style.opacity   = '0';
                  aiGroup.style.opacity     = '0';
                  mergeGroup.style.opacity  = '0';
                  setTimeout(() => runHeroSequence(wolfGroup, aiGroup, mergeGroup, pulseRings), 400);
                });
              }, TIMING.mergeHold);
            });
          }, TIMING.aiHold);
        });
      }, TIMING.wolfHold);
    });
  }

  function fadeIn(el, duration, easing, cb) {
    return new Promise(resolve => {
      el.style.transition = `opacity ${duration}ms ${easing}`;
      el.style.opacity = '0';
      el.style.display = 'block';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          const done = () => {
            el.removeEventListener('transitionend', done);
            if (cb) cb();
            resolve();
          };
          el.addEventListener('transitionend', done, { once: true });
          // Fallback in case transitionend doesn't fire
          setTimeout(done, duration + 50);
        });
      });
    });
  }

  function fadeOut(el, duration, easing, cb) {
    return new Promise(resolve => {
      el.style.transition = `opacity ${duration}ms ${easing}`;
      el.style.opacity = '1';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '0';
          const done = () => {
            el.removeEventListener('transitionend', done);
            if (cb) cb();
            resolve();
          };
          el.addEventListener('transitionend', done, { once: true });
          setTimeout(done, duration + 50);
        });
      });
    });
  }

  // ─── SVG BUILDER ─────────────────────────────────────────

  function buildHeroSVG() {
    const W = 520, H = 520, CX = 260, CY = 260, R = 170;

    return `
<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" 
     style="width:100%;height:100%;overflow:visible">
  <defs>
    <filter id="glow-red" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glow-strong" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="16" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glow-blue" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feFlood flood-color="#4da6e8" flood-opacity="0.4" result="color"/>
      <feComposite in="color" in2="coloredBlur" operator="in" result="shadow"/>
      <feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="wolf-grad" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#cc0000"/>
      <stop offset="100%" stop-color="#6b0000"/>
    </radialGradient>
    <radialGradient id="merge-grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff4444"/>
      <stop offset="50%" stop-color="#cc0000"/>
      <stop offset="100%" stop-color="#1a0000"/>
    </radialGradient>
    <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4da6e8"/>
      <stop offset="100%" stop-color="#0066cc"/>
    </linearGradient>
  </defs>

  <!-- ====================================================
       STAGE 1: WOLF GROUP
       ==================================================== -->
  <g id="anim-wolf-group" style="opacity:0;display:block">

    <!-- Outer glow ring -->
    <circle cx="${CX}" cy="${CY}" r="195" fill="none" 
            stroke="#cc0000" stroke-width="1" opacity="0.15"/>
    <circle cx="${CX}" cy="${CY}" r="185" fill="none" 
            stroke="#cc0000" stroke-width="1.5" opacity="0.25"/>

    <!-- Dark circular backing -->
    <circle cx="${CX}" cy="${CY}" r="${R}" fill="#1a0000" opacity="0.85"/>
    <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" 
            stroke="#cc0000" stroke-width="2.5" filter="url(#glow-red)"/>

    <!-- Wolf SVG scaled and centered -->
    <!-- Using the actual NC State Wolf paths, scaled to fit circle -->
    <!-- Wolf head scaled to ~200x200 centered in 520x520 stage -->
    <g transform="translate(${CX - 96}, ${CY - 108}) scale(1.0)" filter="url(#glow-red)">
      <!-- Original wolf paths from wolfpack-1.svg, adapted colors for dark bg -->
      <path d="M90.678 17.442c0 2.942-4.637 5.328-10.358 5.328-5.721 0-10.357-2.386-10.357-5.328 0-2.943 4.637-5.328 10.357-5.328 5.721 0 10.358 2.386 10.358 5.328z" fill="#cc0000" clip-rule="evenodd" fill-rule="evenodd"/>
      <path d="M48.042 31.058c3.115-7.249 16.863-10.573 23.494-12.991 7.529-2.746 15.636-.649 23.43 1.151 6.346 1.466 17.604 8.25 15.866 16.576-2.367 11.361-35.801 7.701-43.783 7.694-4.133-.003-19.25 2.432-21.306-4.172-.661-2.119.048-3.662 1.713-4.706l.586-3.552z" fill="#dddddd" clip-rule="evenodd" fill-rule="evenodd"/>
      <path d="M51.022 61.25c.592-10.656-9.47-26.048-9.47-26.048 43.208-31.376 76.353 8.288 76.353 8.288-10.062 7.104-15.389 27.232-15.389 27.232l-13.449-4.69-8.905-2.969-7.791-1.113-7.049.742-7.197-2.034-4.675-1.676-2.428 2.268z" fill="#cc0000" clip-rule="evenodd" fill-rule="evenodd"/>
      <path d="M65.308 34.061l-.858.227 3.99 15.121-2.845.751-6.27-10.357 2.586 9.799.762-.202.378 1.432-2.909.768-.378-1.432.811-.214-3.613-13.689-.81.214L55.761 35l3.906-1.031 5.873 9.865-2.425-9.193-.811.213-.391-1.478 3.005-.793.39 1.478zM77.979 43.934c-.14 1.701-.579 3.024-1.315 3.969-.737.946-1.67 1.372-2.798 1.279-2.969-.244-4.211-3.312-3.727-9.205.246-2.988.775-5.159 1.588-6.512.813-1.354 1.959-1.97 3.437-1.848.465.038.845.146 1.14.321s.624.49.988.942l.498-.815 1.157.095-.465 5.669-2.163-.178.147-1.794c.088-1.079.049-1.803-.119-2.173-.167-.37-.464-.573-.891-.608-.442-.036-.758.145-.947.541-.19.396-.341 1.288-.455 2.673l-.596 7.266c-.134 1.636-.093 2.749.125 3.339.164.434.476.669.938.707.66.055 1.172-.26 1.536-.943.364-.683.616-1.875.755-3.575l1.204.099-.037.751zM88.463 46.366c-.278 1.341-.857 2.364-1.735 3.068-.878.705-1.873.941-2.982.711-.44-.092-.785-.236-1.034-.435-.248-.198-.489-.51-.724-.938l-.629.675-1.385-.288 1.144-5.507 2.077.432-.204.983c-.459 2.211-.137 3.431.967 3.66.342.071.645-.002.91-.22.266-.217.44-.53.525-.939.167-.802-.048-1.84-.644-3.115-.597-1.275-1.184-2.527-1.763-3.757-.581-1.553-.737-2.975-.469-4.268.251-1.209.776-2.154 1.573-2.832.798-.679 1.678-.918 2.643-.718.425.088.795.251 1.113.489s.654.608 1.01 1.111l.54-.86 1.161.241-1.006 4.845-2.077-.432.246-1.184c.331-1.594.021-2.49-.928-2.687a.857.857 0 0 0-.743.179c-.222.176-.367.436-.439.778-.16.77.068 1.797.682 3.085 1.132 2.385 1.703 3.595 1.713 3.631.578 1.553.73 2.984.458 4.292zM103.674 42.444l-.762-.354-4.354 9.35c-.861 1.851-1.725 3.026-2.589 3.529-.864.502-1.942.451-3.237-.152-1.339-.624-2.142-1.468-2.406-2.533s-.014-2.416.749-4.053l4.461-9.578-.76-.354.646-1.386 4.739 2.208-.646 1.386-.938-.438-4.455 9.564c-.6 1.288-.893 2.188-.88 2.701.013.513.342.92.987 1.221.614.286 1.104.267 1.472-.061.366-.327.875-1.188 1.523-2.581l4.391-9.428-.938-.438.645-1.386 2.996 1.396-.644 1.387z" fill="#eeeeee" clip-rule="evenodd" fill-rule="evenodd"/>
      <!-- Wolf body / chest -->
      <path d="M101.902 95.083S89.158 71.111 67.145 72.271c0 0-6.951 24.357 15.834 32.863 0 .001 5.021-7.732 18.923-10.051z" fill="#ffffff" clip-rule="evenodd" fill-rule="evenodd"/>
      <path d="M68.277 71.884s0 15.163 8.976 19.051c0 0-3.264-7.777-1.225-9.332 0 0 4.896 9.72 10.201 12.053 0 0 7.752 3.499 12.239-2.721.001 0-8.566-16.718-30.191-19.051z" fill="#cccccc" clip-rule="evenodd" fill-rule="evenodd"/>
      <!-- Eye -->
      <ellipse cx="168" cy="94" rx="11" ry="7" fill="#ffffff"/>
      <circle cx="168" cy="93" r="5.5" fill="#111111"/>
      <circle cx="166" cy="91" r="1.8" fill="#ffffff"/>
    </g>

    <!-- Pulsing rings around wolf -->
    <circle class="anim-pulse" cx="${CX}" cy="${CY}" r="185"
            fill="none" stroke="#cc0000" stroke-width="1" opacity="0">
      <animate attributeName="r" values="185;210;185" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle class="anim-pulse" cx="${CX}" cy="${CY}" r="185"
            fill="none" stroke="#cc0000" stroke-width="0.5" opacity="0">
      <animate attributeName="r" values="185;220;185" dur="2.5s" begin="1.25s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" begin="1.25s" repeatCount="indefinite"/>
    </circle>

    <!-- "WOLFPACK" text arc -->
    <path id="wolf-arc-top" d="M ${CX - 175},${CY} a175,175 0 0,1 350,0" fill="none"/>
    <text font-size="11" fill="#cc0000" opacity="0.6" font-family="Cabinet Grotesk, sans-serif" letter-spacing="6" font-weight="700">
      <textPath href="#wolf-arc-top" startOffset="12%">NC STATE WOLFPACK</textPath>
    </text>
  </g>

  <!-- ====================================================
       STAGE 2: AI NETWORK OVERLAY
       ==================================================== -->
  <g id="anim-ai-group" style="opacity:0;display:block">

    <!-- Orbital rings (rotating) -->
    <g style="transform-origin:${CX}px ${CY}px">
      <ellipse cx="${CX}" cy="${CY}" rx="190" ry="70"
               fill="none" stroke="#4da6e8" stroke-width="1" opacity="0.35"
               stroke-dasharray="8 5">
        <animateTransform attributeName="transform" type="rotate"
                          values="0 ${CX} ${CY};360 ${CX} ${CY}"
                          dur="10s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="${CX}" cy="${CY}" rx="190" ry="70"
               fill="none" stroke="#4da6e8" stroke-width="1" opacity="0.25"
               stroke-dasharray="4 8"
               transform="rotate(90 ${CX} ${CY})">
        <animateTransform attributeName="transform" type="rotate"
                          values="90 ${CX} ${CY};450 ${CX} ${CY}"
                          dur="14s" repeatCount="indefinite"/>
      </ellipse>
    </g>

    <!-- Neural network nodes -->
    <!-- Core (center) -->
    <circle class="ai-node" cx="${CX}" cy="${CY}" r="14" fill="none" 
            stroke="#4da6e8" stroke-width="2" filter="url(#glow-blue)">
      <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="${CX}" cy="${CY}" r="6" fill="#4da6e8" filter="url(#glow-blue)"/>

    <!-- Satellite nodes at cardinal + diagonal positions -->
    ${buildAINodes(CX, CY, 120, 8)}
    ${buildAINodes(CX, CY, 165, 6)}

    <!-- Connection lines from center to nodes -->
    ${buildAILines(CX, CY, 120)}

    <!-- "AI NETWORK" label -->
    <path id="ai-arc-bottom" d="M ${CX - 175},${CY} a175,175 0 0,0 350,0" fill="none"/>
    <text font-size="11" fill="#4da6e8" opacity="0.5" font-family="Cabinet Grotesk, sans-serif" letter-spacing="5" font-weight="700">
      <textPath href="#ai-arc-bottom" startOffset="14%">MATERIALS · AI · SIMULATION</textPath>
    </text>
  </g>

  <!-- ====================================================
       STAGE 3: MERGED LOGO
       ==================================================== -->
  <g id="anim-merge-group" style="opacity:0;display:block">

    <!-- Flash burst -->
    <circle cx="${CX}" cy="${CY}" r="200" fill="url(#merge-grad)" opacity="0.15"/>

    <!-- AIMS text in outer ring -->
    <circle cx="${CX}" cy="${CY}" r="185" fill="none" stroke="#cc0000" stroke-width="2"
            filter="url(#glow-red)"/>
    <circle cx="${CX}" cy="${CY}" r="175" fill="none" stroke="#cc0000" stroke-width="0.5"
            opacity="0.4"/>

    <!-- Wolf silhouette (smaller, white) on dark fill -->
    <circle cx="${CX}" cy="${CY}" r="${R}" fill="#1a0000"/>
    <g transform="translate(${CX - 96}, ${CY - 108}) scale(1.0)" opacity="0.9">
      <path d="M90.678 17.442c0 2.942-4.637 5.328-10.358 5.328-5.721 0-10.357-2.386-10.357-5.328 0-2.943 4.637-5.328 10.357-5.328 5.721 0 10.358 2.386 10.358 5.328z" fill="#cc0000"/>
      <path d="M51.022 61.25c.592-10.656-9.47-26.048-9.47-26.048 43.208-31.376 76.353 8.288 76.353 8.288-10.062 7.104-15.389 27.232-15.389 27.232l-13.449-4.69-8.905-2.969-7.791-1.113-7.049.742-7.197-2.034-4.675-1.676-2.428 2.268z" fill="#cc0000"/>
      <path d="M48.042 31.058c3.115-7.249 16.863-10.573 23.494-12.991 7.529-2.746 15.636-.649 23.43 1.151 6.346 1.466 17.604 8.25 15.866 16.576-2.367 11.361-35.801 7.701-43.783 7.694-4.133-.003-19.25 2.432-21.306-4.172-.661-2.119.048-3.662 1.713-4.706l.586-3.552z" fill="#eeeeee"/>
      <ellipse cx="168" cy="94" rx="11" ry="7" fill="#ffffff"/>
      <circle cx="168" cy="93" r="5.5" fill="#111111"/>
      <circle cx="166" cy="91" r="1.8" fill="#ffffff"/>
    </g>

    <!-- AI network overlaid with red tint -->
    ${buildAINodesRed(CX, CY, 120, 8)}
    ${buildAILines(CX, CY, 120, '#cc0000', 0.4)}

    <!-- Central glow -->
    <circle cx="${CX}" cy="${CY}" r="8" fill="#ff4444" filter="url(#glow-strong)">
      <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
    </circle>

    <!-- AIMS Label arcs -->
    <path id="merge-arc-top" d="M ${CX - 175},${CY} a175,175 0 0,1 350,0" fill="none"/>
    <path id="merge-arc-bottom" d="M ${CX - 175},${CY} a175,175 0 0,0 350,0" fill="none"/>
    <text font-size="13" fill="#cc0000" font-family="Cabinet Grotesk, sans-serif" 
          letter-spacing="8" font-weight="800" filter="url(#glow-red)">
      <textPath href="#merge-arc-top" startOffset="16%">AI · MATERIALS · SIMULATION</textPath>
    </text>
    <text font-size="11" fill="#ffffff" font-family="Cabinet Grotesk, sans-serif" 
          letter-spacing="6" font-weight="600" opacity="0.7">
      <textPath href="#merge-arc-bottom" startOffset="20%">NC STATE · WOLFPACK · MSE</textPath>
    </text>

    <!-- "AIMS" center label (shown after merge) -->
    <text x="${CX}" y="${CY + 115}" text-anchor="middle" 
          font-family="Cabinet Grotesk, sans-serif" font-size="22" font-weight="900"
          fill="#ffffff" letter-spacing="8" filter="url(#glow-red)">AIMS</text>
  </g>

</svg>`;
  }

  function buildAINodes(cx, cy, radius, count) {
    let html = '';
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      const delay = (i * 0.2).toFixed(1);
      html += `
        <circle class="ai-node" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" 
                fill="#4da6e8" opacity="0.85" filter="url(#glow-blue)">
          <animate attributeName="r" values="4;7;4" dur="2s" begin="${delay}s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.85;0.4;0.85" dur="2s" begin="${delay}s" repeatCount="indefinite"/>
        </circle>`;
    }
    return html;
  }

  function buildAINodesRed(cx, cy, radius, count) {
    let html = '';
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      const delay = (i * 0.2).toFixed(1);
      html += `
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" 
                fill="#cc0000" opacity="0.7" filter="url(#glow-red)">
          <animate attributeName="r" values="4;7;4" dur="2s" begin="${delay}s" repeatCount="indefinite"/>
        </circle>`;
    }
    return html;
  }

  function buildAILines(cx, cy, radius, color = '#4da6e8', opacity = 0.25) {
    let html = '';
    const count = 8;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      html += `
        <line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"
              stroke="${color}" stroke-width="1" opacity="${opacity}"
              stroke-dasharray="4 3">
          <animate attributeName="stroke-dashoffset" 
                   values="100;0" dur="2s" begin="${(i * 0.25).toFixed(1)}s" repeatCount="indefinite"/>
        </line>`;
    }
    return html;
  }

  // ─── NAV LOGO ────────────────────────────────────────────

  function initNavLogo() {
    const navLogoEl = document.querySelector('.nav-logo svg');
    if (!navLogoEl) return;

    // The nav logo SVG already exists — add a subtle pulse/glow on scroll
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navLogoEl.style.filter = 'drop-shadow(0 0 4px rgba(204,0,0,0.5))';
      } else {
        navLogoEl.style.filter = '';
      }
    }, { passive: true });
  }

  // ─── INIT ─────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
    initNavLogo();
  });

})();
