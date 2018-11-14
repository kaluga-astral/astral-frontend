import cn from "classnames";
import React from "react";
import MuiTable from "@material-ui/core/Table";
import { withStyles } from "@material-ui/core/styles";

const Table = ({ classes, className, tableClassName, ...props }) => (
  <div className={cn(classes.root, className)}>
    <MuiTable className={tableClassName} {...props} />
  </div>
);

export default withStyles({
  root: {
    overflowX: "scroll"
  }
})(Table);
