import { defineComponent } from 'vue'
// import { DotsVerticalIcon, ExternalLinkIcon, TrendingUpIcon } from '@heroicons/vue/outline'
import StatisticsChartCard from '../components/charts/StatisticsChartCard'
import BarChart from '../components/charts/BarChart'
import { users } from '../data/users'

const Card = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class="border rounded-lg shadow-sm">
        {slots.header && <div class="flex items-center justify-between px-4 py-2 border-b">{slots.header()}</div>}
        {slots.body && <div class="p-4">{slots.body()}</div>}
      </div>
    )
  },
})

export default defineComponent({
  setup() {
    return () => (
      <main class="p-5">
        <div class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
          <h1 class="text-2xl font-semibold whitespace-nowrap">SU Caferteria Dashboard</h1>

        </div>

        <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
          <StatisticsChartCard tag="a" href="#" title="Orders" canvasID="ordersChart" />
          <StatisticsChartCard tag="a" href="#" title="Sales" canvasID="salesChart" />
          <StatisticsChartCard tag="a" href="#" title="New Users" canvasID="newChart" />
          <StatisticsChartCard tag="a" href="#" title="Total Users" canvasID="usersChart" />
        </div>

        {/*  */}
        <div class="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-4">
          {/*  */}
          <Card>
            {{
              header: () => (
                <>
                  <h5 class="font-semibold">Customer FeedBack</h5>

                </>
              ),
              body: () => (
                <>
                  <ul class="mt-4 space-y-4 divide-y">
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>

                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>

                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                      </div>
                    </li>
                  </ul>
                </>
              ),
            }}
          </Card>

          <Card class="xl:col-span-3">
            {{
              header: () => (
                <>
                  <h5 class="font-semibold">Monthly Sales</h5>

                </>
              ),
              body: () => (
                <>
                  <div class="flex items-center p-4 space-x-4">
                    <span class="text-3xl font-medium">45%</span>
                    <span class="flex items-center px-2 space-x-2 text-sm text-green-800 bg-green-100 rounded">
                      <TrendingUpIcon class="w-4 h-4" />
                      <span>39.2%</span>
                    </span>
                  </div>
                  <BarChart canvasID="barChart" class="min-w-0 p-4 h-80" />
                </>
              ),
            }}
          </Card>
        </div>

        {/*  */}
        <h3 class="mt-6 text-xl">Users</h3>
        <div class="min-h-full mt-6 overflow-hidden overflow-x-auto border border-gray-200 rounded-md">
          <table class="w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Role
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {users.map(({ name, email, role, active }) => (
                <tr class="transition-all hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{name}</div>
                        <div class="text-sm text-gray-500">{email}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                    <div class="text-sm text-gray-500">Optimization</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class={[
                        'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 rounded-full',
                        active ? 'bg-green-100' : 'bg-red-100',
                      ]}
                    >
                      {active ? 'Active' : 'Not Active'}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{role}</td>
                  <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    )
  },
})
