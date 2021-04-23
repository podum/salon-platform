import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Twitter Card');
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: '/' },
      { name: 'twitter:title', content: 'Twitter Card' },
      { name: 'twitter:description', content: 'Testing twitter card validator' },
      { name: 'twitter:image', content: 'https://salon-podum.web.app/assets/shapes.svg' },
      { name: 'og:url', content: '/' },
      { name: 'og:title', content: 'Twitter Card' },
      { name: 'og:description', content: 'Testing twitter card validator' },
      { name: 'og:image', content: 'https://salon-podum.web.app/assets/shapes.svg' }
    ]);
  }

}
