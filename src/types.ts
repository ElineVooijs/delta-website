export type Category = {
    name: string
}

export type Author = {
    name: string
    title: string
}

export type Asset = {
    url: string
    altText: string
}

export type Project = {
    slug: string
    title: string,
    category: string,
    author: Author,
    thumbnail: Asset
}
