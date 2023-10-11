import {
  List,
  RawList,
  RawResource,
  Resource,
  RawCharacter,
  RawEpisode,
  RawLocation,
  Episode,
  Location,
  Character,
} from './models';

export function parseResource<T extends Resource>(rawResource: RawResource): T {
  return {
    ...rawResource,
    created: new Date(rawResource.created),
    url: new URL(rawResource.url),
  } as T;
}

export function parseList(rawList: RawList<RawResource>): List<RawResource> {
  return {
    ...rawList,
    info: {
      ...rawList.info,
      prev: rawList.info.prev ? new URL(rawList.info.prev) : null,
      next: rawList.info.next ? new URL(rawList.info.next) : null,
    },
  };
}

export function parseCharacter(rawCharacter: RawCharacter): Character {
  return {
    ...parseResource(rawCharacter),
    // origin: {
    //   ...rawCharacter.origin,
    //   url: new URL(rawCharacter.origin.url),
    // },
    //location:...
    image: new URL(rawCharacter.image),
    episode: rawCharacter.episode.map((url) => new URL(url)),
  };
}

export function parseCharacterList(
  rawCharacterList: RawList<RawCharacter>,
): List<Character> {
  return {
    ...parseList(rawCharacterList),
    results: rawCharacterList.results.map((result) => parseCharacter(result)),
  };
}

export function parseLocation(rawLocation: RawLocation): Location {
  return {
    ...parseResource(rawLocation),
    residents: rawLocation.residents.map((url) => new URL(url)),
  };
}

export function parseLocationList(
  rawLocationList: RawList<RawLocation>,
): List<Location> {
  return {
    ...parseList(rawLocationList),
    results: rawLocationList.results.map((result) => parseLocation(result)),
  };
}

export function parseEpisode(rawEpisode: RawEpisode): Episode {
  return {
    ...parseResource(rawEpisode),
    characters: rawEpisode.characters.map((url) => new URL(url)),
  };
}

export function parseEpidoseList(
  rawEpisodeList: RawList<RawEpisode>,
): List<Episode> {
  return {
    ...parseList(rawEpisodeList),
    results: rawEpisodeList.results.map((result) => parseEpisode(result)),
  };
}
