import "./list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"
import DatatableProduct from "../../../pages/products/ProductDataTable/DatatableProduct"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
       
        <DatatableProduct />
      </div>
    </div>
  )
}

export default List