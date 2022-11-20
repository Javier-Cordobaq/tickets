import { ResponsiveLayout } from "../../styled-components"
import { CarouselOptions, MenuButtons } from "./components"
import { HomeLayout } from "./styled-components"

const Home = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <HomeLayout>
        <MenuButtons />
        <CarouselOptions />
      </HomeLayout>
    </div>
  )
}

export default Home