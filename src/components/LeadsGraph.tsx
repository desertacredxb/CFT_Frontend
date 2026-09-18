import { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import { TrendingUp, Users, Calendar, Loader2 } from "lucide-react";

const baseURL = import.meta.env.VITE_API_BASE_URL;

interface GraphItem {
  date: string;
  leads: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-neutral-700/80 p-3 rounded-lg shadow-xl text-white">
        <p className="text-xs text-gray-400 mb-1 font-medium">
          {moment(label).format("dddd, MMMM Do YYYY")}
        </p>
        <p className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          <span>{payload[0].value} New Leads</span>
        </p>
      </div>
    );
  }
  return null;
};

const LeadsGraph = () => {
  const [graphData, setGraphData] = useState<GraphItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/api/leads/graph`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          const formatted = res.data.map((item: any) => ({
            date: item._id,
            leads: item.count,
          }));
          setGraphData(formatted);
        }
      })
      .catch((err) => console.error("Graph data error:", err))
      .finally(() => setLoading(false));
  }, []);

  const totalLeads = graphData.reduce((acc, curr) => acc + curr.leads, 0);
  const peakLeads = graphData.length
    ? Math.max(...graphData.map((d) => d.leads))
    : 0;

  return (
    <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            Lead Acquisition Overview
          </h3>
          <p className="text-xs text-gray-400">
            Daily breakdown of new registered leads
          </p>
        </div>

        <div className="flex gap-4 bg-neutral-800/60 p-2.5 rounded-xl border border-neutral-800">
          <div className="px-2">
            <p className="text-[10px] text-gray-400 uppercase font-semibold">
              Total Recorded
            </p>
            <p className="text-base font-bold text-white">{totalLeads}</p>
          </div>
          <div className="border-r border-neutral-700" />
          <div className="px-2">
            <p className="text-[10px] text-gray-400 uppercase font-semibold">
              Peak Day
            </p>
            <p className="text-base font-bold text-emerald-400">{peakLeads}</p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="h-[320px] flex items-center justify-center text-gray-400 gap-2">
          <Loader2 className="w-5 h-5 animate-spin text-emerald-400" />
          <span className="text-sm">Loading graph data...</span>
        </div>
      ) : graphData.length === 0 ? (
        <div className="h-[320px] flex flex-col items-center justify-center text-gray-500">
          <Calendar className="w-8 h-8 mb-2 stroke-1" />
          <p className="text-sm">No lead data available for timeline.</p>
        </div>
      ) : (
        <div className="w-full h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={graphData}
              margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
            >
              <defs>
                <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#262626"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                stroke="#737373"
                tick={{ fill: "#a3a3a3", fontSize: 11 }}
                tickFormatter={(date) => moment(date).format("DD MMM")}
                dy={10}
              />
              <YAxis
                stroke="#737373"
                tick={{ fill: "#a3a3a3", fontSize: 11 }}
                allowDecimals={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="leads"
                stroke="#10b981"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#leadGradient)"
                activeDot={{
                  r: 6,
                  fill: "#10b981",
                  stroke: "#000",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default LeadsGraph;