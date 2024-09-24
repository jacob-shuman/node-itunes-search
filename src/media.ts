import {
  ItunesAllAttributes,
  ItunesAttributes,
  ItunesAudiobookAttributes,
  ItunesMovieAttributes,
  ItunesMusicAttributes,
  ItunesMusicVideoAttributes,
  ItunesPodcastAttributes,
  ItunesShortFilmAttributes,
  ItunesSoftwareAttributes,
  ItunesTvShowAttributes,
} from "./attribute";
import {
  ItunesAllEntities,
  ItunesAudiobookEntities,
  ItunesEbookEntities,
  ItunesEntities,
  ItunesMovieEntities,
  ItunesMusicEntities,
  ItunesMusicVideoEntities,
  ItunesPodcastEntities,
  ItunesShortFilmEntities,
  ItunesSoftwareEntities,
  ItunesTvShowEntities,
} from "./entity";

export type ItunesMedia =
  | "movie"
  | "podcast"
  | "music"
  | "musicVideo"
  | "audiobook"
  | "shortFilm"
  | "tvShow"
  | "software"
  | "ebook"
  | "all";

export type ItunesMediaQuery = {
  media?: ItunesMedia;
  entity?: ItunesEntities;
  attribute?: ItunesAttributes;
} & (
  | {
      media?: "movie";
      entity?: ItunesMovieEntities;
      attribute?: ItunesMovieAttributes;
    }
  | {
      media?: "podcast";
      entity?: ItunesPodcastEntities;
      attribute?: ItunesPodcastAttributes;
    }
  | {
      media?: "music";
      entity?: ItunesMusicEntities;
      attribute?: ItunesMusicAttributes;
    }
  | {
      media?: "musicVideo";
      entity?: ItunesMusicVideoEntities;
      attribute?: ItunesMusicVideoAttributes;
    }
  | {
      media?: "audiobook";
      entity?: ItunesAudiobookEntities;
      attribute?: ItunesAudiobookAttributes;
    }
  | {
      media?: "shortFilm";
      entity?: ItunesShortFilmEntities;
      attribute?: ItunesShortFilmAttributes;
    }
  | {
      media?: "tvShow";
      entity?: ItunesTvShowEntities;
      attribute?: ItunesTvShowAttributes;
    }
  | {
      media?: "software";
      entity?: ItunesSoftwareEntities;
      attribute?: ItunesSoftwareAttributes;
    }
  | {
      media?: "ebook";
      entity?: ItunesEbookEntities;
    }
  | {
      media?: "all";
      entity?: ItunesAllEntities;
      attribute?: ItunesAllAttributes;
    }
);
