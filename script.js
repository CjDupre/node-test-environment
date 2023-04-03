const sites = [
    {
        thumbnail: "ajsdak.com",
        title: "screencache",
        url: "screencache.com",
        description: "",
        type: "app"
    },
    {
        thumbnail: "ajsdak.com",
        title: "infinessesound",
        url: "infinessesound.com",
        description: "",
        type: "website"
    },
    {
        thumbnail: "ajsdak.com",
        title: "samples",
        url: "infinessesound.com",
        description: "",
        type: "website"
    }
];

console.log(sites.filter(site => {
    return site.type === 'website'
}).length

);
