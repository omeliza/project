export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Json: any;
  Long: any;
};

export type Article = _Document & _Linkable & {
  __typename?: 'Article';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
  published?: Maybe<Scalars['Date']>;
  seo_description?: Maybe<Scalars['Json']>;
  seo_image?: Maybe<Scalars['Json']>;
  seo_title?: Maybe<Scalars['Json']>;
  slices?: Maybe<Array<ArticleSlices>>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type ArticleConnectionConnection = {
  __typename?: 'ArticleConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArticleConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ArticleConnectionEdge = {
  __typename?: 'ArticleConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Article;
};

export type ArticleSlices = ArticleSlicesImage | ArticleSlicesText | ArticleSlicesVideo;

export type ArticleSlicesImage = {
  __typename?: 'ArticleSlicesImage';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<ArticleSlicesImageVariation>;
};

export type ArticleSlicesImageDefault = {
  __typename?: 'ArticleSlicesImageDefault';
  primary?: Maybe<ArticleSlicesImageDefaultPrimary>;
};

export type ArticleSlicesImageDefaultPrimary = {
  __typename?: 'ArticleSlicesImageDefaultPrimary';
  image?: Maybe<Scalars['Json']>;
};

export type ArticleSlicesImageVariation = ArticleSlicesImageDefault;

export type ArticleSlicesText = {
  __typename?: 'ArticleSlicesText';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<ArticleSlicesTextVariation>;
};

export type ArticleSlicesTextDefault = {
  __typename?: 'ArticleSlicesTextDefault';
  primary?: Maybe<ArticleSlicesTextDefaultPrimary>;
};

export type ArticleSlicesTextDefaultPrimary = {
  __typename?: 'ArticleSlicesTextDefaultPrimary';
  text?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type ArticleSlicesTextVariation = ArticleSlicesTextDefault;

export type ArticleSlicesVideo = {
  __typename?: 'ArticleSlicesVideo';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<ArticleSlicesVideoVariation>;
};

export type ArticleSlicesVideoDefault = {
  __typename?: 'ArticleSlicesVideoDefault';
  primary?: Maybe<ArticleSlicesVideoDefaultPrimary>;
};

export type ArticleSlicesVideoDefaultPrimary = {
  __typename?: 'ArticleSlicesVideoDefaultPrimary';
  caption?: Maybe<Scalars['Json']>;
  poster?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  video?: Maybe<Scalars['Json']>;
};

export type ArticleSlicesVideoVariation = ArticleSlicesVideoDefault;

export type Frontpage = _Document & _Linkable & {
  __typename?: 'Frontpage';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  description?: Maybe<Scalars['Json']>;
  seo_description?: Maybe<Scalars['Json']>;
  seo_image?: Maybe<Scalars['Json']>;
  seo_title?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type FrontpageConnectionConnection = {
  __typename?: 'FrontpageConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FrontpageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type FrontpageConnectionEdge = {
  __typename?: 'FrontpageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Frontpage;
};

export type Layout = _Document & _Linkable & {
  __typename?: 'Layout';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  default_seo_description?: Maybe<Scalars['Json']>;
  default_seo_image?: Maybe<Scalars['Json']>;
  default_seo_title?: Maybe<Scalars['Json']>;
  seo_title_template?: Maybe<Scalars['Json']>;
  title_template?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type LayoutConnectionConnection = {
  __typename?: 'LayoutConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LayoutConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type LayoutConnectionEdge = {
  __typename?: 'LayoutConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Layout;
};

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

export type Page = _Document & _Linkable & {
  __typename?: 'Page';
  _linkType?: Maybe<Scalars['String']>;
  _meta: Meta;
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
  seo_description?: Maybe<Scalars['Json']>;
  seo_image?: Maybe<Scalars['Json']>;
  seo_title?: Maybe<Scalars['Json']>;
  slices?: Maybe<Array<PageSlices>>;
  title?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type PageConnectionConnection = {
  __typename?: 'PageConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PageConnectionEdge = {
  __typename?: 'PageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PageSlices = PageSlicesImage | PageSlicesText | PageSlicesVideo;

export type PageSlicesImage = {
  __typename?: 'PageSlicesImage';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PageSlicesImageVariation>;
};

export type PageSlicesImageDefault = {
  __typename?: 'PageSlicesImageDefault';
  primary?: Maybe<PageSlicesImageDefaultPrimary>;
};

export type PageSlicesImageDefaultPrimary = {
  __typename?: 'PageSlicesImageDefaultPrimary';
  image?: Maybe<Scalars['Json']>;
};

export type PageSlicesImageVariation = PageSlicesImageDefault;

export type PageSlicesText = {
  __typename?: 'PageSlicesText';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PageSlicesTextVariation>;
};

export type PageSlicesTextDefault = {
  __typename?: 'PageSlicesTextDefault';
  primary?: Maybe<PageSlicesTextDefaultPrimary>;
};

export type PageSlicesTextDefaultPrimary = {
  __typename?: 'PageSlicesTextDefaultPrimary';
  text?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
};

export type PageSlicesTextVariation = PageSlicesTextDefault;

export type PageSlicesVideo = {
  __typename?: 'PageSlicesVideo';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variation?: Maybe<PageSlicesVideoVariation>;
};

export type PageSlicesVideoDefault = {
  __typename?: 'PageSlicesVideoDefault';
  primary?: Maybe<PageSlicesVideoDefaultPrimary>;
};

export type PageSlicesVideoDefaultPrimary = {
  __typename?: 'PageSlicesVideoDefaultPrimary';
  caption?: Maybe<Scalars['Json']>;
  poster?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  video?: Maybe<Scalars['Json']>;
};

export type PageSlicesVideoVariation = PageSlicesVideoDefault;

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allArticles: ArticleConnectionConnection;
  allFrontpages: FrontpageConnectionConnection;
  allLayouts: LayoutConnectionConnection;
  allPages: PageConnectionConnection;
  article?: Maybe<Article>;
  frontpage?: Maybe<Frontpage>;
  layout?: Maybe<Layout>;
  page?: Maybe<Page>;
};


export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDocumentsBy>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortArticley>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereArticle>;
};


export type QueryAllFrontpagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortFrontpagey>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereFrontpage>;
};


export type QueryAllLayoutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortLayouty>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WhereLayout>;
};


export type QueryAllPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  fulltext?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  lang?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortPagey>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tags_in?: InputMaybe<Array<Scalars['String']>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<WherePage>;
};


export type QueryArticleArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryFrontpageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryLayoutArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryPageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

export enum SortArticley {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  PublishedAsc = 'published_ASC',
  PublishedDesc = 'published_DESC',
  SeoDescriptionAsc = 'seo_description_ASC',
  SeoDescriptionDesc = 'seo_description_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortFrontpagey {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoDescriptionAsc = 'seo_description_ASC',
  SeoDescriptionDesc = 'seo_description_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortLayouty {
  DefaultSeoDescriptionAsc = 'default_seo_description_ASC',
  DefaultSeoDescriptionDesc = 'default_seo_description_DESC',
  DefaultSeoTitleAsc = 'default_seo_title_ASC',
  DefaultSeoTitleDesc = 'default_seo_title_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoTitleTemplateAsc = 'seo_title_template_ASC',
  SeoTitleTemplateDesc = 'seo_title_template_DESC',
  TitleTemplateAsc = 'title_template_ASC',
  TitleTemplateDesc = 'title_template_DESC'
}

export enum SortPagey {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SeoDescriptionAsc = 'seo_description_ASC',
  SeoDescriptionDesc = 'seo_description_DESC',
  SeoTitleAsc = 'seo_title_ASC',
  SeoTitleDesc = 'seo_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type WhereArticle = {
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** published */
  published?: InputMaybe<Scalars['Date']>;
  /** published */
  published_after?: InputMaybe<Scalars['Date']>;
  /** published */
  published_before?: InputMaybe<Scalars['Date']>;
  /** seo_description */
  seo_description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereFrontpage = {
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_description */
  seo_description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

export type WhereLayout = {
  /** default_seo_description */
  default_seo_description_fulltext?: InputMaybe<Scalars['String']>;
  /** default_seo_title */
  default_seo_title_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_title_template */
  seo_title_template_fulltext?: InputMaybe<Scalars['String']>;
  /** title_template */
  title_template_fulltext?: InputMaybe<Scalars['String']>;
};

export type WherePage = {
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_description */
  seo_description_fulltext?: InputMaybe<Scalars['String']>;
  /** seo_title */
  seo_title_fulltext?: InputMaybe<Scalars['String']>;
  /** title */
  title_fulltext?: InputMaybe<Scalars['String']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  _linkType?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  _linkType?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  _linkType?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};
