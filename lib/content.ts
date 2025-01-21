import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownContent(filepath: string) {
    const fullpath = path.join(process.cwd(), filepath);
    const fileContent = fs.readFileSync(fullpath, 'utf-8');

    const {data:metadata, content} = matter(fileContent);

    const processedContent = await remark()
    .use(html)
    .process(content);
    

    let htmlString: string = processedContent.toString();

    // Add custom handling for headers with id and class
    htmlString = htmlString.replace(
        /<h([1-6])>(.*?)\s*{#([^ ]+)(?:\s+\.([^}]+))?}<\/h\1>/g,
        (match, level, text, id, className) => {
            const classAttr = className ? ` class="${className}"` : '';
            return `<h${level} id="${id}"${classAttr}>${text}</h${level}>`;
        }
    );

    // Change image to figure
    htmlString = htmlString.replace(
        /<p>\s*<img([^>]+)>\s*<em>(.*?)<\/em>\s*<\/p>/g,
        (match, imgAttributes, captionText) => {
          return `<figure><img${imgAttributes}><figcaption>${captionText}</figcaption></figure>`;
        }
      );    


    return {metadata ,htmlString};
}