import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import FaviconWhiteUrl from '@site/static/img/favicon2.png';
import PlatformWinIcon from '@site/static/img/windows11.svg';

import styles from './index.module.css';
 
function HomepageHeader(prop) {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
  
        {/* <div>
          <img className={styles.title_image}  src={FaviconWhiteUrl} />

          
        </div> */}
        <h1 className="hero__title"> <img className={styles.title_image_left}  src={FaviconWhiteUrl} /> {siteConfig.title}</h1>
       
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div  className={styles.down_load}>
  <div className ={"card " +  `${ styles.card_override }` }>
   
  <div class="card__header">
      <h3>最新版本:v1.0.0</h3>
    </div>
    <div class="card__body">
    <Link  className="button button--lg  "   to={`${siteConfig.customFields.downLoadUrl}`} >
    <div className={styles.platform_item}>
    <PlatformWinIcon width={32} fill={"orange"}></PlatformWinIcon>
    <p className={styles.down_load_name_p}>pixiu-quant_1.0.0_x64_zh-CN.msi.zip</p>
    </div>
    
      
 

</Link>
    
     
    </div>
    <div class="card__footer">
      {/* <button class="button button--secondary button--block">See All</button> */}
      <p>目前只支持windows平台</p>
    </div>
   
  </div>
</div>
  
        {/* <div className={styles.buttons}>
        <Link  className="button button--secondary button--lg"   to="#" >

          下载

        </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="个人量化平台">
      <HomepageHeader />
      <main>
        <HomepageFeatures   />
      </main>
    </Layout>
  );
}
