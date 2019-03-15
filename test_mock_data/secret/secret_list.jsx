const secretList = [
  {
    ID: 'blt1owaxmitz71s9v5zh81zun',
    Version: {
      Index: 85,
    },
    CreatedAt: '2017-07-20T13:55:28.678958722Z',
    UpdatedAt: '2017-07-20T13:55:28.678958722Z',
    Spec: {
      Name: 'mysql-passwd',
      Labels: {
        'some.label': 'some.value',
      },
      Driver: {
        Name: 'secret-bucket',
        Options: {
          OptionA: 'value for driver option A',
          OptionB: 'value for driver option B',
        },
      },
    },
  },
  {
    ID: 'ktnbjxoalbkvbvedmg1urrz8h',
    Version: {
      Index: 11,
    },
    CreatedAt: '2016-11-05T01:20:17.327670065Z',
    UpdatedAt: '2016-11-05T01:20:17.327670065Z',
    Spec: {
      Name: 'app-dev.crt',
      Labels: {
        foo: 'bar',
      },
    },
  },
];

module.exports = secretList;
