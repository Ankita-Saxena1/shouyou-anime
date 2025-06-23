import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-widget',
  imports: [RouterModule, CommonModule],
  templateUrl: './music-widget.html',
  styleUrl: './music-widget.css',
  standalone: true,
})
export class MusicWidget {
  @ViewChild('audio', { static: false }) audioRef!: ElementRef<HTMLAudioElement>;

  isPlaying: boolean = false;
  songs = [
    {
      url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/7HSUc9RtLY2L32uqY512OGhrR0xL5IUwQAeJmGJk.mp3',
      title: 'Up All Night',
      artist: 'Purrple Cat',
      albumArt: '/song1.jpeg'
    },
    {
      url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/rsEFmXPlwp4h1huIiLH74ec6kg5WGyWb0sqeXJDP.mp3',
      title: 'Old Blue Spaceship (ID 2126)',
      artist: 'Lobo Loco',
      albumArt: '/song2.jpeg'
    },
    {
      url: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/MSJTXajvicym6KNahkVXEgySgnhcTvz3Zrxn6YNU.mp3',
      title: 'Moonlit Waltz (Background Piano Instrumental)',
      artist: 'Lite Saturation',
      albumArt: '/song3.jpeg'
    }
  ];
  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.songs.length) % this.songs.length;
    this.playCurrent();
  }

  playPause() {
    const audio = this.audioRef.nativeElement;
    if (audio.paused) {
      audio.play();
      this.isPlaying = true;
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.songs.length;
    this.playCurrent();
  }

  playCurrent() {
    setTimeout(() => {
      const audio = this.audioRef.nativeElement;
      audio.load();
      audio.play();
      this.isPlaying = true;
    });
  }
}
