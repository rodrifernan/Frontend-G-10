
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { getAllCategories } from "../../../redux/reducer/getCategorie";
import { getAllUsers } from "../../../redux/reducer/getAllUsers";
import { getAllOrders } from "../../../redux/reducer/getAllOrders";
import { fetchProducts } from "../../../redux/reducer/products";
import { getAllInvoices } from "../../../redux/reducer/AllInvoices";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllUsers());
    dispatch(fetchProducts());
    dispatch(getAllInvoices());
  }, []);

  return (
    <div className="home">
      
      <div className="homeContainer">
        
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Ultimos 6 meses (Ventas)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Ultimas ordenes</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
