// Import React
import React from "react"

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Phaser Webpack Games Arcade!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            by Matt Colman
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            The good 'ol days...Flash :/
          </Heading>
          <Text size={6} textColor="secondary">
            Building a Games Arcade in Flash was easy!!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            HTML5 is great!
          </Heading>
          <Text>but it's hard :(</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Webpack code-splitting</Heading>
          <Text>What do we want to achieve?</Text>
        </Slide>
      </Deck>
    )
  }
}
