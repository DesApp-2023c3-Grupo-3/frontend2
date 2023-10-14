export type Advertising = {
  id: number;
  name: string;
  payload: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: null,
  advertisingType: advertisingType
  user: user
  advertisingSectors: advertisingSectors[]
  advertisingSchedules : advertisingSchedules[]
  status: string
};

type user = {
    id: number,
    name: string,
    dni: string,
    password: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: null,
    role: role
}

type role = {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: null
}

type advertisingType = {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: null
}

type sector = {
  id: number,
  name: string,
  topic: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: null
}

type advertisingSectors = {
  id: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: null,
  sector: sector
}

type advertisingSchedules = {
  id: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: null,
  schedule: schedule
}

type schedule = {
  id: number,
  startDate: string,
  endDate: string,
  startHour: string,
  endHour: string,
  dayCode: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: null
}

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
