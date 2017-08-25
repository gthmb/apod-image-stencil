A couple of Custom Elements for requesting and rendering NASA's *Astronomy Picture of the Day*. Made with Stenciljs.

# Components
* `apod-request`
* `apod-image`

## apod-request
A Custom Element for making an APOD API request and passing through the results.

**Attributes**

| Attribute | Type | Description | Default |
| --------- | ---- | ----------- | ------- |
| **api-key** | String | Your NASA api key. [Get one here](https://api.nasa.gov/index.html#apply-for-an-api-key) | |
| **hd** | boolean | Flag to request High Definition version of the image (if available) | `false` |
| **date** | String in format: *YYYY-MM-DD* | The date for which you'd like the image | today |

**Events**

| Event | Desrciption |
| ----- | ----------- |
| `requestComplete` | the request completed successfully |
| `requestError` | the request completed with an error |

Example Useage
```html
<apod-request api-key="XXX"></apod-request>

<!-- to listen for an event -->
<script>
    const request = document.querySelector('apod-request');
    request.addEventListener('requestComplete', (data) => {
        console.log(data.detail.url);
        ...
    }
</script>
```

## apod-image
A Custom Element that wraps the `apod-image` and renders an image tag with the APOD.

**Attributes**

| Attribute | Type | Description | Default |
| --------- | ---- | ----------- | ------- |
| **api-key** | String | Your NASA api key. [Get one here](https://api.nasa.gov/index.html#apply-for-an-api-key) | |
| **hd** | boolean | Flag to request High Definition version of the image (if available) | `false` |
| **date** | String in format: *YYYY-MM-DD* | The date for which you'd like the image | today |
| **height** | String (CSS value) | The desired rendering height of the image | `initial` |
| **width** | String (CSS value) | The desired rendering width of the image | `initial` |

**Events**

| Event | Desrciption |
| ----- | ----------- |
| `requestComplete` | the request completed successfully |
| `requestError` | the request completed with an error |
| `imageLoaded` | the image has been loaded |

## Example Usage
Get today's image:
```html
<apod-image api-key="XXX"></apod-image>
```

Get an image for a specific date:
```html
<apod-image 
    api-key="XXX"
    date="2017-08-24"
></apod-image>
```

Get an image and render it at specific dimensions:
```html
<apod-image 
    api-key="XXX"
    width="50%"
    height="200px"
></apod-image>
```

----
## About Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
git clone git@github.com:ionic-team/stencil-starter.git my-app
cd my-app
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To view the build, start an HTTP server inside of the `/www` directory.

To watch for file changes during develop, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

