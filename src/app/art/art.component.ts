import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.sass'],
})
export class ArtComponent implements OnInit {
  artData: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('assets/art-data.json').subscribe((data: any) => {
      this.artData = data;
    });
  }

  navigateToDetails(artPiece: any) {
    this.router.navigate(['/art-details', artPiece.id]);
  }
}
