const serviceDetail = {
  ID: '9mnpnzenvg8p8tdbtq4wvbkcz',
  Version: {
    Index: 19,
  },
  CreatedAt: '2016-06-07T21:05:51.880065305Z',
  UpdatedAt: '2016-06-07T21:07:29.962229872Z',
  Spec: {
    Name: 'hopeful_cori',
    TaskTemplate: {
      ContainerSpec: {
        Image: 'redis',
      },
      Resources: {
        Limits: {},
        Reservations: {},
      },
      RestartPolicy: {
        Condition: 'any',
        MaxAttempts: 0,
      },
      Placement: {},
      ForceUpdate: 0,
    },
    Mode: {
      Replicated: {
        Replicas: 1,
      },
    },
    UpdateConfig: {
      Parallelism: 1,
      Delay: 1000000000,
      FailureAction: 'pause',
      Monitor: 15000000000,
      MaxFailureRatio: 0.15,
    },
    RollbackConfig: {
      Parallelism: 1,
      Delay: 1000000000,
      FailureAction: 'pause',
      Monitor: 15000000000,
      MaxFailureRatio: 0.15,
    },
    EndpointSpec: {
      Mode: 'vip',
      Ports: [
        {
          Protocol: 'tcp',
          TargetPort: 6379,
          PublishedPort: 30001,
        },
      ],
    },
  },
  Endpoint: {
    Spec: {
      Mode: 'vip',
      Ports: [
        {
          Protocol: 'tcp',
          TargetPort: 6379,
          PublishedPort: 30001,
        },
      ],
    },
    Ports: [
      {
        Protocol: 'tcp',
        TargetPort: 6379,
        PublishedPort: 30001,
      },
    ],
    VirtualIPs: [
      {
        NetworkID: '4qvuz4ko70xaltuqbt8956gd1',
        Addr: '10.255.0.2/16',
      },
      {
        NetworkID: '4qvuz4ko70xaltuqbt8956gd1',
        Addr: '10.255.0.3/16',
      },
    ],
  },
};

module.exports = serviceDetail;
