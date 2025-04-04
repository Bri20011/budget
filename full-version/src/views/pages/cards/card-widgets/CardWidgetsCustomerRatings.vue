<script setup lang="ts">
import { useTheme } from 'vuetify'
import { hexToRgb } from '@core/utils/colorConverter'

const vuetifyTheme = useTheme()

const series = [
  { name: 'Last Month', data: [20, 54, 22, 40, 20, 25, 16, 22] },
  { name: 'This Month', data: [20, 38, 27, 65, 43, 48, 32, 70] },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`
  const borderColor = `rgba(${hexToRgb(String(variableTheme['border-color']))},${variableTheme['border-opacity']})`

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 14,
        blur: 4,
        left: 0,
        enabled: true,
        opacity: 0.04,
        enabledOnSeries: [1],
        color: '#000',
      },
    },
    grid: {
      show: false,
      padding: {
        left: -7,
        top: -37,
        right: 34,
        bottom: 10,
      },
    },
    legend: { show: false },
    colors: [borderColor, `rgba(${hexToRgb(String(currentTheme.primary))}, 1)`],
    markers: {
      size: 6,
      strokeWidth: 5,
      strokeOpacity: 1,
      hover: { size: 6 },
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 6,
          seriesIndex: 1,
          fillColor: '#fff',
          strokeColor: currentTheme.primary,
          dataPointIndex: series[0].data.length - 1,
        },
        {
          size: 6,
          seriesIndex: 1,
          dataPointIndex: 3,
          fillColor: '#fff',
          strokeColor: '#000',
        },
      ],
    },
    stroke: {
      width: [3, 5],
      curve: 'smooth',
      lineCap: 'round',
      dashArray: [8, 0],
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          fontSize: '15px',
          colors: disabledTextColor,
          fontFamily: 'Public Sans',
        },
      },
    },
    yaxis: {
      labels: { show: false },
    },
  }
})

const moreList = [{ title: 'Share', value: 'share' }, { title: 'Refresh', value: 'refresh' }, { title: 'Delete', value: 'delete' }]
</script>

<template>
  <VCard title="Customer Ratings">
    <template #append>
      <MoreBtn :menu-list="moreList" />
    </template>

    <VCardText>
      <div class="d-flex align-center gap-2 mb-1">
        <h2 class="text-h2">
          4.0
        </h2>

        <VRating
          readonly
          :model-value="4"
          density="comfortable"
          color="#22303E29"
        />
      </div>
      <div class="d-flex  align-center gap-2">
        <VChip
          label
          size="small"
          color="primary"
        >
          +5.0
        </VChip>
        <span class="text-base">Points from last month</span>
      </div>
    </VCardText>

    <VueApexCharts
      type="line"
      :height="236"
      :options="chartOptions"
      :series="series"
    />
  </VCard>
</template>
