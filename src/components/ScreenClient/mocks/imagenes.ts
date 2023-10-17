
export interface Message {
  action: string;
  id: number;
  data: any;
}


export const messages: Message[] = [
  {
    action: 'CREATE_ADVERTISING',
    id: 6,
    data: {
      advertisingTypeId: 3,
      payload: 'El lunes no hay clases',
      advertisingId: 1,
      startHour: "2023-10-17T02:51:42.142Z",
      endHour: "2023-10-17T19:51:42.142Z",
    },
  },
  {
    action: 'CREATE_ADVERTISING',
    id: 1,
    data: {
      advertisingTypeId: 1,
      payload:
        'https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/177292671_1915770318575927_3542229533072028658_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=HhzGQABc30YAX8G1mAs&_nc_ht=scontent.faep6-2.fna&oh=00_AfDcN5DSfrvnqOfs8EOVfai_HlyZBzRaX__ChUAKGNKObA&oe=653696AC',
        advertisingId: 2,
        startHour: "2023-10-17T02:51:42.142Z",
        endHour: "2023-10-17T19:51:42.142Z",
      },
  },
  {
    action: 'CREATE_ADVERTISING',
    id: 2,
    data: {
      advertisingTypeId: 2,
      advertisingId: 3,
      startHour: "2023-10-17T02:51:42.142Z",
      endHour: "2023-10-17T19:51:42.142Z",
      payload: 'https://www.youtube.com/watch?v=K8gihOKBo2k&ab_channel=UNAHUR',
    },
  },
  {
    action: 'CREATE_ADVERTISING',
    id: 4,
    data: {
      advertisingTypeId: 2,
      payload: 'https://www.youtube.com/watch?v=0Sj8N9KTtds&ab_channel=UNAHUR',
      advertisingId: 4,
      startHour: "2023-10-17T02:51:42.142Z",
      endHour: "2023-10-17T19:51:42.142Z",
    },
  },
  {
    action: 'CREATE_ADVERTISING',
    id: 5,
    data: {
      advertisingTypeId: 3,
      payload:
        'Se cancelo la clase de Matemáticas I ya que no viene el profesor, saludos',
        advertisingId: 5,
        startHour: "2023-10-17T17:21:42.142Z",
        endHour: "2023-10-17T19:51:42.142Z"
    },
  },
  {
    action: 'CREATE_COURSE',
    id: 4,
    data: {
      subject: 'Estrategias de persistencia',
      title: 'ep-1',
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
      title: 'ciu-1',
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
      title: 'base-1',
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
      title: 'Est',
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
      title: 'Mat-1',
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
      title: 'Ing-1',
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
      title: 'Ing-2',
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
      title: 'Mat-2',
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
      title: 'Intro',
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
      title: 'Orga-1',
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
      title: 'Mat-3',
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
      title: 'ciu-1',
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
      title: 'base-1',
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
      title: 'Est',
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
      title: 'Mat-1',
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
      title: 'Ing-1',
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
      title: 'Ing-2',
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
      title: 'Mat-2',
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
      title: 'Intro',
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
      id: 10,
      subject: 'Organizacion de computadoras',
      title: 'Orga-1',
      classroom: 23,
      schedule: '19:00 - 22:00',
      advertisingId: 25,
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
      title: 'Mat-3',
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
      title: 'Ing-2',
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
      title: 'Mat-2',
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
      title: 'Intro',
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
      title: 'Orga-1',
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
      title: 'Mat-3',
      classroom: 20,
      schedule: '15:00 - 16:00',
      advertisingId: 31,
      startHour: "2023-10-16T19:51:42.142Z",
      endHour: "2023-10-16T19:51:42.142Z"
    },
  },
];
