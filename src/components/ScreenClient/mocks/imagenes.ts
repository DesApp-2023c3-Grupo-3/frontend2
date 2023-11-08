export interface Message {
  action: string;
  id: number;
  data: any;
}

export const messages: Message[] = [
  {
    id: 1,
    action: 'CREATE_COURSES',
    data: [
      {
        name: 'C1',
        classroom: '102',
        subject: 'Matematica I',
        startHour: '2023-10-06T03:00:00.000Z',
        endHour: '2023-10-06T06:00:00.000Z',
      },
      {
        name: 'C2',
        subject: 'Ingles 2',
        classroom: '102',
        startHour: '2023-10-06T03:00:00.000Z',
        endHour: '2023-10-06T06:00:00.000Z',
      },
      {
        name: 'C3',
        subject: 'Estrategia de persistencia',
        classroom: '102',
        startHour: '2023-10-06T03:00:00.000Z',
        endHour: '2023-10-06T06:00:00.000Z',
      },
      {
        name: 'C14',
        subject: 'Matematica III',
        classroom: '102',
        startHour: '2023-10-06T03:00:00.000Z',
        endHour: '2023-10-06T06:00:00.000Z',
      },
      {
        name: 'C2234',
        subject: 'Organizacion de computadoras',
        startHour: '2023-10-06T03:00:00.000Z',
        endHour: '2023-10-06T03:00:00.000Z',
      },
      {
        name: 'c234',
        subject: 'Intro a la programacion',
        startHour: '2023-10-06T03:00:00.000Z',
        endHour: '2023-10-06T03:00:00.000Z',
      },
    ],
  },
];
