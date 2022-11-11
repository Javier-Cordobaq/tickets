import MenuButtons from "./components/MenuButtons"
import { ResponsiveLayout } from "../../styled-components"

const Home = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ResponsiveLayout>
        <MenuButtons />
      </ResponsiveLayout>
    </div>
  )
}

export default Home