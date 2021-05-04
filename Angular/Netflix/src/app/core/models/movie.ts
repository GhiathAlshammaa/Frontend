import { Country } from './country';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  sinceHowManyDays?: number | undefined;
  belongs_to_collection?: Object | null;
  budget?: number;
  genres?: Object[];
  homepage?: string;
  imdb_id?: string | null;
  production_companies?: Object[];
  production_countries?: Country[];
  format?: Date;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: Object[];
  status?: string;
  tagline?: string | null;
}