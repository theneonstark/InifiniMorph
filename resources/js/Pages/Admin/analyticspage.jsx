import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Area,
  AreaChart,
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import AdminLayout from "./adminlayout"

const visitData = [
  { name: "Jan", visits: 4000, pageViews: 2400, uniqueVisitors: 2400 },
  { name: "Feb", visits: 3000, pageViews: 1398, uniqueVisitors: 2210 },
  { name: "Mar", visits: 2000, pageViews: 9800, uniqueVisitors: 2290 },
  { name: "Apr", visits: 2780, pageViews: 3908, uniqueVisitors: 2000 },
  { name: "May", visits: 1890, pageViews: 4800, uniqueVisitors: 2181 },
  { name: "Jun", visits: 2390, pageViews: 3800, uniqueVisitors: 2500 },
  { name: "Jul", visits: 3490, pageViews: 4300, uniqueVisitors: 2100 },
  { name: "Aug", visits: 4000, pageViews: 2400, uniqueVisitors: 2400 },
  { name: "Sep", visits: 3000, pageViews: 1398, uniqueVisitors: 2210 },
  { name: "Oct", visits: 2000, pageViews: 9800, uniqueVisitors: 2290 },
  { name: "Nov", visits: 2780, pageViews: 3908, uniqueVisitors: 2000 },
  { name: "Dec", visits: 3490, pageViews: 4300, uniqueVisitors: 2100 },
]

const trafficSourceData = [
  { name: "Direct", value: 400 },
  { name: "Organic Search", value: 300 },
  { name: "Referral", value: 300 },
  { name: "Social Media", value: 200 },
  { name: "Email", value: 100 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const deviceData = [
  { name: "Desktop", users: 4000 },
  { name: "Mobile", users: 3000 },
  { name: "Tablet", users: 1000 },
]

const conversionData = [
  { name: "Jan", rate: 40 },
  { name: "Feb", rate: 30 },
  { name: "Mar", rate: 45 },
  { name: "Apr", rate: 50 },
  { name: "May", rate: 65 },
  { name: "Jun", rate: 60 },
  { name: "Jul", rate: 70 },
  { name: "Aug", rate: 75 },
  { name: "Sep", rate: 60 },
  { name: "Oct", rate: 65 },
  { name: "Nov", rate: 70 },
  { name: "Dec", rate: 80 },
]

const servicePerformanceData = [
  { name: "Website Development", revenue: 4000, clients: 24 },
  { name: "Mobile App Development", revenue: 3000, clients: 18 },
  { name: "SEO Optimization", revenue: 2000, clients: 29 },
  { name: "Content Creation", revenue: 2780, clients: 39 },
  { name: "UI/UX Design", revenue: 1890, clients: 48 },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("year")

  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last 7 days</SelectItem>
              <SelectItem value="month">Last 30 days</SelectItem>
              <SelectItem value="quarter">Last 90 days</SelectItem>
              <SelectItem value="year">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">34,578</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24,129</div>
                <p className="text-xs text-muted-foreground">+8.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.2%</div>
                <p className="text-xs text-muted-foreground">+1.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3m 42s</div>
                <p className="text-xs text-muted-foreground">+12s from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Website Traffic</CardTitle>
                <CardDescription>Website visits over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={visitData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="visits" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="pageViews" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="uniqueVisitors" stackId="1" stroke="#ffc658" fill="#ffc658" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={trafficSourceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {trafficSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Traffic by Device</CardTitle>
                <CardDescription>Distribution of users by device type</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart
                    data={deviceData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#8884d8" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most visited pages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/home</span>
                    <span className="ml-auto text-sm">12,543 views</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/services</span>
                    <span className="ml-auto text-sm">8,271 views</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/about</span>
                    <span className="ml-auto text-sm">6,392 views</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/blog</span>
                    <span className="ml-auto text-sm">5,147 views</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/contact</span>
                    <span className="ml-auto text-sm">3,879 views</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Referral Sources</CardTitle>
              <CardDescription>Top websites sending traffic to your site</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="text-xl font-bold">Google</div>
                  <div className="text-sm text-muted-foreground">15,234 visitors</div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[70%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-bold">Facebook</div>
                  <div className="text-sm text-muted-foreground">8,573 visitors</div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[45%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-bold">Twitter</div>
                  <div className="text-sm text-muted-foreground">4,890 visitors</div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[30%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-bold">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">3,245 visitors</div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[25%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-bold">Instagram</div>
                  <div className="text-sm text-muted-foreground">2,198 visitors</div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[20%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-bold">YouTube</div>
                  <div className="text-sm text-muted-foreground">1,756 visitors</div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[15%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.2%</div>
                <p className="text-xs text-muted-foreground">+1.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,254</div>
                <p className="text-xs text-muted-foreground">+15.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$128.50</div>
                <p className="text-xs text-muted-foreground">+4.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$161,142</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Conversion Rate Over Time</CardTitle>
              <CardDescription>Monthly conversion rate percentage</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                  data={conversionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{ r: 8 }} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Converting Pages</CardTitle>
                <CardDescription>Pages with highest conversion rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/services/web-development</span>
                    <span className="ml-auto text-sm">8.7%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/services/mobile-app</span>
                    <span className="ml-auto text-sm">7.2%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/pricing</span>
                    <span className="ml-auto text-sm">6.5%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/contact</span>
                    <span className="ml-auto text-sm">5.9%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">/blog/seo-tips</span>
                    <span className="ml-auto text-sm">4.8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conversion by Device</CardTitle>
                <CardDescription>Conversion rates by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm font-medium">Desktop</span>
                      </div>
                      <span className="text-sm font-medium">6.8%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[68%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm font-medium">Mobile</span>
                      </div>
                      <span className="text-sm font-medium">4.2%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[42%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm font-medium">Tablet</span>
                      </div>
                      <span className="text-sm font-medium">5.1%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[51%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">21</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$245,890</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Service Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$10,245</div>
                <p className="text-xs text-muted-foreground">+5.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Service Performance</CardTitle>
              <CardDescription>Revenue and clients by service</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={servicePerformanceData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue ($)" />
                  <Bar yAxisId="right" dataKey="clients" fill="#82ca9d" name="Clients" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Services</CardTitle>
                <CardDescription>Services with highest revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">Website Development</span>
                    <span className="ml-auto text-sm">$85,420</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">Mobile App Development</span>
                    <span className="ml-auto text-sm">$72,150</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">SEO Optimization</span>
                    <span className="ml-auto text-sm">$45,780</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">UI/UX Design</span>
                    <span className="ml-auto text-sm">$32,450</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-sm font-medium">Content Creation</span>
                    <span className="ml-auto text-sm">$10,090</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Service Growth</CardTitle>
                <CardDescription>Year-over-year growth by service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm font-medium">Website Development</span>
                      </div>
                      <span className="text-sm font-medium">+15%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[15%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm font-medium">Mobile App Development</span>
                      </div>
                      <span className="text-sm font-medium">+32%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[32%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm font-medium">SEO Optimization</span>
                      </div>
                      <span className="text-sm font-medium">+24%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[24%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm font-medium">UI/UX Design</span>
                      </div>
                      <span className="text-sm font-medium">+45%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[45%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
    </AdminLayout>
  )
}
