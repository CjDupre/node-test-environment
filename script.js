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

//index of does not work on my array because the objects are nameless i guess?
console.log(sites.indexOf());
console.log(sites.lastIndexOf());

//flat arr, arg = # of levels deep, pulls stuff out of nested arrays and brings it to the top lvel of the array
let flat = sites.flat(2);
console.log(flat);

//HIGHER ORDER!fucntion that accepts fucnitons as arguments and or returns a function
//functions that operate on other functions
//loops thru sites arr and logs the name/object as it pass each element with a callback function
let count = 0;
sites.forEach(n => {
    console.log(n);
    count++;
    console.log(count);
});
//detailed control with the for loop, foreach is simple
for (let i = 0; i < sites.length; i = i + 2) {
    console.log(sites[i]);
};

let nums = [1, 2, 3, 4, 5, 6];
let doubled = nums.map((n) => n * 2);
console.log(doubled);
console.log(nums.map((n) => n * 2));

console.log(sites.filter(site => {
    return site.active != false
}));





//filter out duplicate objects
//filter object inside of array that has api in the front of/ in the url
//target site within sites array, that has title property with infinessesound.com value, and change active property to false



//Given an array of work samples and a separate array of comments, 
//where each comment has sampleId that refers to the sample it's for, 
//join them together into a third array (output) that has "comments" 
//added to each work sample entity containing an array of comments for 
//that sample (edited) 
let samples = [
    {
        sample: 1,
        url: 'jpg.com'
    },
    {
        sample: 2,
        url: 'rbg.com'
    },
    {
        sample: 3,
        url: 'jurassic.park'
    }
];
let comments = [
    {
        comment: 'the machine ran hot',
        sampleId: 1
    },
    {
        comment: 'the',
        sampleId: 3
    },
    {
        comment: 'chonk',
        sampleId: 3
    },
    {
        comment: 'chonkens',
        sampleId: 3
    }
];





console.log(samples);
console.log(comments);
let output = samples.map(samples => ({
    ...samples,
    comments: comments.filter(comment => comment.sampleId === samples.sample)
}));
console.log(samples);
console.log(comments);
console.log('output below');
console.log(output);






desiredOutput = [
    {
        sample: '1',
        url: 'jpg.com',
        comments: [
            {
                comment: 'the machine ran hot',
                sampleId: 1
            }
        ]
    },
    {
        sample: '2',
        url: 'rbg.com',
        comments: [
            {}
        ]
    },
    {
        sample: '3',
        url: 'jurassic.park',
        comments: [
            {
                comment: 'the',
                sampleId: 3
            },
            {
                comment: 'chonk',
                sampleId: 3
            },
            {
                comment: 'chonkens',
                sampleId: 3
            }
        ]
    }
]