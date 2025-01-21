import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import * as cheerio from 'cheerio';


export interface NavItem {
    title: string;
    link: string | null;
    children: NavItem[];
}


export async function getNavContent() {
    const fullpath = path.join(process.cwd(), 'contents/navbar.md');
    const fileContent = fs.readFileSync(fullpath, 'utf-8');

    const { data: metadata, content } = matter(fileContent);

    const processedContent = await remark()
        .use(html)
        .process(content);

    console.log(processedContent.toString());
    

    const jsonResult = HtmltoJson(processedContent.toString());
    return jsonResult;

}

function HtmltoJson(htmlString: string) {
    const $ = cheerio.load(htmlString);
    const navItems: NavItem[] = [];

    let currentSection: NavItem | null = null;

    $('body').children().each((_, element) => {
        const tagName = element.tagName;
        
        if (tagName === 'p' && $(element).find('a').length) {
            // Handle standalone links
            const link = $(element).find('a').attr('href') || null;
            const title = $(element).find('a').text().trim();
            navItems.push({ title, link, children: [] });
        }else if (tagName === 'p') {
            // Start a new section
            const sectionTitle = $(element).text().trim();
            currentSection = { title: sectionTitle, link: null, children: [] };
            navItems.push(currentSection);
        } else if (tagName === 'ul' && currentSection) {
            // Parse list items under the current section
            const items: NavItem[] = $(element)
                .find('li')
                .map((_, li) => {
                    const link = $(li).find('a').attr('href') || null;
                    const title = $(li).find('a').text().trim();
                    return { title, link, children: [] };
                })
                .get();

            currentSection.children.push(...items);
        } 
        
    });

    return navItems;


}