import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>Common Weather App </title>
      <meta 
        name="description"
        content={
             'Weather application that takes in users zip code and dsiplays the 5-day forcast for that zip-code'
        }
       />
      <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
         <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

  {props.children}

</div>
);

export default Layout;