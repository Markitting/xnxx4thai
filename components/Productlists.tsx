import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Button, createStyles, Grid, Link, Paper, Theme } from "@material-ui/core";
import Image from "next/image";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      border: "solid 1px #e1e1e1",
      padding: "0px",
    },
    mobileDetail: {
      width: "217",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      color: "#222",
      textAlign: "left",
      paddingRight: "5px",
      paddingLeft: "5px",
      marginTop: "0px",
      marginBottom: "0px",
      fontSize: "16px",
    },
    more: {
      color: "#429EFE",
      width: "fit-content",
      fontSize: "13px",
      float: "right",
      display: "flex",
      marginTop: "7px",
      ["@media (width:375px)"]: {
        marginTop: "0px",
        fontSize: "13px",
      },
      ["@media (max-width:500px)"]: {
        marginTop: "0px",
        fontSize: "13px",
      },
    },
    imageCategory: {
      width: 39.9,
      height: "auto",
    },
    textHeader: {
      fontSize: "1.5em",
      color: "#213aa3",
      fontWeight:'bold',

      ["@media (width:375px)"]: {
        marginLeft: "0%",
        fontSize: "14px",
      },
      ["@media (max-width:500px)"]: {
        marginLeft: "0%",
        fontSize: "14px",
      },
    },
    gridMobile: {
      ["@media (width:375px)"]: {
        display: "block !important",
        borderTop: "none",
      },
    },
    textLocation: {
      fontSize: "13px",
      textAlign: "left",
      color: "#7e7e7e",
      paddingRight: "5px",
      paddingLeft: "5px",
      marginTop: "0px",
      marginBottom: "0px",
    },
    imgChat: {
      width: "135px",
      height: "40px",
    },
    imgCall: {
      width: "135px",
      height: "40px",
    },
    gridFlex: {
      display: "flex",
    },
        arrowPos: {
      width: "10px",
      Height: "10px",
      marginTop: '-2px'
    },
    textCost:{
      textAlign: "left",
      fontSize: "2em",
      color: "#00C900",
      fontWeight:'bold',
      paddingLeft: '5px',
      marginTop:'0px',
    },
    btnMore:{
      color: "#fff",
      backgroundColor:'#00C900',
      paddingLeft:' 40%',
      paddingRight:' 40%',
      fontSize: '1.5em',
      '&:hover' : {
        backgroundColor:'#00C900',
      },
      ["@media (max-width:500px)"]: {
        paddingLeft:'20%',
      paddingRight:'20%',
      fontSize: '1em',
      },
    },
    btnCenter:{
      textAlign:'center',
    }
  })
);

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <hr/>
      {/* <p className={classes.textHeader}>
        ประกาศมาใหม่ ในหมวดมือถือ แท็บเล็ต
        <Link href="/productlist/name/1">
          <p className={classes.more}>
            ดูทั้งหมด
            <ArrowForwardIcon />
          </p>
        </Link>
      </p> */}
      <Grid container spacing={3} className={classes.gridMobile}>
        
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/2">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/3">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/4">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} sm={3}>
          <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src="/images/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMzAxLzE1MDg5NzMvZmluLmpwZw==.jpg"
              alt=""
              width={"450"}
              height={"300"}
            />
            <Link href="/product/name/1">
            <p className={classes.mobileDetail}>
              IPhone 11 Pro Max ประกันเหลือ 10 เดือนสถาพ ไม่มีรอย Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.1
            </p>
            </Link>
            <p className={classes.textLocation}>ลาดกระบัง</p>
            <p className={classes.textCost}>฿ 9200</p>
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
                <Image
                  className="img-chat"
                  src="/images/Chat.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
              <Grid item xs lg={6}>
                <Image
                  className="img-call"
                  src="/images/Call.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid className={classes.btnCenter} item xs={12} md={12} sm={12} lg={12} >
        <Button className={classes.btnMore} variant="contained">ดูมือถือ แท็บเล็ตทั้งหมด <ArrowForwardIcon/> </Button>
         </Grid>
      </Grid>
    </div>
  );
}