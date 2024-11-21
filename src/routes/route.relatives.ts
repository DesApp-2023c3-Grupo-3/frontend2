const HOST = process.env.REACT_APP_API;
const PORT = process.env.REACT_APP_PORT;
export const API =
  `${HOST}:${PORT}`;
export const ROUTES_RELATIVE = {
  course: {
    commission: `${API}/course`,
    downloadCommission: `${API}/course/download-template`,
    uploadCommission: `${API}/course/upload`,
    courseSector: `${API}/course/sector`,
  },
  image: {
    image: `${API}/image`,
    excelToJson: `${API}/image/excel-to-json`,
    planeViewQr: `${API}/image/qr/plane/view`,
  },
  advertising: {
    advertising: `${API}/advertising`,
    advertisingScreen: `${API}/advertising/screen`,
  },
  screen: {
    getAll: `${API}/screen`,
    update: `${API}/screen/multiple`,
    disconnect: `${API}/screen/disconnect`
  },
  sector: {
    getSectors: `${API}/sector`
  },
  user: {
    users: `${API}/user`,
    createUser: `${API}/user`,
    deleteUser: `${API}/user`,
    updateUser: `${API}/user`
  },
  role: {
    getAll: `${API}/role`
  },
  auth: {
    login: `${API}/auth/login`,
    refreshToken: `${API}/auth/refresh-token`
  },
  map: {
    createMap: `${API}/map`,
    getAll: `${API}/map`,
    getImageById: `${API}/map`,
    downloadImageById: `${API}/map`,
    delete: `${API}/map`,
    update: `${API}/map`,
  }
}