export interface Streaming {
  display_priority?: number;
  logo_path?: string;
  provider_name?: string;
  provider_id: number;
}

export interface CountryCode {
  link?: string;
  flatrate?: Streaming[];
}

export interface StreamingStatus {
  countryCode: CountryCode[];
}
