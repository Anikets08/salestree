export const data = {
  id: "1",
  name: "TATA STEEL",
  totalSales: "300 crore",
  totalStocks: "600 crore",
  factories: [
    {
      id: "1",
      name: "Factory A",
      totalSales: "100 crore",
      totalStocks: "200 crore",
      godowns: [
        { name: "Godown A", totalSales: "25 crore", totalStocks: "100 crore" },
        { name: "Godown B", totalSales: "75 crore", totalStocks: "100 crore" },
      ],
    },
    {
      id: "2",
      name: "Factory B",
      totalSales: "125 crore",
      totalStocks: "300 crore",
      godowns: [
        { name: "Godown A", totalSales: "100 crore", totalStocks: "200 crore" },
        { name: "Godown B", totalSales: "25 crore", totalStocks: "100 crore" },
      ],
    },
    {
      id: "3",
      name: "Factory C",
      totalSales: "75 crore",
      totalStocks: "100 crore",
      godowns: [
        { name: "Godown A", totalSales: "25 crore", totalStocks: "25 crore" },
        { name: "Godown B", totalSales: "50 crore", totalStocks: "75 crore" },
      ],
    },
  ],
};

export var bgColor = (salePercentage) => {
  return {
    backgroundColor:
      salePercentage == 50
        ? "#f9ecd9"
        : salePercentage > 50
        ? "#d1f1e4"
        : "#f8d0d1",
  };
};

export var bgColorDark = (salePercentage) => {
  return salePercentage == 50
    ? "#ffb14d" //#f9ecd9
    : salePercentage > 50
    ? "#34d087" //#d1f1e4
    : "#fb2829";
};
