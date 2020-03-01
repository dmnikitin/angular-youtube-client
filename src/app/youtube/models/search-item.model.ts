export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistic;
}

export interface ISearchItemInitial {
  kind: string;
  etag: string;
  id: IId;
  snippet: ISnippet;
}

interface IId {
  kind: string;
  videoId: string;
}

interface IStatistic {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnail;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultLanguage?: string;
  defaultAudioLanguage: string;
}

interface IThumbnailView {
  url: string;
  width: number;
  height: number;
}

interface IThumbnail {
  default: IThumbnailView;
  medium: IThumbnailView;
  high: IThumbnailView;
  standard: IThumbnailView;
  maxres: IThumbnailView;
}

interface ILocalized {
  title: string;
  description: string;
}
