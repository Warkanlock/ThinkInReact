import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  courseRoot: {
    minWidth: 275,
  },
  cardList: {
    maxWidth: 345,
  },
  list: {
    maxWidth: 345,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  bullet: {
    display: "inline-block",
    margin: "0 20px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  courseTitle: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 20,
    marginTop: 10,
  },
  navbarRoot: {
    flexGrow: 1,
  },
  navbarCustomize: {
    minHeight: 36,
  },
  navbarMenu: {
    marginRight: theme.spacing(2),
  },
  navbarTitle: {
    flexGrow: 1,
  },
  profileRoot: {
    maxWidth: "100%",
    display: "flex",
  },
  profileContent: {
    flex: "1 0 auto",
  },
}));
