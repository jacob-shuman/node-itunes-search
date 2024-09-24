export type ItunesAttributes =
  | ItunesMovieAttributes
  | ItunesPodcastAttributes
  | ItunesMusicAttributes
  | ItunesMusicVideoAttributes
  | ItunesAudiobookAttributes
  | ItunesShortFilmAttributes
  | ItunesSoftwareAttributes
  | ItunesTvShowAttributes
  | ItunesAllAttributes;

export type ItunesMovieAttributes =
  | "actorTerm"
  | "genreIndex"
  | "artistTerm"
  | "shortFilmTerm"
  | "producerTerm"
  | "ratingTerm"
  | "directorTerm"
  | "releaseYearTerm"
  | "featureFilmTerm"
  | "movieArtistTerm"
  | "movieTerm"
  | "ratingIndex"
  | "descriptionTerm";

export type ItunesPodcastAttributes =
  | "titleTerm"
  | "languageTerm"
  | "authorTerm"
  | "genreIndex"
  | "artistTerm"
  | "ratingIndex"
  | "keywordsTerm"
  | "descriptionTerm";

export type ItunesMusicAttributes =
  | "mixTerm"
  | "genreIndex"
  | "artistTerm"
  | "composerTerm"
  | "albumTerm"
  | "ratingIndex"
  | "songTerm";

export type ItunesMusicVideoAttributes =
  | "genreIndex"
  | "artistTerm"
  | "albumTerm"
  | "ratingIndex"
  | "songTerm";

export type ItunesAudiobookAttributes =
  | "titleTerm"
  | "authorTerm"
  | "genreIndex"
  | "ratingIndex";

export type ItunesShortFilmAttributes =
  | "genreIndex"
  | "artistTerm"
  | "shortFilmTerm"
  | "ratingIndex"
  | "descriptionTerm";

export type ItunesSoftwareAttributes = "softwareDeveloper";

export type ItunesTvShowAttributes =
  | "genreIndex"
  | "tvEpisodeTerm"
  | "showTerm"
  | "tvSeasonTerm"
  | "ratingIndex"
  | "descriptionTerm";

export type ItunesAllAttributes =
  | "allArtistTerm"
  | "allTrackTerm"
  | ItunesMovieAttributes
  | ItunesPodcastAttributes
  | ItunesMusicAttributes
  | ItunesMusicVideoAttributes
  | ItunesAudiobookAttributes
  | ItunesShortFilmAttributes
  | ItunesTvShowAttributes;
