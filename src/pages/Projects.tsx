import Plot from "react-plotly.js";

export function Projects() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Sample Data Visualization</h3>
        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [10, 15, 13, 17],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "blue" },
            },
          ]}
          layout={{ width: 600, height: 400, title: "Line Chart Example" }}
        />
      </div>
    </div>
  );
}