# VueJSTwitterFeed
This repo contains a VueJS component for embedding a Twitter Feed on a Vue WebApp

## Installation 

Add to your node project using:

`npm install --save vuejs-twitter-feed`

## Usage 

in main.js or equivalent:

```
import TwitterFeed from "vuejs-twitter-feed";
Vue.use(TwitterFeed);
```


Let's say you want to embed @vuejs twitter feed. Just use the following in your Vue app:

`<TwitterFeed src="https://twitter.com/vuejs?ref_src=twsrc%5Etfw"></TwitterFeed>`

For information about the different types of feeds you can embed, visit https://publish.twitter.com/.

## API

| Prop                          | Type            | Default     | Description                              |
|-------------------------------|-----------------|-------------|------------------------------------------|
| src                           | String          |             | link to the twitter feed to embed        |
| dark                          | Boolean         | False       | wether the theme should be dark or light |
| dataLinkColor                 | String          | '#2B7BB9'   | text color of embedded links in the feed |


## Screenshots

### Light theme

![light theme](doc/img/light.png)

### Dark theme

![dark theme](doc/img/dark.png)
