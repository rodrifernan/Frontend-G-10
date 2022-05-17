import "./chart.scss";
import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const dayjs = require("dayjs");
require("dayjs/locale/es");

dayjs.extend(require("dayjs/plugin/utc"));
dayjs.extend(require("dayjs/plugin/duration"));
dayjs.extend(require("dayjs/plugin/relativeTime"));
// let days = [];
// let today = moment();
// for (let i = 0; i < 6; i++){
//    let day = today.subtract(i, 'days');
//    days.push(day.format('dddd'));
// }
// console.log(days);

let days = [];
let today = dayjs();
for (let i = 0; i < 6; i++) {
	let day = today.subtract(i, "day");
	days.push(day.format("YYYY-MM-DD"));
}
console.log(days);

const Chart = ({ aspect, title }) => {
	const invoices = useSelector((state) => state.Allinvoices.Allinvoices);

	const invoiceArray = invoices.map((e) => {
		return {
			total: e.total,
			fecha: e.createdAt.substring(0, 10),
		};
	});
	console.log(invoiceArray);

	const sumaVentaHoy = invoiceArray
		.filter((e) => e.fecha === days[0])
		.map((e) => e.total)
		.reduce((pvalue, current) => pvalue + current, 0);
	console.log(sumaVentaHoy);

	const data = [
		{ name: days[5], Total: 30 },
		{ name: days[4], Total: 3100 },
		{ name: days[3], Total: 800 },
		{ name: days[2], Total: 500 },
		{ name: days[1], Total: 100 },
		{ name: days[0], Total: sumaVentaHoy },
	];

	return (
		<div className="chart">
			<div className="title">{title}</div>
			<ResponsiveContainer width="100%" aspect={aspect}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop
								offset="5%"
								stopColor="#8884d8"
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor="#8884d8"
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="gray" />
					<CartesianGrid
						strokeDasharray="3 3"
						className="chartGrid"
					/>
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Total"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#total)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
