import * as React from "react";
import MuiTextField from "@mui/material/TextField";

export interface Props {}

/** TextField **/
export default function TextField({ ...props }: Props): React.ReactElement {
  return <MuiTextField variant="outlined" {...props} />;
}
