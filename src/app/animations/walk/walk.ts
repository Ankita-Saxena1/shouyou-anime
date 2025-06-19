import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-walk',
  template: `<canvas #catCanvas></canvas>`,
  styleUrls: ['./walk.css'],
})
export class Walk implements AfterViewInit {
  @ViewChild('catCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load both sprites
    const catForward = new Image();
    catForward.src = 'walk_forward.png';
    const catBackward = new Image();
    catBackward.src = 'walk_backward.png';

    const frameWidth = 128;
    const frameHeight = 128;
    const numFrames = 2;
    let currentFrame = 0;
    let frameTick = 0;
    const ticksPerFrame = 20;

    // Cat movement variables
    let catX = 0;
    let catVX = 2; // speed in px/frame
    let direction = 1; // 1 = forward, -1 = backward

    // Toggle direction every 10 seconds
    function toggleDirection() {
      direction *= -1;
      setTimeout(toggleDirection, 100000);
    }

    function drawCat(sprite: HTMLImageElement) {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const destY = 0; // draw at top of canvas
      //const destY = (canvas.height - frameHeight) / 2; // center vertically
      const scale = 1; // or whatever scale you want
      const destWidth = frameWidth * scale;
      const destHeight = frameHeight * scale;
      ctx.drawImage(
        sprite,
        0,
        currentFrame * frameHeight, // source x, y
        frameWidth,
        frameHeight,
        catX,
        destY, // draw at (catX, 0) inside the canvas
        destWidth,
        destHeight
      );
    }

    function animate() {
      frameTick++;
      if (frameTick >= ticksPerFrame) {
        frameTick = 0;
        currentFrame = (currentFrame + 1) % numFrames;
      }

      // Move cat
      catX += catVX * direction;

      // Reverse direction at canvas edges
      if (catX <= 0) {
        direction = 1;
        catX = 0;
      } else if (catX + frameWidth >= canvas.width) {
        direction = -1;
        catX = canvas.width - frameWidth;
      }

      // Draw the correct sprite
      if (direction === 1) {
        drawCat(catForward);
      } else {
        drawCat(catBackward);
      }

      requestAnimationFrame(animate);
    }

    // Start animation when both images are loaded
    let loaded = 0;
    function tryStart() {
      loaded++;
      if (loaded === 2) {
        // Set canvas size once
        canvas.width = 1200; // or navbar width
        canvas.height = 200;
        animate();
        toggleDirection();
      }
    }
    catForward.onload = tryStart;
    catBackward.onload = tryStart;
  }
}
