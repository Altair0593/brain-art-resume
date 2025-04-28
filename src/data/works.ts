type Category = 'design' | 'illustration'

export interface Work {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: Category;
  images: string[];
}

export const DESIGN_WORKS: Work[] = [
  {
    id: 'epic-music-cover',
    title: 'The Epic music cover',
    description: 'Music cover design with an epic feel.',
    fullDescription: 'A music cover design intended to evoke an epic and powerful atmosphere for a specific genre and artist.',
    category: 'design',
    images: [
      '/images/works/design/epick-music-disc-cover.jpg',
    ]
  },
  {
    id: 'magazine-layouts',
    title: 'Magazine layouts',
    description: 'A tastefully crafted cover and elegantly structured layout for EAT magazine.',
    fullDescription: 'A tastefully crafted cover and elegantly structured layout for EAT magazine. Every page is a harmonious blend of refined typography, vibrant imagery, and clean, appetizing design — inviting readers into a world where food becomes an art form.',
    category: 'design',
    images: [
      '/images/works/design/magazine-layouts/pancakes.jpg',
      '/images/works/design/magazine-layouts/fish.jpg',
      '/images/works/design/magazine-layouts/coffee-page.jpg',
      '/images/works/design/magazine-layouts/the-art-of-meat.jpg',
      '/images/works/design/magazine-layouts/luxury-magazine-1.jpg',
      '/images/works/design/magazine-layouts/businki-1.jpg',
      '/images/works/design/magazine-layouts/crush-1.jpg',
    ]
  },
  {
    id: 'instagram-pages',
    title: 'The instagram pages',
    description: 'Design concepts for Instagram content layouts.',
    fullDescription: 'Various design concepts and layouts created for Instagram pages, showcasing different styles and content arrangements for effective visual communication.',
    category: 'design',
    images: [
      '/images/works/design/instagram-example.jpg',
      '/images/works/design/instagram-covers-2.jpg',
      '/images/works/design/instagram-covers-3.jpg',
      '/images/works/design/instagram-covers-4.jpg',
    ]
  },
  {
    id: 'moon-movie-poster',
    title: 'The movie moon poster',
    description: 'A poster design for a movie with a moon theme.',
    fullDescription: 'The worra movie poster The poster for Worra reveals a world on the brink of chaos — two opposing layers of society locked in silent confrontation. Beneath the surface, an invisible matrix of power manipulates reality, fueling a rising tension that threatens to ignite a war between worlds.',
    category: 'design',
    images: [
      '/images/works/design/moon-movie-poster.jpg',
    ]
  },
  {
    id: 'smm-instagram-content',
    title: 'SMM Content for Instagram // Various Themes with Creative Techniques',
    description: 'A collection of Instagram posts created for different themes.',
    fullDescription: 'A collection of Instagram posts created for different themes, each crafted with a unique approach to catch the audience’s eye. I applied a variety of creative techniques, such as dynamic layouts, bold typography, and striking visuals, to ensure each post stands out.',
    category: 'design',
    images: [
      '/images/works/design/instagram-covers.jpg',
    ]
  },
  {
    id: 'orian-movie-poster',
    title: 'The Orian movie poster',
    description: 'A promotional poster for a movie titled "Orian".',
    fullDescription: 'Against the backdrop of an ancient Asian temple, warrior-clad women stand poised for battle, embodying the spirit of untold adventures across distant lands. A fading wisp of smoke from a candle subtly reveals the silhouette of a dragon, while in the deeper shadows, a pair of sinister eyes watches from above, hinting at unseen dangers that lie ahead.',
    category: 'design',
    images: [
      '/images/works/design/orian-movie-poster.jpg',
    ]
  },
  {
    id: 'news-paper-cover',
    title: 'Creative Collage // The New York Times',
    description: 'A vibrant collage created in a striking purple and yellow color palette.',
    fullDescription: 'A vibrant collage created in a striking purple and yellow color palette, symbolizing the historical significance and tireless work of The New York Times. The design combines bold, dynamic elements to honor the legacy of the iconic newspaper while reflecting its enduring influence in the world of journalism.',
    category: 'design',
    images: [
      '/images/works/design/news-paper-cover.jpg',
    ]
  },
  {
    id: 'perfume-advertisement',
    title: 'The perfume advertisement',
    description: 'A refined visual concept capturing the elegance and emotion of the fragrance.',
    fullDescription: 'A refined visual concept capturing the elegance and emotion of the fragrance.',
    category: 'design',
    images: [
      '/images/works/design/perfume-advertisement.jpg',
    ]
  },
  {
    id: 'art-space-promo-photo-exhibition',
    title: 'Art Space Promo // Photo Exhibition',
    description: 'A dynamic and visually-rich poster',
    fullDescription: 'A dynamic and visually-rich poster, crafted with multiple design effects to promote a creative space during a curated photo exhibition.',
    category: 'design',
    images: [
      '/images/works/design/photo-competition-cover.jpg',
    ]
  },
  {
    // Done
    id: 'railway-advertisement-poster',
    title: 'The railway advertisement poster',
    description: 'A visual pause in the rush. This metro poster was designed to promote Railway.',
    fullDescription: 'A visual pause in the rush. This metro poster was designed to promote Railway — a smart travel app that simplifies your commute. Set against the calm of an empty platform, the visual invites passersby to imagine a smoother, more convenient journey. Minimalist yet powerful, the design uses stillness and space to cut through noise and catch attention. Clear CTA leads directly to download — turning a quiet moment into action.',
    category: 'design',
    images: [
      '/images/works/design/railway-advertisement-cover.jpg',
    ]
  },
  {
    id: 'recipes-book-cover',
    title: 'The recipes book cover',
    description: 'A cover design for a book containing recipes.',
    fullDescription: 'A visually appealing cover design for a cookbook, intended to attract readers interested in cooking and the types of recipes included in the book.',
    category: 'design',
    images: [
      '/images/works/design/recipes-book-cover.jpg',
    ]
  },
  {
    id: 'sends-of-time-cartoon',
    title: 'The "sends of time" cartoon',
    description: 'Cartoon illustration related to the concept of "sends of time".',
    fullDescription: 'The poster for Sends of Time captures three adventurous friends leaving behind their hometown, guided by a majestic whale across unknown lands. With every step, new challenges await, and unexpected heroes are yet to be discovered. What adventures lie ahead, and who will they meet on their journey?',    category: 'design',
    images: [
      '/images/works/design/sends-of-time-cartoon.jpg',
    ]
  },
  {
    id: 'poster-plastic-&-environment',
    title: 'Poster // Plastic & Environment',
    description: 'Designed to highlight the environmental impact of plastic through bold and thought-provoking visuals.',
    fullDescription: 'Designed to highlight the environmental impact of plastic through bold and thought-provoking visuals.',
    category: 'design',
    images: [
      '/images/works/design/social-advertisement-cover.jpg',
    ]
  },
  {
    id: 'welarion-movie-poster',
    title: 'The welarion movie poster',
    description: 'A promotional poster for a movie titled "Welarion".',
    fullDescription: 'In the boundless world of Welarion, colossal cities rise under endless skies, and ancient magic stirs in every shadow. Mythical creatures roam forgotten lands, guarding secrets as old as time itself. This is a realm where wonder and danger walk hand in hand, and every path leads deeper into the heart of a breathtaking, untamed legend.',
    category: 'design',
    images: [
      '/images/works/design/welarion-movie-poster.jpg',
    ]
  },
  {
    id: 'worra-movie-poster',
    title: 'The worra movie poster',
    description: 'A promotional poster for a movie titled "Worra".',
    fullDescription: 'The poster for Worra reveals a world on the brink of chaos — two opposing layers of society locked in silent confrontation. Beneath the surface, an invisible matrix of power manipulates reality, fueling a rising tension that threatens to ignite a war between worlds.',  category: 'design',
    images: [
      '/images/works/design/worra-movie-poster.jpg',
    ]
  },
  {
    id: 'cook-book-cover',
    title: 'The cook book cover',
    description: 'A cover design for a culinary-themed book.',
    fullDescription: 'A visually appealing cover design for a cookbook, intended to attract readers interested in cooking and the types of recipes included in the book. The book was created according to the client’s specifications for Amazon.',
    category: 'design',
    images: [
      '/images/works/design/cook-book-cover.jpg',
    ]
  },
  {
    id: 'package-branding',
    title: 'Packaging design for fragrance products',
    description: 'Visual design for product packaging and branding elements.',
    fullDescription: 'Thanks to the artistic vision and responsible approach, together with the Customer, the design of the packaging of aromatic products was selected and formed (photos of the products were taken by the Customer). Subsequently, the design was prepared for printing, and the boxes, stickers for sprayers, and instructions were printed. Successful and stylish design contributed to the popularization of quality products.\n photo by le_flavor',
    category: 'design',
    images: [
      '/images/works/design/perfume-package-1.jpg',
      '/images/works/design/perfume-package-3.jpg',
      '/images/works/design/perfume-package-2.jpg',
    ]
  },
  {
    id: 'urban-plan-360',
    title: 'The Urban plan posters',
    description: 'Poster for the Urban plan site',
    fullDescription: `
      <p>
        Following the client’s creative vision and clear technical specifications,
        a series of collages were developed to enhance the visual impact and express
        creative thinking for a platform dedicated to managing urban life and community development.
      </p>
      <p>
        This platform is designed to coordinate the efforts of citizens, authorities,
        investors, and businesses, paving the way for economic and social growth.
      </p>
      <a href="https://urbanplan360.com" target="_blank" rel="noopener noreferrer">
        urbanplan360.com
      </a>
    `,
    category: 'design',
    images: [
      '/images/works/design/urbanplan360.com-1.png',
      '/images/works/design/urbanplan360.com-4.png',
      '/images/works/design/urbanplan360.com-3.png',
      '/images/works/design/urbanplan360.com-5.png',
      '/images/works/design/urbanplan360.com-2.png',
    ]
  },
  {
    id: 'tea-logo-branding',
    title: 'The Gift of Shiva',
    description: 'Logo and packaging for highland tea',
    fullDescription: 'The designed, logo, preview, and label for the packaging of “Carlisle” highland tea, harvested in the mountains. The design uses vibrant colors — yellow, blue, and green — to highlight the natural freshness of the tea. The “Dar Shivi” font adds elegance, and the cup of tea on the label symbolizes the unfolding aroma of the mountains. This project effectively conveys the atmosphere of health and naturalness, making the packaging attractive and memorable.',
    category: 'design',
    images: [
      '/images/works/design/tea-logo-branding.jpg',
      '/images/works/design/shivas-gift-1.png',
      '/images/works/design/shivas-gift-2.png',
    ]
  },
  {
    id: 'logo-design',
    title: 'The various logo designs',
    description: 'Logo and packaging for highland tea',
    fullDescription: 'The designed, logo, preview, and label for the packaging of “Carlisle” highland tea, harvested in the mountains. The design uses vibrant colors — yellow, blue, and green — to highlight the natural freshness of the tea. The “Dar Shivi” font adds elegance, and the cup of tea on the label symbolizes the unfolding aroma of the mountains. This project effectively conveys the atmosphere of health and naturalness, making the packaging attractive and memorable.',
    category: 'design',
    images: [
      '/images/works/design/logo-design/logo-design-1.jpg',
      '/images/works/design/logo-design/logo-design-3.png',
      '/images/works/design/logo-design/logo-design-2.jpg',
      '/images/works/design/logo-design/logo-design-4.jpg',
      '/images/works/design/logo-design/logo-design-5.jpg',
    ]
  },
];

const ILLUSTRATOR_WORKS: Work[] = [
  {
    id: 'post-card-for-dad',
    title: 'The post card for a dad',
    description: 'Congratulating your loved ones on the holidays is the best way to express your feelings',
    fullDescription: 'Congratulating your loved ones on the holidays is the best way to express your feelings for them, and a beautiful card will help you do it.',
    category: 'illustration',
    images: [
      '/images/works/illustration/postcards/blue-velvet.png',
      '/images/works/illustration/postcards/postcard.jpg',
    ]
  },
  {
    id: 'book-cover',
    title: 'The Book Cover',
    description: 'Cover of a collection of simplified French songs for piano.',
    fullDescription: 'Cover of a collection of simplified French songs for piano.',
    category: 'illustration',
    images: [
      '/images/works/illustration/book-cover/book-cover-1.jpg',
    ]
  },
  {
    id: 'wholesome-fruits',
    title: 'Wholesome fruits',
    description: 'Still life “Healthy fruits”',
    fullDescription: 'Still life “Healthy fruits”',
    category: 'illustration',
    images: [
      '/images/works/illustration/pictures/painting-for-the-kitchen.jpg',
    ]
  },
  {
    id: 'bouquet',
    title: 'Bouquet',
    description: 'The variety of flavors and smells provides inspiration for a picturesque picture. Even such a bouquet will be appreciated in the kitchen.”',
    fullDescription: 'The variety of flavors and smells provides inspiration for a picturesque picture. Even such a bouquet will be appreciated in the kitchen.',
    category: 'illustration',
    images: [
      '/images/works/illustration/pictures/painting-for-the-kitchen-2.jpg',
    ]
  },
  {
    id: 'orchid',
    title: 'The Orchid',
    description: 'One of the walls of your apartment can claim your creative idea',
    fullDescription: 'One of the walls of your apartment can claim your creative idea. This image is one of the examples of how your living room can look like.',
    category: 'illustration',
    images: [
      '/images/works/illustration/orchid.jpg',
    ]
  },
  {
    id: 'bag-design',
    title: 'Сolorful fruits',
    description: 'It\'s better to shop with an eco-friendly shopper',
    fullDescription: 'It\'s better to shop with an eco-friendly shopper. And it\'s even better to go shopping with a nice eco-friendly shopper, expressing your thoughts and dreams with art on it.',
    category: 'illustration',
    images: [
      '/images/works/illustration/bag.jpg',
    ]
  },
  {
    id: 'music-disk',
    title: 'Dreams dog',
    description: 'An original birthday gift, as an option - a collection of your favorite songs by your favorite artist',
    fullDescription: 'An original birthday gift, as an option - a collection of your favorite songs by your favorite artist. One of the options for a disk cover, to cheer up, not only with a musical note, but also with its image.',
    category: 'illustration',
    images: [
      '/images/works/illustration/music-disk.jpg',
    ]
  },
  {
    id: 'book-cover-catch',
    title: 'The Catch',
    description: 'The book inspires and wins the heart of the reader',
    fullDescription: 'The book inspires and wins the heart of the reader. Thanks to my fabulous illustrations, your book will leave you with only pleasant feelings of fairy tales and inspiration.',
    category: 'illustration',
    images: [
      '/images/works/illustration/book-cover/catch.png',
      '/images/works/illustration/book-cover/book-cover-2.jpg',
    ]
  },
  {
    id: 'art-cup',
    title: 'Good morning',
    description: 'Drinking from a nice mug with an original illustration and a witty joke.',
    fullDescription: 'Sometimes it\'s not quite “Good morning,” but a hot mug of your favorite drink can help. I suggest drinking from a nice mug with an original illustration and a witty joke.',
    category: 'illustration',
    images: [
      '/images/works/illustration/art-cup.jpg',
    ]
  },
  {
    id: 'sunflowers',
    title: 'The Sunflowers',
    description: 'The picture of sunflowers',
    fullDescription: 'The picture of sunflowers',
    category: 'illustration',
    images: [
      '/images/works/illustration/sunflowers.jpg',
    ]
  },
  {
    id: 'roses',
    title: 'The Roses',
    description: 'The picture of roses',
    fullDescription: 'The picture of roses',
    category: 'illustration',
    images: [
      '/images/works/illustration/roses.jpg',
    ]
  },
  {
    id: 'perfect-breakfast',
    title: 'The Perfect Breakfast',
    description: 'The Perfect Breakfast',
    category: 'illustration',
    images: [
      '/images/works/illustration/perfect-breakfast/perfect-breakfast-1.jpg',
      '/images/works/illustration/perfect-breakfast/perfect-breakfast-2.jpg',
      '/images/works/illustration/perfect-breakfast/perfect-breakfast-3.jpg',
    ]
  },
  {
    id: 'field',
    title: 'The picture of a field',
    description: 'The picture of a field',
    category: 'illustration',
    images: [
      '/images/works/illustration/field.jpg',
    ]
  },
];

const WORKS: Record<Category, Work[]> = {
  design: DESIGN_WORKS,
  illustration: ILLUSTRATOR_WORKS
}

export const MERGED_WORKS = [...DESIGN_WORKS, ...ILLUSTRATOR_WORKS]

export const getWorksByCategory = (category: Category) => {
  return WORKS[category] || [];
};
