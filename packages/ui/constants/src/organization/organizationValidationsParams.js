const ORGANIZATION_VALIDATIONS_PARAMS = {
  individualEntrepreneur: {
    maxLengthINN: 12,
    maxLengthOGRN: 15,
    weightsForCheckNumINN: {
      elevenChar: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0],
      twelveChar: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
    },
  },
  legalPerson: {
    maxLengthINN: 10,
    maxLengthOGRN: 13,
    weightForCheckNumINN: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
  },
};

export default ORGANIZATION_VALIDATIONS_PARAMS;
