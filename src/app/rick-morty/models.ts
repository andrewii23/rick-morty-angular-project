type Raw<T, R extends { [KR in keyof T]?: unknown }> = {
  [K in keyof T]: K extends keyof R ? R[K] : T[K];
};

export type SearchData = { name?: string; page?: string };

export interface Resource {
  id: string;
  name: string;
  created: Date;
  url: URL;
}

export type RawResource = Raw<
  Resource,
  {
    created: string;
    url: string;
  }
>;

export interface List<T> {
  info: {
    pages: number;
    count: number;
    prev: URL | null;
    next: URL | null;
  };
  results: T[];
}
export type RawList<R extends RawResource> = Raw<
  List<{ [K in keyof R]: unknown }>,
  {
    prev: string | null;
    next: string | null;
    results: R[];
  }
>;

export interface Character extends Resource {
  status: string; //The status of the character ('Alive', 'Dead' or 'unknown').
  species: string; //The species of the character.
  type: string; //The type or subspecies of the character.
  gender: string; //The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
  origin: { name: string; url: URL }; //Name and link to the character's origin location.
  location: { name: string; url: URL }; //Name and link to the character's last known location endpoint.
  image: URL; //Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
  episode: URL[]; //List of episodes in which this character appeared.
}

export type RawCharacter = RawResource &
  Raw<
    Omit<Character, 'created' | 'url'>,
    {
      origin: { name: string; url: string };
      location: string | URL;
      image: string;
      episode: string[];
    }
  >;

// export interface Origin extends Character {
//   name: string;
//   url: URL;
// }

// export interface Location extends Character {
//   name: string;
//   url: URL;
// }

export interface Location extends Resource {
  type: string; //The type of the location.
  dimension: string; //The dimension in which the location is located.
  residents: URL[]; //List of character who have been last seen in the location.
}

export type RawLocation = RawResource &
  Raw<
    Omit<Location, 'created' | 'url'>,
    {
      residents: string[];
    }
  >;

export interface Episode extends Resource {
  air_date: string; //The air date of the episode.
  episode: string; //The code of the episode.
  characters: URL[]; //List of characters who have been seen in the episode.
}

export type RawEpisode = RawResource &
  Raw<
    Omit<Episode, 'created' | 'url'>,
    {
      characters: string[];
    }
  >;
