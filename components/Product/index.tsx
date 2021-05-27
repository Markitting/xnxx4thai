import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import Layout from "../Layout";
import Footer from "../Footer";
import React from "react";
import PicList from "../PicList";
import ProductDetail from "../ProductDetail";
import { Content } from '../../interfaces/product'
import Announcemobile from "../Announcemobile";
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
  })
);

const Product = (props: any) => {
  const { data } = props.data
  // A Content
  const content = data.content;
  const contents: Content[] = data.contents.datas;
  
// console.log(contents)
 console.log(props.data.data.content)
  const classes = useStyles();


  return (
    <Layout title="Product | KaideeWa.com">
      <Category/>
      <Container maxWidth="lg" className="container">
        <div className={classes.root}>

          <Announcemobile contents={contents}/>
        </div>
       
      </Container>
      <Footer />
    </Layout>
  );
};

export default Product;
