import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";

dayjs.locale("es");
dayjs.extend(localeData);

const Featured = () => {
  const invoices = useSelector((state) => state.Allinvoices.Allinvoices);

  let days = [];
  let today = dayjs();
  for (let i = 0; i < 6; i++) {
    let day = today.subtract(i, "day");
    days.push(day.format("YYYY-MM-DD"));
  }
  console.log(days);
  const invoiceArray = invoices.map((e) => {
    return {
      total: e.total,
      fecha: e.createdAt.substring(0, 10),
    };
  });
  // console.log(invoiceArray);

  const sumaVentaHoy = invoiceArray
    .filter((e) => e.fecha === e.fecha)
    .map((e) => e.total)
    .reduce((pvalue, current) => pvalue + current, 0);
  // console.log(sumaVentaHoy);

  const montoMeta = 12000
  const porcentajeMeta = (sumaVentaHoy *100 /montoMeta).toFixed(2)
  console.log(porcentajeMeta);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Venta total hoy</h1>
        {/* <MoreVertIcon fontSize="small" /> */}
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={porcentajeMeta} text={`${porcentajeMeta}%`} strokeWidth={5} />
        </div>
        <p className="title">Ventas de hoy</p>
        <p className="amount">${sumaVentaHoy}</p>
        {/* <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p> */}
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Meta</div>
            <div className="itemResult positive">
              {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              <div className="resultAmount">${montoMeta}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Semana pasada</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">${sumaVentaHoy}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Mes pasado</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">${sumaVentaHoy}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
