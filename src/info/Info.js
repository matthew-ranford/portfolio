import self from '../img/self.png'
import mock1 from '../img/mock1.png'
import mock2 from '../img/mock2.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import mock5 from '../img/mock5.png'

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(15, 129, 164)', 'rgb(1, 1, 1)']

/*
 * Created with https://www.css-gradient.com
 * Gradient link: https://www.css-gradient.com/?c1=0f81a4&c2=010101&gt=l&gd=dtl
 */

/*
 * Created with https://www.css-gradient.com
 * Gradient link: https://www.css-gradient.com/?c1=9b0605&c2=2c0ad0&gt=r&gd=dtl

I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Matt',
  lastName: 'Ranford',
  initials: 'mr', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🌎',
      text: 'Based in Wellington, NZ',
    },
    {
      emoji: '☕',
      text: 'Lets grab a coffee',
    },
    {
      emoji: '💼',
      text: 'Looking for work 👀',
    },
    {
      emoji: '📧',
      text: 'matt.ranford16@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://github.com/matthew-ranford',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com/in/matthew-ranford-23b759261/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://instagram.com/mattranny/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    // {
    //   link: 'https://facebook.com',
    //   icon: 'fa fa-facebook',
    //   label: 'facebook',
    // },
    // {
    //   link: 'https://twitter.com',
    //   icon: 'fa fa-twitter',
    //   label: 'twitter',
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Matt. I'm a Full-Stack Developer who has just completed a 17-week intensive boot camp learning full-stack software development at Dev Academy. This was one of the biggest challenges of my life, diving into the unknown, I still have a lot to learn and I'm excited to see where my career in tech takes me!",
  skills: {
    proficientWith: [
      'HTML5',
      'CSS',
      'JavaScript',
      'Typescript',
      'React',
      'Git',
      'Github',
      'SQLite3',
      'Express',
      'Knex',
      'Node',
      'Handlebars',
      'TDD',
      'Rest APIs',
      'Authentication',
      'Agile Methodologies',
    ],
    exposedTo: [
      'Empathy',
      'Teamwork & collaboration',
      'Communication',
      'Giving & receiving feedback',
      'Courageous conversations',
      'Well-being',
    ],
  },
  hobbies: [
    {
      label: 'Reading',
      emoji: '📖',
    },
    {
      label: 'Travel',
      emoji: '🗺️',
    },
    {
      label: 'Sport',
      emoji: '⚽',
    },
    {
      label: 'Exercise',
      emoji: '🏋🏾',
    },
    {
      label: 'Mindfulness',
      emoji: '🧠',
    },
    {
      label: 'Greenhouse',
      emoji: '🪴',
    },
    {
      label: 'Marvel movies/series',
      emoji: '🎥',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Project 1',
      live: 'https://paytonpierce.dev', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/paytonjewell', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: 'Project 2',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock2,
    },
    {
      title: 'Project 3',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock3,
    },
    {
      title: 'Project 4',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock4,
    },
    {
      title: 'Project 5',
      live: 'https://paytonpierce.dev',
      source: 'https://github.com/paytonjewell',
      image: mock5,
    },
  ],
}
