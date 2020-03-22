import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-artist-items",
  templateUrl: "./artist-items.component.html"
})
export class ArtistItemsComponent implements OnInit {
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
