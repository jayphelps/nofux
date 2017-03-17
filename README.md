# nofux
[![Join the chat at https://gitter.im/jayphelps/nofux](https://badges.gitter.im/jayphelps/nofux.svg)](https://gitter.im/jayphelps/nofux?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![build status](https://img.shields.io/travis/reactjs/redux/master.svg)](https://travis-ci.org/jayphelps/nofux)
[![npm version](https://img.shields.io/npm/v/nofux.svg)](https://www.npmjs.com/package/nofux)

Unpredictable state container for JavaScript apps. Rethinking best practices, when you're all out of fucks to give.

<a href="https://app.codesponsor.io/link/zs7vWiDv2F99bX6Ay7PJa5WE/jayphelps/nofux" rel="nofollow"><img src="https://app.codesponsor.io/embed/zs7vWiDv2F99bX6Ay7PJa5WE/jayphelps/nofux.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>

## Install

```
npm install --save nofux
```

We publish CommonJS, ES2015, ESM, and UMD builds. We also include a TypeScript definition file.

##### UMD

We publish a UMD build inside our npm package. You can use it via the [unpkg](https://unpkg.com/) CDN:

[https://unpkg.com/nofux@latest/dist/umd/nofux.min.js](https://unpkg.com/nofux@latest/dist/umd/nofux.min.js)

## Usage

> [Try reading the source code!](https://github.com/jayphelps/nofux/blob/master/src/index.ts)

The central idea of nofux is that all of your application's state is contained in a single, global atom. This state tree is held on the `nofux` namespace, which is actually an alias to the global object in your JavaScript environment, e.g. `window`.

To update the state, simply assign a property on `nofux`! That's it! ...Unless you want your app to update too, in which you need to call `this.forceUpdate()` on your component.

[JSBin Demo](http://jsbin.com/kokivar/edit?js,output)

```js
import nofux from 'nofux';
// or
const nofux = window;

class Search extends React.Component {
  render() {
    return (
      <div>
        <input
          placeholder="Search..."
          value={nofux.search || ''}
          onChange={event => {
            nofux.search = event.target.value;
            this.forceUpdate();
          }}
        />
        <p>You have typed: {nofux.search || '(nothing yet)'}</p>
      </div>
    );
  }
}
```

No boilerplate, no fancy bindings or actions to dispatch. Truly global state!

## Discuss

[![Join the chat at https://gitter.im/jayphelps/nofux](https://badges.gitter.im/jayphelps/nofux.svg)](https://gitter.im/jayphelps/nofux?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Everyone is welcome on our [Gitter channel](https://gitter.im/jayphelps/nofux?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)!

## Credit

I was inspired by this video: [https://www.youtube.com/watch?v=6wS5xOZ7Rq8](https://www.youtube.com/watch?v=6wS5xOZ7Rq8)

### Note

This is a joke...or is it?

:shipit:
