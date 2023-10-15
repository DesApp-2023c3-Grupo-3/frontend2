export const fetchAdvertisings = async () => {
    const request = await fetch('http://localhost:3001/advertising')
    const advertisings = await request.json()
  
    return advertisings
}
  