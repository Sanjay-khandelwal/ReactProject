import { useEffect, useState } from 'react'
import api from './api.js'
export function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/${api.api}/latest/${currency}`)
                const result = await response.json()
                setData(result.conversion_rates || {})
            } catch (error) {
                console.error("Error fetching currency data:", error)
                setData({})
            }
        }
        fetchData()
    }, [currency])

    return data
}





