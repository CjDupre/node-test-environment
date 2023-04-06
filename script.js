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
        thumbnail: null,
        title: "samples",
        url: "infinessesound.com",
        description: "",
        type: "website"
    }
];

//forEach to add property to the sites array site objects, but logs undefined because forEach does not have a return.. so second log to check that it worked
console.log(sites.forEach(site => {
    site.active = "true";
}));

console.log(sites);
//filter sites for site that has type equal to website
console.log(sites.filter(site => {
    return site.type === 'website'
}).length
);
//filter sites for site that has thumbnail that is NOT equal to null
console.log(sites.filter(site => {
    return site.thumbnail != null
}));


