const createContext = initialValue => ({
  data: initialValue,
  updateData(data) {
    this.data = { ...this.data, ...data };
  },
});

module.exports = { createContext };
