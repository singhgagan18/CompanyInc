import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.'
  };

  constructor(private route: ActivatedRoute,
              private contentService: ContentService) { 
                this.page = {
                  title: 'Home',
                  subtitle: 'Welcome Home!',
                  content: 'Some home content.'
                };
              }

  ngOnInit() {
    const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData ?? 'home'];
  }
}
