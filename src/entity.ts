export type ItunesEntities =
  | ItunesMovieEntities
  | ItunesPodcastEntities
  | ItunesMusicEntities
  | ItunesMusicVideoEntities
  | ItunesAudiobookEntities
  | ItunesShortFilmEntities
  | ItunesTvShowEntities
  | ItunesSoftwareEntities
  | ItunesEbookEntities
  | ItunesAllEntities;

export type ItunesMovieEntities = "movieArtist" | "movie";

export type ItunesPodcastEntities = "podcastAuthor" | "podcast";

export type ItunesMusicEntities =
  | "musicArtist"
  | "musicTrack"
  | "album"
  | "musicVideo"
  | "mix"
  | "song";

export type ItunesMusicVideoEntities = "musicArtist" | "musicVideo";

export type ItunesAudiobookEntities = "audiobookAuthor" | "audiobook";

export type ItunesShortFilmEntities = "shortFilmArtist" | "shortFilm";

export type ItunesTvShowEntities = "tvEpisode" | "tvSeason";

export type ItunesSoftwareEntities =
  | "software"
  | "iPadSoftware"
  | "macSoftware";

export type ItunesEbookEntities = "ebook";

export type ItunesAllEntities =
  | "movie"
  | "album"
  | "allArtist"
  | "podcast"
  | "musicVideo"
  | "mix"
  | "audiobook"
  | "tvSeason"
  | "allTrack";
