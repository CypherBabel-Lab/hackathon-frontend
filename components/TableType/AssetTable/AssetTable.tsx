import React from "react";
import { Table, Avatar } from "antd";
import icon from "../../../utils/TokenIcon/Icon.json";
import { ServerAssetes } from "../../../utils/consts/Consts";
import classes from "./style.module.less";
const AssetTable = ({ assetList }: any) => {
  const columns = [
    {
      title: "Token",
      dataIndex: "asset",
      key: "asset",
      render: (text: any, row: any) => {
        let iconAddress = icon[row.asset.symbol as keyof typeof icon];
        return (
          <div className={classes.denominationAssetColumn}>
            <Avatar
              src={`${ServerAssetes.Icon + iconAddress}`}
              className={classes.avatar}
            />
            {row.asset.symbol}
          </div>
        );
      },
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
  ];

  return <Table dataSource={assetList} columns={columns} />;
};

export default AssetTable;
