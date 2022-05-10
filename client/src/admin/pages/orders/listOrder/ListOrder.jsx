import "./list.scss"
// import Sidebar from "../../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"
import DatatableOrder from "../../../pages/orders/OrderDataTable/DatatableOrder"

const ListOrder = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
       
        <DatatableOrder />
      </div>
    </div>
  )
}

export default ListOrder