export interface Participant {
    id: String;
    name: String;
    email: String;
    cpf: String;
    password: String;
  }

export interface Event {
    id: String;
    title: String;
    description: String;
    location: String;
    type: String;
    date: string;
    imgUrl: String;
    event_users: Participant[];
  }