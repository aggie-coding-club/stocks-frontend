import {ResponsiveLine} from '@nivo/line'

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
  width: '80vw',
  height: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default function Graph({data}) {
  if (data.length === 0) {
    return (
      <div style={containerStyle}>
        <p>Toggle some stocks to graph them! (this is a placeholder)</p>
      </div>
    );
  } else {
    return (
      <div style={containerStyle}>
        <ResponsiveLine
          data={data}
          colors={{
            scheme: 'set2'
          }}
          theme={{
            // for whatever reason, this is not set by the color scheme, so
            // we do it manually here
            textColor: 'white',
            tooltip: {
              container: {
                background: 'black'
              }
            },
            crosshair: {
              line: {
                stroke: 'white'
              }
            },
            grid: {
              line: {
                stroke: '#404040'
              }
            }
          }}
          // enables the cool sliding line that displays intercepts
          enableSlices={'x'}
          margin={{
            top: 50,
            right: 110,
            bottom: 50,
            left: 60
          }}
          // round the displayed y-value to 2 decimal places
          yFormat=" >-.2f"
          axisBottom={{
            legend: 'Date',
            // move axis label down to avoid hitting the axis line
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            legend: 'USD',
            // move axis label left to avoid hitting the axis line
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          axisTop={{
            legend: 'Your Daily Stonks',
            // move axis label up to avoid hitting the axis line
            legendOffset: -36,
            legendPosition: 'middle'
          }}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              // move legend box right to avoid hitting the graph
              translateX: 100,
              // ensure there's space for legend box to be populated
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              // make the hovered item more visible
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}
