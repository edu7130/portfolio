// import axioss from 'axios';

// const axios = axioss.create({
//     baseURL: process.env.REACT_APP_URL_BACKEND,
//     timeout: 10000
// })

export const getProjects = async () => {
    // const response = await axios.get('/api/project');

    return [
        {
            "id": "32445e5b-2174-46f2-9d47-9f66e12d22dd",
            "name": "Ticket application Socket",
            "description": "Ticket application Socket. Made with NodeJs, Express, Socket.io",
            "urlRepo": "https://github.com/edu7130/ticket-socket.git",
            "url": "https://ticket.edudev.ar",
            "platform": "WEB",
            "img": "https://res.cloudinary.com/dpgbofmgc/image/upload/v1649378751/wgccaktxxqmlg28862na.png",
        },
        {
            "id": "335ed553-6647-471b-9cd6-72717a23ab9a",
            "name": "Portfolio",
            "description": "Personal portfolio made with React, Styled Components and deployed on Heroku",
            "urlRepo": "https://github.com/edu7130/portfolio.git",
            "url": "https://edu-dev.ar",
            "platform": "WEB",
            "img": "https://res.cloudinary.com/dpgbofmgc/image/upload/v1649378788/oaefs2gkruzqx4feckbp.png",
        },
        {
            "id": "94383d32-730e-4a39-aaa7-acfaa623de09",
            "name": "Rest Server",
            "description": "Rest Server, Auth with google, JWT, Images of product and User profile. Made with NodeJs, Express, MongoDB",
            "urlRepo": "https://github.com/edu7130/node-rest-server.git",
            "url": "https://demorest.edudev.ar",
            "platform": "WEB",
            "img": "https://res.cloudinary.com/dpgbofmgc/image/upload/v1649378824/z831phfln4jdgxzk27nd.png",
        },
        {
            "id": "aa77ed45-61bf-4dd8-90f5-cf23c82448de",
            "name": "Dolarama",
            "description": "Shows the value of the dollar in Argentina, made with Flutter",
            "urlRepo": "https://github.com/edu7130/dolarama_arg.git",
            "url": "https://play.google.com/store/apps/details?id=com.eduweidenbacher.dolarama_arg",
            "platform": "MOBILE",
            "img": "https://res.cloudinary.com/dpgbofmgc/image/upload/v1649378857/nbqek23zxjdspsxxjlbg.png",
        },
        {
            "id": "ebcc251c-916a-44cc-be53-369f57956fc5",
            "name": "Info Peliculas",
            "description": "Search all the movies that exist, see their ratings and their actors, made with Flutter",
            "urlRepo": "https://github.com/edu7130/info-peliculas.git",
            "url": "https://play.google.com/store/apps/details?id=com.eduweidenbacher.infopeliculas",
            "platform": "MOBILE",
            "img": "https://res.cloudinary.com/dpgbofmgc/image/upload/v1649378875/ipusqq6tygibaol3fa5x.png",
        }
    ];
}
