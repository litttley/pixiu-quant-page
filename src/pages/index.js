import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import FaviconWhiteUrl from '@site/static/img/favicon2.png';
import PlatformWinIcon from '@site/static/img/windows11.svg';

import styles from './index.module.css';

function HomepageHeader(prop) {
  const { siteConfig } = useDocusaurusContext();
  const [isDrop, setIsDrop] = useState(false)
  const [disx, setDisx] = useState()
  const [disy, setDisy] = useState()
  const [moveX, setmoveX] = useState(0)
  const [hanldeLeft, setHanldeLeft] = useState(-16)
  const handle_ref = useRef();
  const cardOverrideRef = useRef();

  useEffect(() => {




  }, [])

  window.onmouseup = function () {

    setIsDrop(false);
  }
  window.onmousemove = function (event) {

    if (isDrop) {


      //pageX 属性返回鼠标指针的水平坐标（相对文档
      const left = (event.pageX - disx)

      const borderDistanceLeft = left - cardOverrideRef.current.clientWidth + 16;

      if (borderDistanceLeft < 0) {
        setHanldeLeft(left)
      }



    }
  }

  const handleOnMouseDown = (event) => {

    setmoveX(moveX)

    const disx = event.pageX - handle_ref.current.offsetLeft

    const disy = event.pageY - handle_ref.current.offsetTop

    setDisx(disx);
    setDisy(disy);

    setIsDrop(true);
  }
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        {/* <div>
          <img className={styles.title_image}  src={FaviconWhiteUrl} />

          
        </div> */}
        <h1 className="hero__title"> <img className={styles.title_image_left} src={FaviconWhiteUrl} /> {siteConfig.title}</h1>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.down_load}>
          <div className={"card " + `${styles.card_override}`} ref={cardOverrideRef}>

            <div class="card__header">
              <h3>最新版本:v1.0.0</h3>
            </div>
            <div class="card__body">
              <Link className="button button--lg  " to={`${siteConfig.customFields.downLoadUrl}`} >
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

            <div className={styles.other_content} style={{ clip: `rect(auto ${hanldeLeft + 16}px auto auto)` }} >
              <div class="card__header">
                <h3>测试账号</h3>
              </div>

              <div class="card__body">

                <p>用户名:pixiu_test</p>
                <p>密码:pixiu_test</p>

              </div>

            </div>

            <div className={styles.handle_container}>
              <div className={styles.handle_bar_container}>
                <div className={styles.handle_root} ref={handle_ref} onMouseDown={handleOnMouseDown} style={{ left: `${hanldeLeft}px` }}>

                  <div className={styles.handle_line} ></div>
                  <div className={styles.handle_button} >
                    <div className={styles.handle_arrow_left}></div>
                    <div className={styles.handle_arrow_right}></div>
                    <div></div>
                    {/* <div style="width: 0px; height: 0px; border-top: 8px solid transparent; border-right: 10px solid; border-bottom: 8px solid transparent;"></div>
                <div style="width: 0px; height: 0px; border-top: 8px solid transparent; border-right: 10px solid; border-bottom: 8px solid transparent; transform: rotate(180deg);"></div> */}
                  </div>
                  <div className={styles.handle_line} ></div>

                </div>
              </div>

            </div>

          </div>





        </div>


      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="个人量化平台">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
