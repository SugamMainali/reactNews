import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    borderRadius: 10,
    color: "white",
    margin: "5em 0.2em",
    // backgroundColor: "rgba(21, 101, 192)",
    // margin: "0 12px",
    // textAlign: "center",
    // height: "25vmin",
    // [theme.breakpoints.down("sm")]: {
    //   flexDirection: "column-reverse",
    //   textAlign: "center",
    //   width: "100%",
    //   height: "initial",
    //   "&:nth-of-type(1)": {
    //     marginBottom: "12px",
    //   },
    // },
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});
