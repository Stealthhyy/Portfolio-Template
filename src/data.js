// Card image dimensions should be 315x250

export const projects = 
[
    // -------- Featured --------
    {
        key:"untamed",
        description:"An MMO monster taming game with over a million uniques combinations of tames to collect.",
        image: "/images/untamed/logo.png",
        slug: "untamed",
        group: "Featured",
        color: "green",
    },
    {
        key:"sge",
        description:"SGE Is the start to a game engine that I used to work on.",
        image: "/images/sge/logo.png",
        slug: "sge",
        group: "Featured",        
        color: "green",
    }, 
    // -------- 2021 --------
    {
        key:"stripe",
        description:"A demo payment site using the Stripe API, built with React.",
        image: "/images/stripe/logo.png",
        slug: "stripe",
        group: "2021",      
        color: "white",
    },
    // -------- 2022 --------
    {
        key:"door9",
        description:"A horror maze game where the theme for the game is \"Transition\".",
        image: "/images/door9/logo.png",
        slug: "door9",
        group: "2022",      
        color: "white",
    },
    {
        key:"sam",
        description:"This is a server authoritative movement project with client-side prediction and server reconciliation.",
        image: "/images/server-auth-movement/logo.png",
        slug: "server-auth-movement",
        group: "2022",      
        color: "white",
    },    
];

export const groups = 
[
    {
        key: "Featured",
        prio: 3,
    },
    {
        key: "2020",
        prio: 1,
    },
    {
        key: "2021",
        prio: 2,
    },
];