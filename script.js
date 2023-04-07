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

const sites3 = [
    {
        thumbnail: "1234.com",
        title: "screencache docs",
        url: "screencache.com/docs",
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
//concat two arrays, merges the contents of two arrays into the same first array
console.log(sites.concat(sites2, sites3));

//splice, used to remove elements and add elements. create new array with spread operator and operate onthat
let sitesCopy = [...sites]
console.log(sitesCopy.splice(1, 1));
console.log(sitesCopy);

//delete from and replace.. need to put object props into the elements somehow
sites.splice(2, 3, { 'thumbnail': 'asd', 'test': 'succeed' }, { 'thumbnail': 'asd', 'test': 'succeed' });
console.log(sites);

//slice just returns the chosen area of arr, it does not mutate original array even without spread operator

console.log(sites.slice(1, 3));



//filter out duplicate objects
//filter object inside of array that has api in the front of/ in the url
//target site within sites array, that has title property with infinessesound.com value, and change active property to false

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

