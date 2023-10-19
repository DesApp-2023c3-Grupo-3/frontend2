const BASE_URL = process.env.REACT_APP_API || "http://[::1]:3001/"

export const fetchAdvertisings = async (screenId:number) => {
    const request = await fetch(`${BASE_URL}/advertising/screen/${screenId}`)
    const advertisings = await request.json()
  
    return advertisings
}
  