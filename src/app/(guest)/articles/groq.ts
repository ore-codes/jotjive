import groq from 'groq';
import type * as Schema from '@/sanity/schema';

export const GetAllPosts = groq`*[_type == "post"]{
  _id,
  slug,
  title,
  mainImage,
  author->{name},
} | order(publishedAt desc)`;

export type GetAllPostResultItem = Omit<
  Pick<Schema.Post, '_id' | 'title' | 'mainImage' | 'slug'>,
  'author'
> & {
  author: Pick<Schema.Author, 'name'>;
};

export type GetAllPostResult = GetAllPostResultItem[];
