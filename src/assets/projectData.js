import Blog from '../public/project-images/blog.png'
import UptownLanding from '../public/project-images/uptown-landing.png'
import Bacchus from '../public/project-images/bacchus.png'
import ThemeModel from '../public/project-images/portfolio-card2.png'
import RecipeList from '../public/project-images/recipe-creator'
import TabModel from '../public/project-images/portfolio-card.png'

export const slides = [
  {
    id: 1,
    title: 'Nextjs Blog with Tailwind',
    repository: 'https://github.com/BorofskyDev/nextjs-blog-tailwind',
    liveSite:
      'https://nextjs-blog-tailwind-qhttl1i3q-joelborofskydev-gmailcom.vercel.app/',
    description:
      'A blog completed using TailwindCSS, Hygraph, and Nextjs as the framework. Using Nextjs, I was able to optimize performance as well as enhance the SEO. Likewise, I made the blog more accessibly by using an offwhite/light-gray instead of a bright white, allowing those with light sensitivity to read the blog with greater ease.',
    imageUrl: `${Blog}`,
  },
  {
    id: 2,
    title: 'Uptown Landing Rebuild',
    repository: 'https://github.com/BorofskyDev/new-rebuild',
    liveSite: 'https://gleaming-lokum-a251bf.netlify.app/',
    description:
      'A rebuild of a live site of a local apartment complex, the focus was on a redesign that fit modern design standards as well as accessability standards. I altered the color scheme slightly to allow for better contract, created a more minimalist background and overall design approach, added in alt tags on images, created more sections to tab to, and added animation to the contact form. This was all done to help provide a more attractive and accessable site, which in theory will increase sales and marketing.',
    imageUrl: `${UptownLanding}`,
  },
  {
    id: 3,
    title: 'Club Bacchus',
    repository: 'https://github.com/BorofskyDev/club-bacchus',
    liveSite: 'https://strong-florentine-202a95.netlify.app/',
    description:
      'A fictional club. I created the site to show off video-background-text as well as other design elements. While not minimalist, I followed a minimalist mindset on layout and content. Build in vanilla Javascript, I made use of modals for the fictional payment system and even set up a CSS-only credit card to function as a way for a client to enter their payment information. ',
    imageUrl: `${Bacchus}`,
  },
  {
    id: 4,
    title: 'Theme-based Model Card',
    repository: 'https://github.com/BorofskyDev/model-card-react',
    liveSite: 'https://superlative-donut-e109f9.netlify.app/',
    description:
      'A React app built on the use of hooks (useState) to allow a change in themes. The build is meant more to show how themes could change for a React build beyond a "light/dark" move as is often the case. In this example, I create a blue and red mode, both conveying different attitudes and approaches in color design as a fun way to show off React hooks.',
    imageUrl: `${ThemeModel}`,
  },
  {
    id: 5,
    title: 'Tuscan Recipe List',
    repository: 'https://github.com/BorofskyDev/tuscan-recipe-list',
    liveSite:
      'https://nextjs-blog-tailwind-qhttl1i3q-joelborofskydev-gmailcom.vercel.app/',
    description:
      'Built to show off the use of useEffect with local storage (as well as other React hooks), this recipe list allows users to save recipes to their local storage. I chose a more conservative design approach, basing the fonts and colors off Tuscany, as well as the backdrop image for the recipe creator function.',
    imageUrl: `${RecipeList}`,
  },
  {
    id: 6,
    title: 'Tab Portfolio',
    repository: 'https://github.com/BorofskyDev/interactive-profile-card',
    liveSite: 'https://glowing-tapioca-867318.netlify.app/',
    description:
      'Built to display a very simple portfolio that would be a quick build and easily scalable to a sit where users can input the data they want. The tab system is meant to show a semi-3D effect of buttons being pressed. The social media buttons also make good use of the box-shadow effect to appear to "pop" when hovered over. ',
    imageUrl: `${TabModel}`,
  },
]
