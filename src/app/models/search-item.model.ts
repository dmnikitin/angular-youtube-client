export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistic;
}

interface ThumbnailView {
  url: string;
  width: number;
  height: number;
}

interface Thumbnail {
  default: ThumbnailView;
  medium: ThumbnailView;
  high: ThumbnailView;
  standard: ThumbnailView;
  maxres: ThumbnailView;
}

interface Localized {
  title: string;
  description: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnail;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Statistic {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
