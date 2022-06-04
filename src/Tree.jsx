import React from "react";
import "../src/Tree.scss";
import { bgColor, bgColorDark, data } from "./constants";
const Tree = () => {
  const [isSelect, setSelect] = React.useState(false);
  return (
    <div className="treeMain">
      <h1>SALES TREE</h1>
      <br />
      <div
        onClick={() => {
          setSelect(!isSelect);
        }}
      >
        <Nodees data={data} isParent={true} isOpened={true} />
      </div>
      <div className="child">
        {data.factories.map((item, index) => {
          return <Nodees key={index} isOpened={isSelect} data={item} />;
        })}
      </div>
    </div>
  );
};

const Nodees = ({ data, isOpened = false, isParent = false }) => {
  const [isSelectChild, setSelectChild] = React.useState(false);
  const salePercentage = (
    (data.totalSales.split(" ")[0] / data.totalStocks.split(" ")[0]) *
    100
  ).toFixed(0);
  return (
    <div className="datas">
      <div
        onClick={() => {
          setSelectChild(!isSelectChild);
        }}
        style={{
          cursor: "pointer",
          display: isOpened ? "block" : "none",
        }}
        className="items"
      >
        <h3>{data.name}</h3>
        <p className="status" style={bgColor(salePercentage)}>
          {salePercentage >= 50 ? "On Track" : "At Risk"}
        </p>
        <div className="stats">
          <div className="sales">
            <p>Total Sales {data.totalSales}</p>
            <p>Total Stocks {data.totalStocks}</p>
          </div>
          <div className="satus">{salePercentage} % complete</div>
        </div>
        <div className="zGraphic" style={bgColor(salePercentage)}></div>
        <div
          className="graphicPercent"
          style={{
            width: `${salePercentage}%`,
            backgroundColor: bgColorDark(salePercentage),
            //#f8d0d1
          }}
        ></div>
      </div>

      {!isParent ? (
        isSelectChild ? (
          <div className="child">
            {data.godowns.map((item, index) => {
              return (
                <Nodees
                  key={index}
                  data={item}
                  isOpened={true && isOpened}
                  isParent={true}
                />
              );
            })}
          </div>
        ) : null
      ) : null}
    </div>
  );
};

export default Tree;
