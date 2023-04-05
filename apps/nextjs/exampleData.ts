// Will be replaced with DB in the future
type Team = {
    id: string;
    name: string;
    members: string[];
    games: Game[];
}

type Game = {
    id: string;
    name: string;
    teams: string[];
    date: string;
    time: string;
    location: string;
    score: string;
}

export const user = {
    id: "user_01",
    firstName: "John",
    lastName: "Doe",
    email: "",
    teams: [
        {
            id: "team_01",
            name: "Team 1",
            members: ["user_01", "user_02", "user_03"],
            games: [
                {
                    id: "game_01",
                    name: "Game 1",
                    teams: ["team_01", "team_02"],
                    date: "2021-01-01",
                    time: "12:00",
                    location: "Location 1",
                    score: "0-0",
                },
                {
                    id: "game_02",
                    name: "Game 2",
                    teams: ["team_01", "team_03"],
                    date: "2021-01-02",
                    time: "12:00",
                    location: "Location 2",
                    score: "0-0",
                }]
        }]
}
