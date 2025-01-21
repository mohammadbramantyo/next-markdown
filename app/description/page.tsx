import React from 'react';

import { getMarkdownContent } from '@/lib/content';
import { getHeaders } from '@/lib/headings';
import ArticleLayout from '@/components/ArticleLayout';
import { getNavContent } from '@/lib/navbar';

export default async function page() {

  const content = await getMarkdownContent('/contents/project-description.md');
  const headers = getHeaders(content); 
  
  
  return (
    <ArticleLayout headers={headers} content={content}>
    </ArticleLayout>
  )
}
