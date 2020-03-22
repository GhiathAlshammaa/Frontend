import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-artist-details",
  templateUrl: "./artist-details.component.html",
  styleUrls: ["./artist-details.component.css"]
})
export class ArtistDetailsComponent implements OnInit {
  @Input() artist: Artist;
  constructor() {}

  ngOnInit(): void {}
}

interface Artist {
  name: string;
  shortname: string;
  reknown: string;
  bio: string;
}
