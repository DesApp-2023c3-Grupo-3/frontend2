export const fetchAdvertisings = async (screenId:number) => {
    const request = await fetch(`http://localhost:3001/advertising/screen/${screenId}`)
    const advertisings = await request.json()
  
    return advertisings
}
  