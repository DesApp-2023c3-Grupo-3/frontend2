
export interface Message {
  action: string;
  id: number;
  data: any;
}


export const messages: Message[] = [
  {
    action: 'CREATE_COURSE',
    id: 4,
    data: {
      subject: 'Estrategias de persistencia',
      name: 'ep-1',
      classroom: 54,
      schedule: '18:00 - 22:00',
      advertisingId: 6,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 5,
    data: {
      id: 2,
      subject: 'CIU',
      name: 'ciu-1',
      classroom: 34,
      schedule: '18:00 - 22:00',
      advertisingId: 7,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 6,
    data: {
      id: 3,
      subject: 'Base de datos',
      name: 'base-1',
      classroom: 22,
      schedule: '13:00 - 16:00',
      advertisingId: 8,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 7,
    data: {
      id: 4,
      subject: 'Estructura de datos',
      name: 'Est',
      classroom: 23,
      schedule: '13:00 - 16:00',
      advertisingId: 9,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 8,
    data: {
      id: 5,
      subject: 'Matematica I',
      name: 'Mat-1',
      classroom: 203,
      schedule: '13:00 - 16:00',
      advertisingId: 10,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 6,
      subject: 'Ingles I',
      name: 'Ing-1',
      classroom: 12,
      schedule: '13:00 - 16:00',
      advertisingId: 11,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 7,
      subject: 'Ingles II',
      name: 'Ing-2',
      classroom: 20,
      schedule: '13:00 - 16:00',
      advertisingId: 12,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 8,
      subject: 'Matematica II',
      name: 'Mat-2',
      classroom: 123,
      schedule: '13:00 - 16:00',
      advertisingId: 13,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 9,
      subject: 'Intro',
      name: 'Intro',
      classroom: 1,
      schedule: '14:00 - 16:00',
            advertisingId: 14,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 10,
      subject: 'Organizacion de computadoras',
      name: 'Orga-1',
      classroom: 23,
      schedule: '19:00 - 22:00',
      advertisingId: 15,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 11,
      subject: 'Matematica III',
      name: 'Mat-3',
      classroom: 20,
      schedule: '15:00 - 16:00',
      advertisingId: 16,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 5,
    data: {
      id: 2,
      subject: 'CIU',
      name: 'ciu-1',
      classroom: 34,
      schedule: '18:00 - 22:00',
      advertisingId: 17,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 6,
    data: {
      id: 3,
      subject: 'Base de datos',
      name: 'base-1',
      classroom: 22,
      schedule: '13:00 - 16:00',
      advertisingId: 18,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 7,
    data: {
      id: 4,
      subject: 'Estructura de datos',
      name: 'Est',
      classroom: 23,
      schedule: '13:00 - 16:00',
      advertisingId: 19,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 8,
    data: {
      id: 5,
      subject: 'Matematica I',
      name: 'Mat-1',
      classroom: 203,
      schedule: '13:00 - 16:00',
      advertisingId: 20,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 6,
      subject: 'Ingles I',
      name: 'Ing-1',
      classroom: 12,
      schedule: '13:00 - 16:00',
      advertisingId: 21,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 7,
      subject: 'Ingles II',
      name: 'Ing-2',
      classroom: 20,
      schedule: '13:00 - 16:00',
      advertisingId: 22,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 8,
      subject: 'Matematica II',
      name: 'Mat-2',
      classroom: 123,
      schedule: '13:00 - 16:00',
      advertisingId: 23,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 9,
      subject: 'Intro',
      name: 'Intro',
      classroom: 1,
      schedule: '14:00 - 16:00',
      advertisingId: 24,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      subject: 'Organizacion de computadoras',
      name: 'Orga-1',
      classroom: 23,
      schedule: '19:00 - 22:00',
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 11,
      subject: 'Matematica III',
      name: 'Mat-3',
      classroom: 20,
      schedule: '15:00 - 16:00',
      advertisingId: 26,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 7,
      subject: 'Ingles II',
      name: 'Ing-2',
      classroom: 20,
      schedule: '13:00 - 16:00',
      advertisingId: 27,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 8,
      subject: 'Matematica II',
      name: 'Mat-2',
      classroom: 123,
      schedule: '13:00 - 16:00',
      advertisingId: 28,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 9,
      subject: 'Intro',
      name: 'Intro',
      classroom: 1,
      schedule: '14:00 - 16:00',
      advertisingId: 29,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 10,
      subject: 'Organizacion de computadoras',
      name: 'Orga-1',
      classroom: 23,
      schedule: '19:00 - 22:00',
      advertisingId: 30,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 9,
    data: {
      id: 11,
      subject: 'Matematica III',
      name: 'Mat-3',
      classroom: 20,
      schedule: '15:00 - 16:00',
      advertisingId: 31,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
];
