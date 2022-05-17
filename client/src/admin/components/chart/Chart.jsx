import "./chart.scss";
// import moment from 'moment'
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

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

const data = [
	{ name: "Lunes", Total: 1200 },
	{ name: "Martes", Total: 2100 },
	{ name: "Miercoles", Total: 800 },
	{ name: "Jueves", Total: 1600 },
	{ name: "May", Total: 900 },
	{ name: "June", Total: 1700 },
];

const Chart = ({ aspect, title }) => {
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
