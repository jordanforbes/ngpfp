import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.sass'],
})
export class ArtCardComponent implements OnInit {
  artData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/art-data.json').subscribe((data: any) => {
      this.artData = data;
    });
  }

  navigateToDetails(artPiece: any) {
    // Navigate to details page with artPiece as parameter
    // Example: this.router.navigate(['/art-details', artPiece.title]);
  }
}
