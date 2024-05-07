import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { GetAllPostResultItem } from '@/app/(guest)/articles/groq';
import { urlFor } from '@/sanity/client';

export default function ArticleCard({ post }: { post: GetAllPostResultItem }) {
  const imageUrl = useMemo(() => {
    if (post.mainImage) {
      return urlFor(post.mainImage)?.width(550).height(310).url();
    }
  }, [post.mainImage]);

  return (
    <Link href={`/articles/${post.slug?.current}`}>
      <article className="flex flex-col gap-4 self-center rounded-md bg-white shadow-lg dark:bg-neutral-800">
        <Image
          src={imageUrl ?? 'https://via.placeholder.com/550x310'}
          alt="Article main image"
          className="rounded-t-md"
          width={550}
          height={310}
        />
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-2xl font-semibold text-brand dark:text-light">
            {post.title}
          </h3>
          <div className="text-right dark:text-light">{post.author?.name} </div>
        </div>
      </article>
    </Link>
  );
}
