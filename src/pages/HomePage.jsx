import { Banner, Brands, Features, Trending } from "../components"

export const HomePage = () => {
  return (
    <>
        <Banner/>
        <Brands/>
        <Trending/>
        <Features itemsPerPage={9}/>
    </>
  )
}
