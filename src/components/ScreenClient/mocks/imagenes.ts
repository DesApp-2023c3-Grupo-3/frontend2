import { Message } from '../store/socketStore';

export const messages: Message[] = [
  {
    topic: 'connection',
    id: 12,
    data: {
      screen: {
        subscription: 'default',
        templeteId: '1',
        courseIntervalTime: 15,
        advertisingIntervalTime: 15,
        sector: 1,
      },
    },
  },
  {
    topic: 'connection',
    id: 13,
    data: {
      screen: {
        subscription: 'default',
        templeteId: '1',
        courseIntervalTime: 20,
        advertisingIntervalTime: 25,
        sector: 1,
      },
    },
  },
  {
    topic: 'advertising',
    id: 6,
    data: {
      advertisingTypeId: 3,
      id: 3,
      payload:
        'El lunes no hay clases',
      title: 'a',
    },
  },
  {
    topic: 'advertising',
    id: 1,
    data: {
      advertisingTypeId: 1,
      id: 1,
      payload:
        'https://scontent.faep6-2.fna.fbcdn.net/v/t1.6435-9/177292671_1915770318575927_3542229533072028658_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=HhzGQABc30YAX8G1mAs&_nc_ht=scontent.faep6-2.fna&oh=00_AfDcN5DSfrvnqOfs8EOVfai_HlyZBzRaX__ChUAKGNKObA&oe=653696AC',
      title: 'imagen',
    },
  },
  {
    topic: 'advertising',
    id: 2,
    data: {
      advertisingTypeId: 2,
      id: 2,
      payload:
       'https://www.youtube.com/watch?v=K8gihOKBo2k&ab_channel=UNAHUR',
      title: 'imagen'
    },
  },
  {
    topic: 'advertising',
    id: 4,
    data: {
      advertisingTypeId: 2,
      id: 1,
      payload:
        'https://www.youtube.com/watch?v=0Sj8N9KTtds&ab_channel=UNAHUR',
      title: 'imagen',
    },
  },
  {
    topic: 'advertising',
    id: 5,
    data: {
      advertisingTypeId: 3,
      id: 2,
      payload:
        'Se cancelo la clase de Matemáticas I ya que no viene el profesor, saludos',
      title: 'imagen',
    },
  },
  {
    topic: 'course',
    id: 4,
    data: {
      id: 1,
      subject: 'Estrategias de persistencia',
      title: 'ep-1',
      classroom: 54,
      schedule: '18:00 - 22:00',
    },
  },
  {
    topic: 'course',
    id: 5,
    data: {
      id: 2,
      subject: 'CIU',
      title: 'ciu-1',
      classroom: 34,
      schedule: '18:00 - 22:00',
    },
  },
  {
    topic: 'course',
    id: 6,
    data: {
      id: 3,
      subject: 'Base de datos',
      title: 'base-1',
      classroom: 22,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 7,
    data: {
      id: 4,
      subject: 'Estructura de datos',
      title: 'Est',
      classroom: 23,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 8,
    data: {
      id: 5,
      subject: 'Matematica I',
      title: 'Mat-1',
      classroom: 203,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 6,
      subject: 'Ingles I',
      title: 'Ing-1',
      classroom: 12,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 7,
      subject: 'Ingles II',
      title: 'Ing-2',
      classroom: 20,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 8,
      subject: 'Matematica II',
      title: 'Mat-2',
      classroom: 123,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 9,
      subject: 'Intro',
      title: 'Intro',
      classroom: 1,
      schedule: '14:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 10,
      subject: 'Organizacion de computadoras',
      title: 'Orga-1',
      classroom: 23,
      schedule: '19:00 - 22:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 11,
      subject: 'Matematica III',
      title: 'Mat-3',
      classroom: 20,
      schedule: '15:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 5,
    data: {
      id: 2,
      subject: 'CIU',
      title: 'ciu-1',
      classroom: 34,
      schedule: '18:00 - 22:00',
    },
  },
  {
    topic: 'course',
    id: 6,
    data: {
      id: 3,
      subject: 'Base de datos',
      title: 'base-1',
      classroom: 22,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 7,
    data: {
      id: 4,
      subject: 'Estructura de datos',
      title: 'Est',
      classroom: 23,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 8,
    data: {
      id: 5,
      subject: 'Matematica I',
      title: 'Mat-1',
      classroom: 203,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 6,
      subject: 'Ingles I',
      title: 'Ing-1',
      classroom: 12,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 7,
      subject: 'Ingles II',
      title: 'Ing-2',
      classroom: 20,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 8,
      subject: 'Matematica II',
      title: 'Mat-2',
      classroom: 123,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 9,
      subject: 'Intro',
      title: 'Intro',
      classroom: 1,
      schedule: '14:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 10,
      subject: 'Organizacion de computadoras',
      title: 'Orga-1',
      classroom: 23,
      schedule: '19:00 - 22:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 11,
      subject: 'Matematica III',
      title: 'Mat-3',
      classroom: 20,
      schedule: '15:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 7,
      subject: 'Ingles II',
      title: 'Ing-2',
      classroom: 20,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 8,
      subject: 'Matematica II',
      title: 'Mat-2',
      classroom: 123,
      schedule: '13:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 9,
      subject: 'Intro',
      title: 'Intro',
      classroom: 1,
      schedule: '14:00 - 16:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 10,
      subject: 'Organizacion de computadoras',
      title: 'Orga-1',
      classroom: 23,
      schedule: '19:00 - 22:00',
    },
  },
  {
    topic: 'course',
    id: 9,
    data: {
      id: 11,
      subject: 'Matematica III',
      title: 'Mat-3',
      classroom: 20,
      schedule: '15:00 - 16:00',
    },
  },
];
