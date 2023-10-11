export type Advertising = {
  id: number;
  name: string;
  advertisingType: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    name: string;
    dni: string;
    password: string;
    role: {
      id: number;
      name: string;
    };
  };
  sector: {
    id: number;
    name: string;
    topic: string;
  };
  schedule: {
    id: number;
    startDate: string;
    endDate: string;
    startHour: string;
    endHour: string;
    scheduleDays: string;
  };
};

export type Commission = {
  id: number;
  name: string;
  user: {
    id: number;
    name: string;
    dni: string;
    password: string;
    role: {
      id: number;
      name: string;
    };
  };
  sector: {
    id: number;
    name: string;
    topic: string;
  };
  schedule: {
    id: number;
    startDate: string;
    endDate: string;
    startHour: string;
    endHour: string;
    scheduleDays: string;
  };
  subject: {
    id: number;
    name: string;
  };
  classroom: {
    id: number;
    name: string;
  };
};
