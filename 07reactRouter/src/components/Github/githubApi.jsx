export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/Anshuman6484')
  return res.json()
}
