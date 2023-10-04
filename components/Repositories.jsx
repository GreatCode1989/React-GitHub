

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

function RepositoriesPage() {
  const { data: session } = useSession()
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const response = await fetch(`https://api.github.com/user/repos`, {
          headers: {
            Authorization: `token ${session.accessToken}`,
          },
        })
        const data = await response.json()
        setRepositories(data)
      }
    }

    fetchData()
  }, [session])

  return (
    <div>
      <h1>My Repositories</h1>
      {session ? (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      ) : (
        <p>Please sign in to view your repositories</p>
      )}
    </div>
  )
}

export default RepositoriesPage
