import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};


const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      {/* <nav>
        <img className="logo1" src="/images/logo1.png" width='220px' height='51.45' /> 
        <img className="btn-love" src="/images/love.png"  width='31px' height='25'/>
        <img className="btn-chat" src="/images/chat2.png" width='35px' height='31' />

       <a className="text-login" href="Prodict"> เข้าสู่ระบบ / สมัครสมาชิก</a>
         
        
        <Button variant="contained" className="btn-sell">
          ลองขาย
        </Button>
      </nav> */}
    </header>
    <Header/>
    {children}
  </div>
);

export default Layout;
