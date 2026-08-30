   let time = 0;

    // Palette HSB configurations for traditional Onam flowers
    const PALETTE = {
      marigoldOrange: { h: 28, s: 95, b: 90 },
      marigoldYellow: { h: 48, s: 98, b: 95 },
      chettiCrimson:  { h: 350, s: 85, b: 70 },
      tulsiGreen:     { h: 145, s: 70, b: 50 },
      lotusMagenta:   { h: 325, s: 80, b: 85 },
      jasmineWhite:   { h: 40, s: 15, b: 96 },
      goldCore:       { h: 44, s: 100, b: 98 }
    };

    function setup() {
      createCanvas(windowWidth, windowHeight);
      colorMode(HSB, 360, 100, 100, 1);
      smooth();
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }

    // Parametric Sine Tapered Petal
    function drawPetal(len, maxW, power) {
      beginShape();
      for (let t = 0; t <= 1; t += 0.02) {
        let w = maxW * pow(sin(PI * t), power);
        let y = -t * len;
        vertex(w, y);
      }
      for (let t = 1; t >= 0; t -= 0.02) {
        let w = maxW * pow(sin(PI * t), power);
        let y = -t * len;
        vertex(-w, y);
      }
      endShape(CLOSE);
    }

    // Pointed Star Geometry
    function drawStar(rOuter, rInner, points) {
      beginShape();
      for (let i = 0; i < points * 2; i++) {
        let r = (i % 2 === 0) ? rOuter : rInner;
        let a = i * (PI / points);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
      }
      endShape(CLOSE);
    }

    function draw() {
      time += 0.01;
      background(230, 30, 8); // Deep dark background

      let cx = width / 2;
      let cy = height / 2;
      let maxRadius = min(width, height) * 0.42;

      // Organic global breathing effect
      let pulseScale = 1 + sin(time * 1.5) * 0.025;
      let rBase = maxRadius * pulseScale;

      push();
      translate(cx, cy);

      // Layer 1: Outermost Scalloped Floral Rim
      push();
      rotate(time * 0.1);
      let outerCount = 36;
      let outerR = rBase * 1.0;
      fill(PALETTE.marigoldOrange.h, PALETTE.marigoldOrange.s, PALETTE.marigoldOrange.b, 0.95);
      stroke(PALETTE.marigoldYellow.h, PALETTE.marigoldYellow.s, PALETTE.marigoldYellow.b, 0.8);
      strokeWeight(1.5);
      for (let i = 0; i < outerCount; i++) {
        let a = i * (TWO_PI / outerCount);
        let x = outerR * cos(a);
        let y = outerR * sin(a);
        circle(x, y, rBase * 0.16);
      }
      pop();

      // Layer 2: Concentric Decorative Outer Ring
      fill(PALETTE.chettiCrimson.h, PALETTE.chettiCrimson.s, PALETTE.chettiCrimson.b, 0.9);
      stroke(PALETTE.marigoldYellow.h, PALETTE.marigoldYellow.s, PALETTE.marigoldYellow.b, 0.9);
      strokeWeight(2.5);
      circle(0, 0, rBase * 1.88);

      // Layer 3: 32-Point Star Array (Counter-Rotating)
      push();
      rotate(-time * 0.12);
      fill(PALETTE.marigoldYellow.h, PALETTE.marigoldYellow.s, PALETTE.marigoldYellow.b, 0.95);
      stroke(PALETTE.marigoldOrange.h, PALETTE.marigoldOrange.s, PALETTE.marigoldOrange.b, 0.9);
      strokeWeight(1.5);
      drawStar(rBase * 0.92, rBase * 0.78, 32);
      pop();

      // Layer 4: Deep Crimson Secondary Star Ring
      push();
      rotate(time * 0.08);
      fill(PALETTE.chettiCrimson.h, PALETTE.chettiCrimson.s, PALETTE.chettiCrimson.b, 0.95);
      noStroke();
      drawStar(rBase * 0.82, rBase * 0.68, 24);
      pop();

      // Layer 5: Primary Tapered Petals Ring (Jasmine White & Pink Accent)
      push();
      rotate(-time * 0.15);
      let petalCount1 = 20;
      let petalLen1 = rBase * 0.36;
      let petalW1 = rBase * 0.13;
      for (let i = 0; i < petalCount1; i++) {
        push();
        rotate(i * (TWO_PI / petalCount1));
        translate(0, -rBase * 0.70 + petalLen1 * 0.5);

        // Petal base body
        fill(PALETTE.jasmineWhite.h, PALETTE.jasmineWhite.s, PALETTE.jasmineWhite.b, 0.96);
        stroke(PALETTE.lotusMagenta.h, PALETTE.lotusMagenta.s, PALETTE.lotusMagenta.b, 0.6);
        strokeWeight(1.2);
        drawPetal(petalLen1, petalW1, 1.2);

        // Inner petal accent vein
        fill(PALETTE.lotusMagenta.h, PALETTE.lotusMagenta.s, PALETTE.lotusMagenta.b, 0.7);
        noStroke();
        drawPetal(petalLen1 * 0.6, petalW1 * 0.45, 1.5);

        pop();
      }
      pop();

      // Layer 6: Emerald Tulsi Leaf Pattern Ring
      push();
      rotate(time * 0.18);
      fill(PALETTE.tulsiGreen.h, PALETTE.tulsiGreen.s, PALETTE.tulsiGreen.b, 0.95);
      stroke(PALETTE.marigoldYellow.h, PALETTE.marigoldYellow.s, PALETTE.marigoldYellow.b, 0.7);
      strokeWeight(1);
      drawStar(rBase * 0.54, rBase * 0.40, 16);
      pop();

      // Layer 7: Golden Radiant Lotus Center Layer
      push();
      rotate(-time * 0.22);
      let lotusCount = 12;
      let lotusLen = rBase * 0.26;
      let lotusW = rBase * 0.11;
      for (let i = 0; i < lotusCount; i++) {
        push();
        rotate(i * (TWO_PI / lotusCount));
        translate(0, -rBase * 0.42 + lotusLen * 0.5);

        fill(PALETTE.marigoldOrange.h, PALETTE.marigoldOrange.s, PALETTE.marigoldOrange.b, 0.95);
        stroke(PALETTE.marigoldYellow.h, PALETTE.marigoldYellow.s, PALETTE.marigoldYellow.b, 0.9);
        strokeWeight(1.2);
        drawPetal(lotusLen, lotusW, 1.4);

        fill(PALETTE.marigoldYellow.h, PALETTE.marigoldYellow.s, PALETTE.marigoldYellow.b, 0.95);
        noStroke();
        drawPetal(lotusLen * 0.65, lotusW * 0.5, 1.6);

        pop();
      }
      pop();

      // Layer 8: Concentric Stamen Dots Ring
      push();
      rotate(time * 0.25);
      let dotCount = 16;
      let dotRadius = rBase * 0.22;
      fill(PALETTE.jasmineWhite.h, PALETTE.jasmineWhite.s, PALETTE.jasmineWhite.b, 0.95);
      noStroke();
      for (let i = 0; i < dotCount; i++) {
        let a = i * (TWO_PI / dotCount);
        let x = dotRadius * cos(a);
        let y = dotRadius * sin(a);
        circle(x, y, rBase * 0.036);
      }
      pop();

      // Layer 9: Central Thali Floral Core
      let coreR = rBase * 0.17;
      fill(PALETTE.goldCore.h, PALETTE.goldCore.s, PALETTE.goldCore.b, 0.98);
      stroke(PALETTE.chettiCrimson.h, PALETTE.chettiCrimson.s, PALETTE.chettiCrimson.b, 0.9);
      strokeWeight(2.5);
      circle(0, 0, coreR * 2);

      // Core Inner Star Geometry
      push();
      rotate(time * 0.3);
      fill(PALETTE.chettiCrimson.h, PALETTE.chettiCrimson.s, PALETTE.chettiCrimson.b, 0.95);
      noStroke();
      drawStar(coreR * 0.8, coreR * 0.4, 8);
      pop();

      // Nilavilakku / Flame Center Dot
      fill(0, 0, 100);
      circle(0, 0, coreR * 0.35);

      pop();
    }
