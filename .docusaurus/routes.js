import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '203'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'cba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2aa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e2d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'cc9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '7e1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e1d'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a57'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'bf2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '6d6'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e68'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'b6d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '06b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '93d'),
    routes: [
      {
        path: '/docs/01 나의 첫 머신러닝/마켓과 머신러닝',
        component: ComponentCreator('/docs/01 나의 첫 머신러닝/마켓과 머신러닝', '189'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/01 나의 첫 머신러닝/인공지능과 머신러닝, 딥러닝',
        component: ComponentCreator('/docs/01 나의 첫 머신러닝/인공지능과 머신러닝, 딥러닝', '631'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/01 나의 첫 머신러닝/코랩과 주피터 노트북',
        component: ComponentCreator('/docs/01 나의 첫 머신러닝/코랩과 주피터 노트북', '6af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/02 데이터 다루기/데이터 전처리',
        component: ComponentCreator('/docs/02 데이터 다루기/데이터 전처리', 'df2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/02 데이터 다루기/훈련 세트와 테스트 세트',
        component: ComponentCreator('/docs/02 데이터 다루기/훈련 세트와 테스트 세트', '450'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/03 회귀 알고리즘과 모델 규제/선형 회귀',
        component: ComponentCreator('/docs/03 회귀 알고리즘과 모델 규제/선형 회귀', 'cd1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/03 회귀 알고리즘과 모델 규제/특성 공학과 규제',
        component: ComponentCreator('/docs/03 회귀 알고리즘과 모델 규제/특성 공학과 규제', '64b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/03 회귀 알고리즘과 모델 규제/k-최근접 이웃 회귀',
        component: ComponentCreator('/docs/03 회귀 알고리즘과 모델 규제/k-최근접 이웃 회귀', 'ea7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/04 다양한 분류 알고리즘/로지스틱 회귀',
        component: ComponentCreator('/docs/04 다양한 분류 알고리즘/로지스틱 회귀', 'ce7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/04 다양한 분류 알고리즘/선형 회귀',
        component: ComponentCreator('/docs/04 다양한 분류 알고리즘/선형 회귀', 'dc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/05 트리 알고리즘/결정 트리',
        component: ComponentCreator('/docs/05 트리 알고리즘/결정 트리', '9a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/05 트리 알고리즘/교차 검증과 그리드 서치',
        component: ComponentCreator('/docs/05 트리 알고리즘/교차 검증과 그리드 서치', '0b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/05 트리 알고리즘/트리의 앙상블',
        component: ComponentCreator('/docs/05 트리 알고리즘/트리의 앙상블', '0d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/06 비지도 학습/군집 알고리즘',
        component: ComponentCreator('/docs/06 비지도 학습/군집 알고리즘', '08b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/06 비지도 학습/주성분 분석',
        component: ComponentCreator('/docs/06 비지도 학습/주성분 분석', '303'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/06 비지도 학습/k-평균',
        component: ComponentCreator('/docs/06 비지도 학습/k-평균', '3a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/07 딥러닝을 시작합니다/신경망 모델 훈련',
        component: ComponentCreator('/docs/07 딥러닝을 시작합니다/신경망 모델 훈련', 'fea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/07 딥러닝을 시작합니다/심층 신경망',
        component: ComponentCreator('/docs/07 딥러닝을 시작합니다/심층 신경망', 'fe7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/07 딥러닝을 시작합니다/인공 신경망',
        component: ComponentCreator('/docs/07 딥러닝을 시작합니다/인공 신경망', '98b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/08 이미지를 위한 인공 신경망/합성곱 신경망을 사용한 이미지 분류',
        component: ComponentCreator('/docs/08 이미지를 위한 인공 신경망/합성곱 신경망을 사용한 이미지 분류', '7dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/08 이미지를 위한 인공 신경망/합성곱 신경망의 구성 요소',
        component: ComponentCreator('/docs/08 이미지를 위한 인공 신경망/합성곱 신경망의 구성 요소', '650'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/08 이미지를 위한 인공 신경망/합성곱 신경망의 시각화',
        component: ComponentCreator('/docs/08 이미지를 위한 인공 신경망/합성곱 신경망의 시각화', '46f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/09 텍스트를 위한 인공 신경망/순차 데이터와 순환 신경망',
        component: ComponentCreator('/docs/09 텍스트를 위한 인공 신경망/순차 데이터와 순환 신경망', '348'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/09 텍스트를 위한 인공 신경망/순환 신경망으로 IMDB 리뷰 분류하기',
        component: ComponentCreator('/docs/09 텍스트를 위한 인공 신경망/순환 신경망으로 IMDB 리뷰 분류하기', 'ee7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/09 텍스트를 위한 인공 신경망/LSTM과 GRU 셀',
        component: ComponentCreator('/docs/09 텍스트를 위한 인공 신경망/LSTM과 GRU 셀', '98a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/01-나의-첫-머신러닝',
        component: ComponentCreator('/docs/category/01-나의-첫-머신러닝', '50b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/02-데이터-다루기',
        component: ComponentCreator('/docs/category/02-데이터-다루기', '9e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/03-회귀-알고리즘과-모델-규제',
        component: ComponentCreator('/docs/category/03-회귀-알고리즘과-모델-규제', '0b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/04-다양한-분류-알고리즘',
        component: ComponentCreator('/docs/category/04-다양한-분류-알고리즘', 'caa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/05-트리-알고리즘',
        component: ComponentCreator('/docs/category/05-트리-알고리즘', '423'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/06-비지도-학습',
        component: ComponentCreator('/docs/category/06-비지도-학습', 'ce7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/07-딥러닝을-시작합니다',
        component: ComponentCreator('/docs/category/07-딥러닝을-시작합니다', 'a9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/08-이미지를-위한-인공-신경망',
        component: ComponentCreator('/docs/category/08-이미지를-위한-인공-신경망', 'bda'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/09-텍스트를-위한-인공-신경망',
        component: ComponentCreator('/docs/category/09-텍스트를-위한-인공-신경망', '57f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '005'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
