import * as cheerio from 'cheerio';

export interface Header {
    level: string; 
    id: string;
    text: string;
}

export function getHeaders(htmlString: string) : Header[]{
    const $ = cheerio.load(htmlString);
    const headers: Header[] = [];

    $('h1, h2, h3, h4, h5, h6').each((index, element) => {
        headers.push({
            level: element.tagName.toLowerCase(), // Get the header level (h1, h2, etc.)
            id: $(element).attr('id') ?? '', // Get the ID of the header
            text: $(element).text(), // Get the text content of the header
        });
    });

    return headers;
}
