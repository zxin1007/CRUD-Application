let campuses = [
    {
        id: 1,
        name: "Campus A",
        image: "No image available",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        students: []
    },
    {
        id: 2,
        name: "Campus B",
        image: "No image available",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Malesuada fames ac turpis egestas integer eget.",
        students: []
    },
    {
        id: 3,
        name: "Campus C",
        image: "No image available",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Tellus elementum sagittis vitae et leo duis ut. In dictum non consectetur a erat nam at. Id eu nisl nunc mi ipsum.",
        students: []
    },
    {
        id: 4,
        name: "Campus D",
        image: "No image available",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Est ultricies integer quis auctor elit. Vitae justo eget magna fermentum iaculis eu non. Eu nisl nunc mi ipsum faucibus.",
        students: []
    },
    {
        id: 5,
        name: "Campus E",
        image: "No image available",
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