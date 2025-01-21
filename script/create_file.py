import os

# Function to create .tsx file for a given markdown filename
def create_tsx_file(md_filename):
    # Extract the custom name (slug) from the markdown file name (without the .md extension)
    custom_name = os.path.splitext(md_filename)[0]
    
    # Create the folder for the page (app router structure)
    page_folder = os.path.join('app', custom_name)  # e.g., app/description
    
    # Ensure the folder exists
    if not os.path.exists(page_folder):
        os.makedirs(page_folder)
        print(f"Created folder: {page_folder}")
    
    # Prepare the content of the .tsx file
    tsx_content = f'''import React from 'react';

import {{ getMarkdownContent }} from '@/lib/content';
import {{ getHeaders }} from '@/lib/headings';
import ArticleLayout from '@/components/ArticleLayout';
import Hero from '@/components/Hero';

export default async function page() {{

  const {{ metadata, htmlString }} = await getMarkdownContent('/contents/{custom_name}.md');
  const headers = getHeaders(htmlString);

  return (
    <section id='pages' className='flex flex-col'>
      <Hero title={{ metadata.title }} imgUrl={{ metadata.hero_image_url }} />
      <ArticleLayout headers={{ headers }} content={{ htmlString }}>
      </ArticleLayout>
    </section>
  )
}}
'''

    # Define the path for the page.tsx file
    tsx_filename = os.path.join(page_folder, 'page.tsx')
    
    # Write the content to the page.tsx file
    with open(tsx_filename, 'w') as tsx_file:
        tsx_file.write(tsx_content)

    print(f"Generated {tsx_filename}")

# List of markdown filenames (you can add more files here)
md_files = [
    'attribution.md',
    'contribution.md',
    'description.md',
    'engineering.md',
    'experiments.md',
    'human-practices.md',
    'notebook.md',
    'proof-of-concept.md',
    'protocols.md',
    'result.md',
    'safety.md',
    'member.md',
]

# Create .tsx files for each markdown file
for md_file in md_files:
    create_tsx_file(md_file)
