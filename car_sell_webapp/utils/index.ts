import { CarProps, FilterProps } from "@/types";

export async function fetchCars (filters: FilterProps) {
  const {manufacturer, model, year, limit, fuel} = filters
    const headers: {
        'X-RapidAPI-Key': string;
        'X-RapidAPI-Host': string;
      } = {
        'X-RapidAPI-Key': '3dc85da322msh644e4697ea1f90cp1339a0jsn29d1d318bd4c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      };
      
      
    const  response  = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&limit=${limit}`, {headers: headers,});
    const result = await response.json()
    return result

}


export const calcurateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

    return rentalRatePerDay.toFixed(0)
}


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage")
  const {make, year, model} = car;

  url.searchParams.append("customer", "hrjavascript-mastery")
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
 
  return `${url}`;
}

export const UpdateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
          searchParams.set(type, value)
          const newPathName = `${window.location.pathname}?${searchParams.toString()}`
          return newPathName
}