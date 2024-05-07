import groq from 'groq';
import type * as Schema from '@/sanity/schema';

export const GetTitleFromSlug = groq`
  *[_type == "post" && slug.current == $slug][0].title
`;
export type GetTitleFromSlugResult = string;

export const GetArticleFromSlug = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    slug,
    title,
    mainImage,
    publishedAt,
    author->{name},
    "categories": categories[]->title,
    body
  }
`;
export type GetArticleFromSlugResult = Omit<
  Schema.Post,
  'author' | 'categories'
> & {
  author: Pick<Schema.Author, 'name'>;
  categories: Schema.Category['title'][];
};
