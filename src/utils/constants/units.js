export const UNITS = {
  KG: {
    ABBREV: 'Kg',
    CONSTANT: 'KG',
    CONVERT: {
      TO: {
        KG: 1,
        LB: 2.20462,
        POOD: 0.0610475,
      },
    },
    FULL_NAME: 'kilogram',
  },
  LB: {
    ABBREV: 'Lb',
    CONSTANT: 'LB',
    CONVERT: {
      TO: {
        KG: 0.453592,
        LB: 1,
        POOD: 0.0276907,
      },
    },
    FULL_NAME: 'pound',
  },
  POOD: {
    ABBREV: 'Pood',
    CONSTANT: 'POOD',
    CONVERT: {
      TO: {
        KG: 16.3807,
        LB: 36.1132,
        POOD: 1,
      },
    },
    FULL_NAME: 'pood',
  },
};
