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
// <<<<<<< admin/graficos

// import { BarChar } from "../../components/Recharts/BarChar/BarChar";
// import { PieChar } from "../../components/Recharts/PieChar/PieChar";
// import { RadarChar } from "../../components/Recharts/RadarChar/RadarChar";


// const Home = () => {

//   const socket = io(process.env.REACT_APP_API || 'ws://localhost:3001');

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllOrders());
//     dispatch(getAllUsers());
//     dispatch(fetchProducts());
//     dispatch(getAllInvoices());
//   }, []);

//   return (
//     <div className="home">
      
//       <div className="homeContainer">
        
//         <div className="widgets">
//           <Widget type="usersQuantity" socket={socket} />
//           <Widget type="ordersQuantity" socket={socket} />
//           <Widget type="salesQuantity" socket={socket} />
//           <Widget type="profits" socket={socket} />
//         </div>
//         <div className="charts">
//           <Featured />
//           <Chart title="Ultimos 6 meses (Ventas)" aspect={2 / 1} />
          
//         </div>
//         <div className="barChar__container">
//         <BarChar/>
//         </div>
//         <div className="PieChart__container">
//           <PieChar/>
//         </div>
//         <div className="RadarChar__container">
//           <RadarChar/>
//         </div>
        
//         <div className="listContainer">
//           <div className="listTitle">Ultimas ordenes</div>
//           <Table  socket={socket}/>
//         </div>
//       </div>
//     </div>
//   );
// =======
import { io } from "socket.io-client";
import { BarChar } from "../../components/Recharts/BarChar/BarChar";
import { PieChar } from "../../components/Recharts/PieChar/PieChar";
import { RadarChar } from "../../components/Recharts/RadarChar/RadarChar";


const Home = () => {
	const socket = io(process.env.REACT_APP_API || "ws://localhost:3001");

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllOrders());
		dispatch(getAllUsers());
		dispatch(fetchProducts());
		dispatch(getAllInvoices());
	}, [dispatch]);

	return (
		<div className="home">
			<div className="homeContainer">
				<div className="widgets">
					<Widget type="usersQuantity" socket={socket} />
					<Widget type="ordersQuantity" socket={socket} />
					<Widget type="salesQuantity" socket={socket} />
					<Widget type="profits" socket={socket} />
				</div>
				<div className="charts">
					<Featured />
					<Chart title="Ultimos 6 meses (Ventas)" aspect={2 / 1} />
				</div>
 <div className="barChar__container">
        <BarChar/>
        </div>
        <div className="PieChart__container">
          <PieChar/>
        </div>
        <div className="RadarChar__container">
          <RadarChar/>
        </div>  



				<div className="listContainer">
					<div className="listTitle">Ultimas ordenes</div>
					<Table socket={socket} />
				</div>
			</div>
		</div>
	);
// >>>>>>> master
};

export default Home;
