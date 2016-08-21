import http from 'http';
import browserify from 'browserify';
import literalify from 'literalify';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MapView from '../../view/components/MapView';
import App from '../../view/App'
import configureStore from '../../view/store/configureStore'
import { Provider } from 'react-redux'
import { add } from '../../data/donor-agent'

//import nothing from '../../view/index';

let DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script, link = DOM.link

export function GetDonors(req, res, next){
console.log(req)
                /*[
                   [
                     [ -100, 60 ], [ -100, 0 ], [ -100, -60 ], [ 100, -60 ], [ 100, 60 ], [ -100, 60 ]
                   ]
                ]*/

    res.end()
}

export function PostDonor(req, res, next){
    let donor = req.body
    donor.ip = req.ip
    donor.coordinates = [donor.longitude, donor.latitude]
    add(donor, (err, donor) => console.log(err, donor))
    res.end()
}

export function GetReact(req, res, next){
    res.setHeader('Content-Type', 'text/html')

      // Create a new Redux store instance
      const store = configureStore()

      // Grab the initial state from our Redux store
      const preloadedState = store.getState()

    // Here we're using React to render the outer body, so we just use the
    // simpler renderToStaticMarkup function, but you could use any templating
    // language (or just a string) for the outer page template
    var html = ReactDOMServer.renderToStaticMarkup(body(null,

      // The actual server-side rendering of our component occurs here, and we
      // pass our data in as `props`. This div is the same one that the client
      // will "render" into on the browser from browser.js
      div({id: 'root', dangerouslySetInnerHTML: {__html:
        ReactDOMServer.renderToString(
            <Provider store={store}>
              <App />
            </Provider>
          )
      }}),

      // The props should match on the client and server, so we stringify them
      // on the page to be available for access by the code run in browser.js
      // You could use any var name here as long as it's unique
      script({dangerouslySetInnerHTML: {__html:
        'window.__PRELOADED_STATE__ = ' + safeStringify(preloadedState) + ';'
      }}),

      link({rel: 'stylesheet', href: '/css/esri/calcite.css'}),
      link({rel: 'stylesheet', href: '/css/esri/esri.css'}),

      // We'll load React from a CDN - you don't have to do this,
      // you can bundle it up or serve it locally if you like
      script({src: '/js/react.min.js'}),
      script({src: '/js/react-dom.min.js'}),
      script({src: '/js/socket.io.js'}),
      script({src: '/js/arcgis.init.js'}),

      // Then the browser will fetch and run the browserified bundle consisting
      // of browser.js and all its dependencies.
      // We serve this from the endpoint a few lines down.
      script({src: '/bundle.js'})
    ))

      // Render the component to a string
      const htmlout = ReactDOMServer.renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      )


  //res.send(renderFullPage(html, preloadedState))
    // Return the page to the browser
    res.end(html)

  // This endpoint is hit when the browser is requesting bundle.js from the page above
}

export function GetBundle(req, res, next){
    res.setHeader('Content-Type', 'text/javascript')

    // Here we invoke browserify to package up browser.js and everything it requires.
    // DON'T do it on the fly like this in production - it's very costly -
    // either compile the bundle ahead of time, or use some smarter middleware
    // (eg browserify-middleware).
    // We also use literalify to transform our `require` statements for React
    // so that it uses the global variable (from the CDN JS file) instead of
    // bundling it up with everything else
    browserify()
      .add('app/view/browser.js')
      .bundle()
      .pipe(res)
}

// A utility function to safely escape JSON for embedding in a <script> tag
function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
