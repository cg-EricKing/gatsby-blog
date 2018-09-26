import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './Eric_Profile.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Eric King`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Eric King</strong> who lives in Charlotte, NC and works in Rock
          Hill building useful things.{' '}
          <a href="https://twitter.com/thekingdomdev">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
