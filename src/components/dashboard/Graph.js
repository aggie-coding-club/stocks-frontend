import {ResponsiveLine} from '@nivo/line'
import Instructions from "./Instructions";
import moment from 'moment'
// NOTE: Nivo expects data to look like this:
// Array<{
//   id: string | number,
//   data: Array<{
//     x: number | string | Date, (we want a string, which can then be parsed into a date based on a format specifier)
//     y: number | string | Date, (we want an number, probably USD or some other measurement/index)
//   }>
// }>

// NOTE: a lot of Nivo's formatting requires arbitrary numbers/strings instead of CSS values,
// so my apologies if this makes your eyes bleed
// FIXME: avoid hardcoding the theme and instead rely on the background

const containerStyle = {
	width: "80vw",
	height: "50vh",
	alignItems: "center",
	margin: "12.5vh 0 12.5vh 0", // (100 - height) / 2
	paddingRight: "1vw",
	paddingLeft: "1vw",
};

export default function Graph({data, darkState}) {
	if (data.length === 0) {
		return (
			<div>
				<Instructions />
			</div>
		);
	} else {
		return (
			<div style={containerStyle}>
				<ResponsiveLine
					data={data}
					colors={{
						scheme: "set2",
					}}
					theme={{
						// for whatever reason, this is not set by the color scheme, so
						// we do it manually here
						textColor: darkState ? "white" : "black",
						tooltip: {
							container: {
								background: darkState ? "black" : "white",
							},
						},
						crosshair: {
							line: {
								stroke: darkState ? "white" : "black",
							},
						},
						grid: {
							line: {
								stroke: darkState ? "#404040" : "#E0E0E0",
							},
						},
					}}
					// enables the cool sliding line that displays intercepts
					enableSlices={"x"}
					margin={{
						top: 50,
						right: 110,
						bottom: 50,
						left: 60,
					}}
					// round the displayed y-value to 2 decimal places
					yFormat=" >-.2f"
					sliceTooltip={({slice}) => {
						return (
							<div
								style={{
									background: 'white',
									padding: "9px 12px",
									border: "1px solid #ccc",
								}}
							>
								{slice.points.map((point) => {
									const generatedTime = point.data.xFormatted;
									const timeString = moment(generatedTime).format("hh:mm A, DD MMM YYYY");
									return (<div
										key={point.x}
										style={{
											color: point.serieColor,
											padding: "3px 0",
										}}
									>
										<strong>${point.data.yFormatted}</strong>
										<div>{timeString}</div>
									</div>);
								})}
							</div>
						);
					}}
					yScale={{type: "linear", min: "auto", max: "auto"}}
					axisBottom={{
						// legend: "Date",
						// move axis label down to avoid hitting the axis line
						legendOffset: 36,
						legendPosition: "middle",
						tickValues: [],
					}}
					axisLeft={{
						legend: "USD",
						// move axis label left to avoid hitting the axis line
						legendOffset: -50 ,
						legendPosition: "middle",
					}}
					axisTop={{
						legend: "Your Daily Stonks",
						// move axis label up to avoid hitting the axis line
						legendOffset: -36,
						legendPosition: "middle",
						tickValues: [],
					}}
					legends={[
						{
							anchor: "bottom-right",
							direction: "column",
							// move legend box right to avoid hitting the graph
							translateX: 100,
							// ensure there's space for legend box to be populated
							itemWidth: 80,
							itemHeight: 20,
							itemOpacity: 0.75,
							symbolSize: 12,
							symbolShape: "circle",
							// make the hovered item more visible
							symbolBorderColor: "rgba(0, 0, 0, .5)",
							effects: [
								{
									on: "hover",
									style: {
										itemBackground: "rgba(0, 0, 0, .03)",
										itemOpacity: 1,
									},
								},
							],
						},
					]}
				/>
			</div>
		);
	}
}
