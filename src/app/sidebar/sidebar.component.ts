import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  words: string[] = ['TAXI', 'CAB', 'LIMO'];
  currentWordIndex: number = 0;
  currentWord: string = this.words[this.currentWordIndex];

  ngOnInit(): void {
    setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.currentWordIndex];
    }, 2000); // Change the word every 2 seconds
  }
}