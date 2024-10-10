module.exports = {
    name: "First tenant",
    slug: 'first-tenant',
    bundleIdentifier: 'dev.sabatino.first-tenant',
    package: 'dev.sabatino.first-tenant',
    icon: './assets/first-tenant/icon.png',
    adaptiveIcon: {
        foregroundImage: './assets/first-tenant/adaptive-icon.png',
        backgroundColor: '#ffffff'
    },
    splash: {
        image: './assets/first-tenant/splash.png',
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
