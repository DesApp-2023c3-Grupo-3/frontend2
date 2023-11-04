export const API = process.env.REACT_APP_API || "http://186.12.145.198:4000"
export const ROUTES_RELATIVE = {
    commission: `${API}/course`,
    downloadCommission: `${API}/course/download-template`,
    uploadCommission: `${API}/course/upload`,
    excelToJson: `${API}/image/excel-to-json`,
    getSectors: `${API}/sector`
}
