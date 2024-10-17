//Created a custom Hook to fetch data of restaurant and pass it to RestaurantMenu fucntion.
import { useEffect, useState } from "react";
import { RES_MENU } from "./constants";

const useRestaurantMenu = (resId) =>
{
    const [resMenu, setResMenu] = useState(null);
    useEffect( () =>
    {
        fetchData();
    })
    fetchData =  async () =>
    {
        let data = await fetch(RES_MENU + resId);
        let json = await data.json();
        console.log(json)
        setResMenu(json?.data)

    }
    return resMenu;
}

export default useRestaurantMenu