import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import {
  GetArticleFromSlug,
  GetArticleFromSlugResult,
  GetTitleFromSlug,
  GetTitleFromSlugResult,
} from './groq';
import { sanityFetch, urlFor } from '@/sanity/client';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ReadArticlePage({ params }: Props) {
  const post = await sanityFetch<GetArticleFromSlugResult>({
    query: GetArticleFromSlug,
    params: { slug: params.slug },
  });

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(1920).height(1280).url()
    : null;

  return (
    <article className="flex flex-col gap-8 lg:gap-16">
      <h1 className="text-center text-3xl font-bold">{post.title}</h1>
      <Image
        src={imageUrl ?? ''}
        alt="Article image"
        width={1024}
        height={768}
        className="self-center rounded-md shadow-lg"
      />
      <div className="flex flex-col gap-4 indent-4 text-lg">
        <PortableText
          value={post.body!}
          components={{
            types: {
              image: ({ value }) => {
                if (!value?.asset?._ref) return null;
                return (
                  <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    className="mx-auto w-full rounded-md shadow-lg lg:max-w-3xl"
                    src={urlFor(value)!
                      .width(1920)
                      .height(1280)
                      .fit('max')
                      .auto('format')
                      .url()}
                  />
                );
              },
            },
          }}
        />
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: Props) {
  const title = await sanityFetch<GetTitleFromSlugResult>({
    query: GetTitleFromSlug,
    params: { slug: params.slug },
  });
  return { title };
}
