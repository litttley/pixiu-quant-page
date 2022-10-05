import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '多端使用',
    Svg: require('@site/static/img/undraw_devices_re_dxae.svg').default,
    description: (
      <>
       貔貅量化平台能运行在浏览器,电脑桌面(目前仅支持windows,后续会支持mac、linux平台),android(稍后支持),ios(稍后支持)
      </>
    ),
  },
  {
    title: '消息提醒',
    Svg: require('@site/static/img/undraw_push_notifications_re_t84m.svg').default,
    description: (
      <>
       貔貅量化平台实时快速推送股票监听、下单、成交信息,其中包括websocket推送，邮件推送,后续会支持更多推送方式。
      </>
    ),
  },
  {
    title: '量化策略',
    Svg: require('@site/static/img/undraw_finance_re_gnv2.svg').default,
    description: (
      <>
        貔貅量化平台支持策略监听、交易下单，后续会开放策略选股接口等集成用户个人策略。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
