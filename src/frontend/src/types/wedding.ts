export interface RSVPFormData {
  name: string;
  email: string;
  guestCount: number;
  dietary: string;
  songRequest: string;
  attendance: "yes" | "no" | "maybe";
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface AccommodationOption {
  name: string;
  distance: string;
  priceRange: string;
  website: string;
  description: string;
}

export interface GiftRegistryItem {
  store: string;
  url: string;
  description: string;
}
