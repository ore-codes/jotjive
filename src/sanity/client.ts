//import 'server-only';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { createClient, type QueryParams } from 'next-sanity';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
};

const client = createClient(config);

async function sanityFetch<QueryResponse>(args: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(args.query, args.params ?? {}, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags: args.tags,
    },
  });
}

function urlFor(source: SanityImageSource) {
  const { projectId, dataset } = config;
  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
}

export { client, sanityFetch, urlFor };
