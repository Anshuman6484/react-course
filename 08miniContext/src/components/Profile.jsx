import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)
  if (!user) return <h1>Please Login!</h1>
  else if (!user.username) return <h1>Please add username!</h1>
  else
    return (
      <div className="py-4 bg-orange-700 text-center text-2xl text-white">
        Welcome {user.username}!
      </div>
    )
}

export default Profile
