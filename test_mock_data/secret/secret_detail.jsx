const secretDetail = {
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
    Driver: {
      Name: 'secret-bucket',
      Options: {
        OptionA: 'value for driver option A',
        OptionB: 'value for driver option B',
      },
    },
  },
};

module.exports = secretDetail;
