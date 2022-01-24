let campuses = [
    {
        id: 1,
        name: "Campus A",
        image: "https://pbs.twimg.com/media/DiahQZ7W4AAucnY?format=jpg&name=large",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        students: []
    },
    {
        id: 2,
        name: "Campus B",
        image: "https://thumbor.thedailymeal.com/W9x0ool1P0bVlneYslrxz92cRts=/774x516/filters:format(webp)/https://www.theactivetimes.com/sites/default/files/slideshows/106065/115170/1_Bard_College_iStock.jpg",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Malesuada fames ac turpis egestas integer eget.",
        students: []
    },
    {
        id: 3,
        name: "Campus C",
        image: "https://thumbor.thedailymeal.com/BvcvRh9oIMaqQdV1hDImaRpuc4g=/774x516/filters:format(webp)/https://www.theactivetimes.com/sites/default/files/slideshows/106065/115170/3_Belmont_University_Shutterstock.jpg",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Tellus elementum sagittis vitae et leo duis ut. In dictum non consectetur a erat nam at. Id eu nisl nunc mi ipsum.",
        students: []
    },
    {
        id: 4,
        name: "Campus D",
        image: "https://thumbor.thedailymeal.com/zM25uyanFNgOf9hlRZHy2DIAufM=/774x516/filters:format(webp)/https://www.theactivetimes.com/sites/default/files/slideshows/106065/115170/4_Berry_College_Shutterstock.jpg",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Est ultricies integer quis auctor elit. Vitae justo eget magna fermentum iaculis eu non. Eu nisl nunc mi ipsum faucibus.",
        students: []
    },
    {
        id: 5,
        name: "Campus E",
        image: "https://thumbor.thedailymeal.com/ftIBg8RWMXUwRaF_0h2aJCVhUGA=/774x516/filters:format(webp)/https://www.theactivetimes.com/sites/default/files/slideshows/106065/115170/5_Bryn_Mawr_College_Shutterstock.jpg",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Tempus iaculis urna id volutpat lacus laoreet.",
        students: []
    }
];

export function getCampuses() {
    return campuses;
}

export function getCampus(id) {
    return campuses.find(
        campus => campus.id === id
    );
}

export function deleteCampus(name) {
    campuses = campuses.filter(
        campus => campus.name !== name
    );
}