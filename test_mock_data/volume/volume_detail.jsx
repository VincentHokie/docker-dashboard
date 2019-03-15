const volumeDetail = {
  Name: 'tardis',
  Driver: 'custom',
  Mountpoint: '/var/lib/docker/volumes/tardis',
  Status: {
    hello: 'world',
  },
  Labels: {
    'com.example.some-label': 'some-value',
    'com.example.some-other-label': 'some-other-value',
  },
  Scope: 'local',
  CreatedAt: '2016-06-07T20:31:11.853781916Z',
};

module.exports = volumeDetail;
