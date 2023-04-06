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

const sites2 = [
    {
        thumbnail: "1234.com",
        title: "screencache backend",
        url: "api.screencache.com",
        description: "",
        type: "api"
    },
    {
        thumbnail: "3456.com",
        title: "infinesse",
        url: "infinesse.com",
        description: "",
        type: "website"
    },
    {
        thumbnail: null,
        title: "samples",
        url: "api.infinessesound.com",
        description: "",
        type: "website"
    }
];

//forEach to add property to the sites array site objects, but logs undefined because forEach does not have a return.. so second log to check that it worked
console.log(sites.forEach(site => {
    site.active = true;
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
//target site within sites array, that has title property with infinessesound.com value, and change active property to false

console.log(sites.toString(sites.site));






//useful must know array methods
// toString();
// join();
// concat();
// splice();
// indexOf();
// lastIndexOf();
// forEach();
// map();
// filter();
// reduce();
// some();
// every();
// flat();
// find();
// findIndex();
// sort();

