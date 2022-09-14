interface comingFeature {
  key: number,
  group: string,
  feature: string,
  progress: string
}

const COMINGFEATURES: comingFeature[] = [
  {
    key: 1,
    group: 'Data',
    feature: 'Error handling for invalid ETF symbol',
    progress: 'developing'
  },
  {
    key: 2,
    group: 'Data',
    feature: 'Export ETF Data as CSV file',
    progress: 'developing'
  }
]

export default COMINGFEATURES
