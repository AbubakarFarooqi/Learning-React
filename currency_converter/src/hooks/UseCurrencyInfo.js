
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

function useCurrencyInfo(currencyType) {
    const [currencyList, setCurrencyList] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyType}.json`)
            .then((response) => {
                if (response.ok) {
                    console.log('Successfully fetched curency info');
                    return response.json()
                }
            })
            .then((data) => {
                setCurrencyList(data[currencyType])
            })
            .catch((e) => {
                console.log(`Error:${e}`);
            })
    }, [currencyType])
    return currencyList

}
export default useCurrencyInfo

