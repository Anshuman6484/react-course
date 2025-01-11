import { useParams } from 'react-router-dom'

function User() {
  const { user } = useParams()
  return (
    <div className="py-4 bg-orange-700 text-center text-2xl text-white">
      WELCOME : {user.toUpperCase()}
    </div>
  )
}

export default User
