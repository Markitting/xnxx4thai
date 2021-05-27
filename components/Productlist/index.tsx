import {
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import Layout from "../Layout";
import Footer from "../Footer";
import React from "react";
import Description from "../Description";
import Productlists from "../Productlists";
import { Content } from '../../interfaces/product'
import Category from "../Category";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    paper2: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: theme.spacing(2),
      textAlignLast: "center",
    },
    paper3: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: theme.spacing(2),
      textAlignLast: "right",
    },
    paper4: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: theme.spacing(2),
      textAlignLast: "left",
    },
    paper5: {
      ["@media (max-width:751px)"]: {
        display: "none",
      },
    },
    logo: {
      // float:'left',
      textAlignLast: "center",
    },
    love: {
      float: "right",
      textAlign: "right",
    },
    chat: {
      float: "right",
      textAlign: "right",
    },
    btnSell: {
      //   float: "right",
      marginLeft: "1em",
      color: "#fff",
      backgroundColor: "#00C900",
      ["@media (max-width:751px)"]: {
        marginLeft: "0em",
        fontSize: "11px",
      },
      ["@media (max-width:354px)"]: {
        marginLeft: "0em",
        fontSize: "9px",
      },
    },
    btnRegister: {
      //   float: "right",
      marginLeft: "1em",
      color: "#00C900",
      ["@media (max-width:1300px)"]: {
        display: "none",
      },
    },
    gridDis: {
      ["@media (max-width:751px)"]: {
        display: "none",
      },
    },
    textresult:{
      fontSize:'1.5em',
      fontWeight:'bold',
      color:'#213aa3',
    },
    arrow:{
      float:'right',
    },

  })
);

const Productlist = (props: any) => {
  
  const { data } = props.data
  // A Content
  const content = props.data.data.content;
  const contents: Content = data.contents
 console.log(content)

  const classes = useStyles();

  return (
    <Layout title="Productlist | KaideeWa.com">
         <Category/>
      <Container maxWidth="lg" className="container">
        <div className={classes.root}>
          {/* <Gallery2 data={content} /> */}
          {/* <Productlists data={content} /> */}
          <Productlists contents={contents} />     
          <Description />
        </div>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Productlist;
