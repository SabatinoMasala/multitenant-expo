module.exports = {
    name: "Second tenant",
    slug: 'second-tenant',
    bundleIdentifier: 'dev.sabatino.second-tenant',
    package: 'dev.sabatino.second-tenant',
    icon: './assets/second-tenant/icon.png',
    adaptiveIcon: {
        foregroundImage: './assets/second-tenant/adaptive-icon.png',
        backgroundColor: '#ffffff'
    },
    splash: {
        image: './assets/second-tenant/splash.png',
        resizeMode: 'contain',
        backgroundColor: "#ffffff"
    },
    eas: {
        projectId: '',
    },
    appdefinition: {
        colors: {
            text: {
                dark: '#ff0000',
                light: '#ff0000',
            },
        }
    }
};
