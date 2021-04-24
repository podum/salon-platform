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
      { name: 'title', content: 'Twitter Card' },
      { name: 'description', content: 'Testing twitter card validator' },

      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'Twitter Card' },
      { property: 'twitter:description', content: 'Testing twitter card validator' },
      { property: 'twitter:url', content: 'https://salon-podum.web.app/' },
      { property: 'twitter:image', content: 'https://salon-podum.web.app/assets/shapes.svg' },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Twitter Card' },
      { property: 'og:description', content: 'Testing twitter card validator' },
      { property: 'og:url', content: 'https://salon-podum.web.app/' },
      { property: 'og:image', content: 'https://salon-podum.web.app/assets/shapes.svg' }
    ]);
  }

}
