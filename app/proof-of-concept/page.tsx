import React from 'react';

import { getMarkdownContent } from '@/lib/content';
import { getHeaders } from '@/lib/headings';
import ArticleLayout from '@/components/ArticleLayout';
import Hero from '@/components/Hero';

export default async function page() {

  const { metadata, htmlString } = await getMarkdownContent('/contents/proof-of-concept.md');
  const headers = getHeaders(htmlString);

  return (
    <section id='pages' className='flex flex-col'>
      <Hero title={ metadata.title } imgUrl={ metadata.hero_image_url } />
      <ArticleLayout headers={ headers } content={ htmlString }>
      </ArticleLayout>
    </section>
  )
}
