import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  cursoRoot: {
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
  cursoTitle: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 20,
    marginTop: 10,
  },
  navegacionRoot: {
    flexGrow: 1,
  },
  navegacionCustomize: {
    minHeight: 36,
  },
  navegacionMenu: {
    marginRight: theme.spacing(2),
  },
  navegacionTitle: {
    flexGrow: 1,
  },
  perfilRoot: {
    maxWidth: "100%",
    display: "flex",
  },
  perfilContent: {
    flex: "1 0 auto",
  },
}));
