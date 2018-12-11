# balena-electron-vue-pidisplay

> A Raspberry Pi time and weather display project based off of [resin-electron-vue](https://github.com/imomaliev/resin-electron-vue)


#### Storing a DarkSky API Key for Develoment and Production

##### Development
Create a .env file in the root directory of your project. Add an environment variable containing your DarkSky API key on a new line in the form of DARKSKY=YOUR_API_KEY_HERE

##### Production
For a Balena (formerly Resin.io) device, create a DARKSKY device variable in the dashboard.
#### Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:9080
yarn run dev

# build electron application for production
yarn run build


# lint all JS/Vue component files in `src/`
yarn run lint

```

---

#### Feature Wishlist:

- Replace static placeholder image with a slideshow or weather map

- Serve up display remotely

---

#### Some Things Learned From Working On This Project:

- Balena on the Raspberry Pi

  https://www.balena.io/docs/learn/getting-started/raspberrypi3/nodejs/
  
- Rotating the Raspberry Pi display in a Balena application

  In the device configuration tab of the Balena dashboard, create a RESIN_HOST_CONFIG_lcd_rotate custom environment variable and give it a value of 2 to rotate the Raspberry Pi display 180 degrees.
  
- CSS Flexbox

  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
  
- Working with the DarkSky API and using cors-anywhere to access the API in a development environment.

  https://darksky.net/dev

  https://cors-anywhere.herokuapp.com/
  
- I tried using Skycons and the vue-skycon NPM module, but there seems to be a memory leak that caused the application to crash after a few days.

  https://darkskyapp.github.io/skycons/
  
  https://github.com/timleland/vue-skycon
  
---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[3a1e893](https://github.com/SimulatedGREG/electron-vue/tree/3a1e893e10e8dcfb4c5e5580810ed70f74b3a83e) using [vue-cli](https://github.com/vuejs/vue-cli).

Integrated with resin based on [resin-electronjs](https://github.com/resin-io/resin-electronjs)

Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

The weather icons used in this project come from [Weather Icons](https://erikflowers.github.io/weather-icons)
