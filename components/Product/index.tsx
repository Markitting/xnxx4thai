import { Button, Container, createStyles, Grid, Link, makeStyles, Paper, Theme } from '@material-ui/core'
import Layout from '../Layout'
import Footer from '../Footer'
import React from 'react'
import PicList from '../PicList'
import ProductDetail from '../ProductDetail'
import Search2 from '../Search2'
import Image from "next/image";
import Announcemobile from '../Announcemobile'

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

        display: 'none',
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
        fontSize: '11px'
      },
      ["@media (max-width:354px)"]: {

        marginLeft: "0em",
        fontSize: '9px'
      },
    },
    btnRegister: {
      //   float: "right",
      marginLeft: "1em",
      color: "#00C900",
      ["@media (max-width:1300px)"]: {

        display: 'none',
      },

    },
    gridDis: {
      ["@media (max-width:751px)"]: {

        display: 'none',
      },
    },
  })
);


const Product = (props: any) => {
  // A Content
  const content = props.data.data.content

  const classes = useStyles();
  // const router = useRouter()
  // const { data } = props.data
  // const contents: Content[] = data.contents.datas
  // const keywords: Keyword[] = data.keywords.datas

  const items = []

  // useEffect(() => {
  //     router.push('/Product')

  // })

  // for (const [index, value] of contents.entries()) {
  //     value.content_title

  //     items.push(<li key={index}>{value.content_title}</li>)
  // }

  return (
    <Layout title="Home | KaideeWa.com">
      <Container maxWidth="lg" className="container">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={4} lg={3}>
              <Paper className={classes.paper2}>
                <Image
                  className={classes.logo}
                  src="/images/logo1.png"
                  alt=""
                  width={"170"}
                  height={"45"}
                />
              </Paper>
            </Grid>
            <Grid item xs lg={3} className={classes.paper5}>
              <Paper className={classes.paper5}>

              </Paper>
            </Grid>
            <Grid item xs lg={1} className={classes.gridDis}>
              <Paper className={classes.paper3}>
                <Image
                  className={classes.love}
                  src="/images/love.png"
                  alt=""
                  width={"35"}
                  height={"35"}
                />
              </Paper>
            </Grid>
            <Grid item xs lg={1} >
              <Paper className={classes.paper4}>
                <Image
                  className={classes.love}
                  src="/images/chat2.png"
                  alt=""
                  width={"35"}
                  height={"35"}
                />
              </Paper>
            </Grid>
            <Grid item xs lg={3}>
              <Paper className={classes.paper}>
                {/* <Button   color="primary">
              เข้าสู่ระบบ / สมัครสมาชิก
            </Button> */}
                <Link href="/about">
                  <a className={classes.btnRegister}>เข้าสู่ระบบ / สมัครสมาชิก</a>
                </Link>
                <Button className={classes.btnSell} variant="contained">
                  ลองขาย
            </Button>
              </Paper>
            </Grid>
          </Grid>
          <Search2 />
          <PicList />
          <ProductDetail />
          <Announcemobile />
          <Footer />
        </div>

      </Container>
      <Footer />
    </Layout>

  )
}

export default Product