// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  //   const [data, setData] = useState([])
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/Anshuman6484')
  //       .then((res) => res.json())
  //       .then((data) => setData(data))
  //   }, [])
  return (
    <div className="text-center m-4 p-4 bg-orange-700 text-white text-2xl">
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="img" width={200} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/Anshuman6484')
  return res.json()
}
