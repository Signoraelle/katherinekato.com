import React from 'react'
import Link from 'gatsby-link'

const Socials = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/kato_katherine'
  }, {
    name: 'Instagram',
    link: 'https://www.instagram.com/kathy.kato'
  }, {
    name: 'Dribbble',
    link: 'https://dribbble.com/kathykato'
  }, {
    name: 'CodePen',
    link: 'https://codepen.io/kathykato'
  }, {
    name: 'GitHub',
    link: 'https://github.com/kathykato'
  }
]

const ContactPage = () => (
  <div className="container">
    <div className="grid hero">
      <div className="column-xs-12">
        <h1>Feel free to say hello! Just send me an <a href="#">email</a>.</h1>
        <p>You can also find me on:</p>
        <ul className="social">
          {Socials.map(link => (
            <li><a href={link.link} target="_blank" rel="nofollow">{link.name}</a></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default ContactPage