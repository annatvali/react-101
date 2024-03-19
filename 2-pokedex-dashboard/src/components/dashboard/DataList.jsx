import React from "react";

const DataList = ({ data, title }) => {
  return (
    <div className="dataList">
      <h4>{title}</h4>
      <div>
        {data.map((data, index) => (
          <div key={index} className="flex ">
            <h5>{data.name}</h5>
            <h5>{data.sales}</h5>
            <h5>{data.revenue}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataList;
