interface feature {
  key: number,
  group: string,
  feature: string,
  completedAt: string
}

const FEATURES: feature[] = [
  {
    key: 1,
    group: 'Infra',
    feature: 'Set up AWS Server through Elastic Beanstalk',
    completedAt: '2022-08-06'
  },
  {
    key: 2,
    group: 'Data',
    feature: 'Set up api route to get one ETF data',
    completedAt: '2022-08-16'
  },
  {
    key: 3,
    group: 'Infra',
    feature: 'Set up rate limiter for application',
    completedAt: '2022-08-19'
  },
  {
    key: 4,
    group: 'UX',
    feature: 'Cache route response',
    completedAt: '2022-08-20'
  },
  {
    key: 5,
    group: 'Infra',
    feature: 'Set up HTTPS through AWS Route 53',
    completedAt: '2022-09-02'
  },
  {
    key: 6,
    group: 'UX',
    feature: 'Complete Features section on landing page',
    completedAt: '2022-09-06'
  }
]

export default FEATURES
