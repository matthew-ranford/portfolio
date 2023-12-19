import self from '../img/self.png'
import mock0 from '../img/mock0.png'
import mock1 from '../img/mock1.png'
import mock2 from '../img/mock2.png'
import mock3 from '../img/mock3.png'
import mock4 from '../img/mock4.png'
import mock5 from '../img/mock5.png'
import mock6 from '../img/mock6.png'
import mock7 from '../img/mock7.png'

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
      text: (
        <a href="mailto:matt.ranford16@gmail.com">matt.ranford16@gmail.com</a>
      ),
    },
  ],
  socials: [
    {
      link: 'https://github.com/matthew-ranford',
      icon: 'fa-brands fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com/in/matthew-ranford-23b759261/',
      icon: 'fa-brands fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://codepen.io/matthew-ranford',
      icon: 'fa-brands fa-codepen',
      label: 'medium',
    },
    {
      link: 'https://instagram.com/mattranny/',
      icon: 'fa-brands fa-instagram',
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
  bio: "Hello! I'm Matt. I'm a Full-Stack Developer whose recently completed a 17-week intensive boot camp learning full-stack software development at Dev Academy. I've tried various roles in my life, none of them have stuck so this was one of the biggest challenges of my life, diving into the unknown. I still have a lot to learn, but I'm excited to see where my career in tech takes me!",
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
    // live : //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
    // source : // this should be a link to the **repository** of the project, where the code is hosted.

    {
      title: 'Dev Academy Bootcamp - Final Group Project',
      // live: ,
      description:
        'An application to create timeslots so that a friend may make an appointment with you',
      source: 'https://github.com/matthew-ranford/friend-booking',
      image: mock2,
    },
    {
      title: 'Dev Academy Bootcamp/Home - In Progress',
      live: 'http://matt-fullstack-wd04.devacademy.nz/',
      description:
        "A fullstack solo project i'm currently working on to track the items you've lent to people",
      source: 'https://github.com/matthew-ranford/item-tracker',
      image: mock7,
    },
    {
      title: 'Dev Academy Bootcamp - Group Project',
      // live: ,
      description:
        'A fun project which is like whack-a-mole but with aliens & cows',
      source: 'https://github.com/matthew-ranford/dairy-farm-simulator',
      image: mock1,
    },
    {
      title: 'Dev Academy Bootcamp - Group Project',
      // live: ,
      description:
        'Another fun project which tracked weather information to check soil moisture for worms',
      source: 'https://github.com/matthew-ranford/weather-4-worms',
      image: mock6,
    },
    {
      title: 'Dev Academy Bootcamp - Group Project',
      // live: ,
      description: 'A project to track all food orders within a food court',
      source: 'https://github.com/matthew-ranford/foodcourt',
      image: mock0,
    },
    {
      title: 'Dev Academy Foundations',
      live: 'https://matthew-ranford.github.io/',
      description: 'My foundations blog created before starting bootcamp',
      source: 'https://github.com/matthew-ranford/matthew-ranford.github.io',
      image: mock3,
    },
    {
      title: 'Pre Dev Academy',
      live: 'https://matthew-ranford.github.io/complete-building-solutions-website-concept/',
      description: 'A concept design for a family members business',
      source:
        'https://github.com/matthew-ranford/complete-building-solutions-website-concept',
      image: mock5,
    },
    {
      title: 'Pre Dev Academy',
      live: 'https://matthew-ranford.github.io/freecodecamp-personal-portfolio-webpage/',
      description:
        'A portfolio i created while learning through Free Code Camp',
      source:
        'https://github.com/matthew-ranford/freecodecamp-personal-portfolio-webpage',
      image: mock4,
    },
  ],
}
