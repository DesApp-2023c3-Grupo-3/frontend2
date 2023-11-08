import { ROUTES_RELATIVE } from '../../../routes/route.relatives';

export const fetchAdvertisings = async (screenId:number) => {
    const request = await fetch(`${ROUTES_RELATIVE.advertising.advertisingScreen}/${screenId}`)
    const advertisings = await request.json()
  
    return advertisings
}
  