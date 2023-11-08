type Advertising = {
  id: number;
  name: string;
  payload: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: null,
  advertisingType: AdvertisingType
  user: User
  advertisingSectors: AdvertisingSectors[]
  advertisingSchedules: AdvertisingSchedules[]
  status: string
};

type User = {
    id?: number,
    name: string,
    dni: string,
    password: string,
    createdAt?: string,
    updatedAt?: string,
    deletedAt?: null,
    role?: UserRole
}

type UserRole = {
    id: number,
    name: string,
    createdAt?: string,
    updatedAt?: string,
    deletedAt?: null
}

type AdvertisingType = {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: null
}

type Sector = {
  id: number,
  name: string,
  topic: string,
  createdAt?: string,
  updatedAt?: string,
  deletedAt?: null
}

type AdvertisingSectors = {
  id: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: null,
  sector: sector
}

type AdvertisingSchedules = {
  id: number,
  createdAt: string,
  updatedAt: string,
  deletedAt: null,
  schedule: schedule
}

type Schedule = {
  id: number,
  startDate: string,
  endDate: string,
  startHour: string,
  endHour: string,
  dayCode: string,
}

type Commission = {
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
