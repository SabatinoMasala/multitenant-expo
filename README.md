# Multitenant app starter kit

This starter kit will help you build multiple 'template' apps from a single codebase.

## Development

The starter kit comes configured with 2 tenants: `first-tenant` and `second-tenant`.
To run the app for a specific tenant, use the `TENANT` environment variable.

```bash
TENANT=tenant-1 yarn start
TENANT=tenant-2 yarn start
```

## Building

Building the app for a specific tenant is similar to running the app.

```bash
TENANT=tenant-1 yarn build
```

## Adding a new tenant

To add a new tenant, eg. `third-tenant`, create a configuration file in `configs/third-tenant.js`. 
The configuration file should export an object with the following properties:

```js
module.exports = {
    name: '',
    slug: '',
    bundleIdentifier: '',
    package: '',
    icon: './assets/third-tenant/icon.png',
    adaptiveIcon: {
        foregroundImage: './assets/third-tenant/adaptive-icon.png',
        backgroundColor: '#ffffff'
    },
    splash: {
        image: './assets/third-tenant/splash.png',
        resizeMode: 'contain',
        backgroundColor: "#ffffff"
    },
    eas: {
        projectId: '',
    },
    appdefinition: {
        colors: {
            text: {
                dark: '#ffffff',
                light: '#000000',
            },
        }
    }
};
```

Add an entry in `eas.json` under the "build" key:
```
{
  "build": {
    ...
    "third-tenant": {
      "env": {
        "TENANT": "third-tenant"
      }
    }
  },
}
```

This is the profile that will be loaded when building the app, and the `TENANT` environment variable will be set to `third-tenant`.
Running `TENANT=third-tenant yarn build` will automatically pass in 'third-tenant' as a profile, and EAS will then be able to read the env variables defined above.