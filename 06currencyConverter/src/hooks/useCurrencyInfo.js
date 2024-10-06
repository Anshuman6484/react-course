import { useState, useEffect } from 'react'

function useCurrencyInfo(currecny) {
  const [data, setData] = useState({})
  useEffect(() => {
    console.log(currecny)

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currecny}.json`
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Currency not found: ${currecny}`)
        }
        return res.json()
      })
      .then((res) => setData(res[currecny]))
      .catch((err) => {
        console.error(err)
      })
  }, [currecny])
  console.log(data)
  return data
}

export default useCurrencyInfo
