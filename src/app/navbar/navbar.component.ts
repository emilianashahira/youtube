import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtubeservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchQuery: string = '';

  constructor(private youtubeService: YoutubeService, private router: Router) {}
  ngOnInit(): void {
  }

  searchVideos() {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/searchresult'], { queryParams: { q: this.searchQuery,} });
    }
  }
}

