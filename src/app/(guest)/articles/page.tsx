import { Metadata } from 'next';
import { GetAllPostResult, GetAllPosts } from './groq';
import ContributeAdCard from '@/chunks/ContributeAdCard';
import ArticleCard from '@/components/ArticleCard';
import { sanityFetch } from '@/sanity/client';

export default async function ArticlesPage() {
  const posts = await sanityFetch<GetAllPostResult>({ query: GetAllPosts });

  return (
    <>
      <ContributeAdCard />
      <h2 className="text-2xl font-semibold">Featured Articles</h2>
      <div className="grid lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Featured Articles',
  description: 'Explore all featured, trending and top articles at JotJive',
};
