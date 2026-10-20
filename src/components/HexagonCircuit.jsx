import React, { useEffect, useRef } from 'react';

/**
 * HexagonCircuit Component
 * Renders an elegant, minimal animated sci-fi hexagonal circuit background.
 * Uses a small, subtle number of moving tech blue light points (8-10 points max)
 * gliding smoothly along the honeycomb seams without any point clutter.
 */
export default function HexagonCircuit() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Hexagon geometric parameters (pointy-topped hexagons)
    const R = 34;
    const colDist = Math.sqrt(3) * R;
    const rowDist = 1.5 * R;

    let nodes = [];
    let edges = [];
    let pulses = [];
    let lastAutoSurgeTime = performance.now();

    // Build hexagon node and edge graph
    const buildGrid = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const nodeMap = new Map();
      const nodeKey = (x, y) => `${Math.round(x * 10) / 10}_${Math.round(y * 10) / 10}`;

      const getOrCreateNode = (x, y) => {
        const key = nodeKey(x, y);
        if (nodeMap.has(key)) {
          return nodeMap.get(key);
        }
        const node = {
          id: nodeMap.size,
          x,
          y,
          neighbors: [],
          edges: [],
        };
        nodeMap.set(key, node);
        return node;
      };

      const edgesList = [];
      const edgeKey = (idA, idB) => (idA < idB ? `${idA}_${idB}` : `${idB}_${idA}`);
      const edgeMap = new Map();

      const numCols = Math.ceil(width / colDist) + 2;
      const numRows = Math.ceil(height / rowDist) + 2;

      for (let r = -1; r < numRows; r++) {
        for (let c = -1; c < numCols; c++) {
          const cx = c * colDist + (r % 2 !== 0 ? colDist / 2 : 0);
          const cy = r * rowDist;

          // Compute 6 vertices of pointy-topped hexagon
          const hexVerts = [];
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 180) * (60 * i - 30);
            const vx = cx + R * Math.cos(angle);
            const vy = cy + R * Math.sin(angle);
            hexVerts.push(getOrCreateNode(vx, vy));
          }

          // Connect adjacent vertices
          for (let i = 0; i < 6; i++) {
            const n1 = hexVerts[i];
            const n2 = hexVerts[(i + 1) % 6];
            const eKey = edgeKey(n1.id, n2.id);

            if (!edgeMap.has(eKey)) {
              const dx = n2.x - n1.x;
              const dy = n2.y - n1.y;
              const length = Math.sqrt(dx * dx + dy * dy);

              const edge = {
                id: edgesList.length,
                nodeA: n1,
                nodeB: n2,
                length,
                charge: 0,
              };

              edgeMap.set(eKey, edge);
              edgesList.push(edge);

              n1.neighbors.push(n2);
              n2.neighbors.push(n1);
              n1.edges.push(edge);
              n2.edges.push(edge);
            }
          }
        }
      }

      nodes = Array.from(nodeMap.values());
      edges = edgesList;

      // Seed initial tech blue pulses (minimal, few points only: 8 points)
      pulses = [];
      const initialPulseCount = 8;
      for (let i = 0; i < initialPulseCount; i++) {
        spawnPulse();
      }
    };

    // Spawn a new pulse on a random edge
    const spawnPulse = (fromGivenNode = null, directionBias = null, speedMultiplier = 1) => {
      if (nodes.length === 0) return;

      let fromNode = fromGivenNode;
      if (!fromNode) {
        fromNode = nodes[Math.floor(Math.random() * nodes.length)];
      }

      if (!fromNode || fromNode.neighbors.length === 0) return;

      // Pick target neighbor
      let toNode;
      if (directionBias) {
        let bestDot = -999;
        let bestNeighbor = fromNode.neighbors[0];
        fromNode.neighbors.forEach((neighbor) => {
          const dx = neighbor.x - fromNode.x;
          const dy = neighbor.y - fromNode.y;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const dot = (dx / len) * directionBias.x + (dy / len) * directionBias.y;
          if (dot > bestDot) {
            bestDot = dot;
            bestNeighbor = neighbor;
          }
        });
        toNode = bestNeighbor;
      } else {
        toNode = fromNode.neighbors[Math.floor(Math.random() * fromNode.neighbors.length)];
      }

      if (!toNode) return;

      const dx = toNode.x - fromNode.x;
      const dy = toNode.y - fromNode.y;
      const length = Math.sqrt(dx * dx + dy * dy) || R;

      // Tech Acid Lime & Silver pulse shades
      const colors = [
        { primary: '#D4FF00', trailColor: 'rgba(212, 255, 0, 0.65)' },
        { primary: '#E2FF33', trailColor: 'rgba(226, 255, 51, 0.65)' },
        { primary: '#F1F4F8', trailColor: 'rgba(241, 244, 248, 0.55)' },
        { primary: '#CCFF00', trailColor: 'rgba(204, 255, 0, 0.60)' },
      ];
      const colorScheme = colors[Math.floor(Math.random() * colors.length)];

      pulses.push({
        fromNode,
        toNode,
        prevNodeId: fromNode.id,
        progress: Math.random() * 0.3,
        speed: (Math.random() * 1.8 + 2.2) * speedMultiplier,
        length,
        colorScheme,
        trail: [],
        maxTrail: 10,
        life: Math.floor(Math.random() * 220 + 150),
        branchChance: 0.03, // Very low branching to keep points count minimal
      });
    };

    buildGrid();

    const handleResize = () => {
      buildGrid();
    };

    window.addEventListener('resize', handleResize);

    // Main render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle, elegant honeycomb seams (Acid Lime & Silver tint)
      ctx.beginPath();
      for (let i = 0; i < edges.length; i++) {
        const e = edges[i];
        ctx.moveTo(e.nodeA.x, e.nodeA.y);
        ctx.lineTo(e.nodeB.x, e.nodeB.y);
      }
      ctx.strokeStyle = 'rgba(212, 255, 0, 0.10)';
      ctx.lineWidth = 1.0;
      ctx.shadowBlur = 0;
      ctx.stroke();



      // 3. Gentle periodic pulse spawn (every 3.8s, only if count is low)
      const now = performance.now();
      if (now - lastAutoSurgeTime > 3800) {
        lastAutoSurgeTime = now;
        if (nodes.length > 0 && pulses.length < 10) {
          const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
          spawnPulse(randomNode, null, 1.0);
        }
      }

      // 4. Update and draw active tech blue light pulses (STRICTLY CAPPED: 8-12 points)
      const activePulsesLimit = 12;
      const newPulsesToAdd = [];

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.life--;

        // Advance pulse progress along current edge
        p.progress += p.speed / p.length;

        // Current head position
        const headX = p.fromNode.x + (p.toNode.x - p.fromNode.x) * Math.min(1, p.progress);
        const headY = p.fromNode.y + (p.toNode.y - p.fromNode.y) * Math.min(1, p.progress);

        // Record head position into trail
        p.trail.unshift({ x: headX, y: headY });
        if (p.trail.length > p.maxTrail) {
          p.trail.pop();
        }



        // Reached end of current edge -> pick next neighbor
        if (p.progress >= 1.0) {
          p.progress = 0;
          const arrivedNode = p.toNode;
          const cameFromId = p.fromNode.id;

          // Eligible next neighbors (exclude reversing back)
          let candidates = arrivedNode.neighbors.filter((n) => n.id !== cameFromId);
          if (candidates.length === 0) {
            candidates = arrivedNode.neighbors;
          }

          if (candidates.length > 0) {
            // Forward momentum direction preference
            const prevDx = arrivedNode.x - p.fromNode.x;
            const prevDy = arrivedNode.y - p.fromNode.y;
            const prevLen = Math.sqrt(prevDx * prevDx + prevDy * prevDy) || 1;
            const normPrevX = prevDx / prevLen;
            const normPrevY = prevDy / prevLen;

            candidates.sort((a, b) => {
              const dxA = a.x - arrivedNode.x;
              const dyA = a.y - arrivedNode.y;
              const dotA = (dxA / R) * normPrevX + (dyA / R) * normPrevY;

              const dxB = b.x - arrivedNode.x;
              const dyB = b.y - arrivedNode.y;
              const dotB = (dxB / R) * normPrevX + (dyB / R) * normPrevY;

              return dotB - dotA + (Math.random() - 0.5) * 0.4;
            });

            const nextTarget = candidates[0];

            // Rare branch
            if (candidates.length > 1 && Math.random() < p.branchChance && pulses.length + newPulsesToAdd.length < activePulsesLimit) {
              const branchTarget = candidates[1];
              const bDx = branchTarget.x - arrivedNode.x;
              const bDy = branchTarget.y - arrivedNode.y;
              const bLen = Math.sqrt(bDx * bDx + bDy * bDy) || R;

              newPulsesToAdd.push({
                fromNode: arrivedNode,
                toNode: branchTarget,
                prevNodeId: arrivedNode.id,
                progress: 0,
                speed: p.speed * 0.95,
                length: bLen,
                colorScheme: p.colorScheme,
                trail: [{ x: arrivedNode.x, y: arrivedNode.y }],
                maxTrail: 8,
                life: Math.floor(p.life * 0.5),
                branchChance: 0,
              });
            }

            p.fromNode = arrivedNode;
            p.toNode = nextTarget;
            const nDx = nextTarget.x - arrivedNode.x;
            const nDy = nextTarget.y - arrivedNode.y;
            p.length = Math.sqrt(nDx * nDx + nDy * nDy) || R;
          } else {
            p.life = 0;
          }
        }

        // Draw clean trailing tail along hexagon lines (crisp, zero shining glare)
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let t = 1; t < p.trail.length; t++) {
            ctx.lineTo(p.trail[t].x, p.trail[t].y);
          }
          ctx.strokeStyle = p.colorScheme.trailColor;
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 0;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // Draw crisp pulse point head (clean solid tech blue point dot - zero shining bloom)
        ctx.beginPath();
        ctx.arc(headX, headY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.colorScheme.primary;
        ctx.shadowBlur = 0;
        ctx.fill();

        // Remove dead pulses
        if (
          p.life <= 0 ||
          headX < -80 ||
          headX > width + 80 ||
          headY < -80 ||
          headY > height + 80
        ) {
          pulses.splice(i, 1);
        }
      }

      // Add branched pulses
      pulses.push(...newPulsesToAdd);

      // Maintain only a small, elegant number of points (Strictly 8 points)
      const desiredCount = 8;
      while (pulses.length < desiredCount) {
        spawnPulse();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hex-circuit-canvas"
      aria-hidden="true"
    />
  );
}
