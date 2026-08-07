import dormManagementImage from '../assets/works/dorm-management.png'
import mitsubaImage from '../assets/works/mitsuba.png'
import naniwoSuteruImage from '../assets/works/naniwo-suteru.png'
import noteImage from '../assets/works/note.png'
import portfolioImage from '../assets/works/portfolio.png'

export const homeWorksItems = [
  {
    id: 'portfolio',
    image: {
      src: portfolioImage,
      alt: 'ポートフォリオサイトを表示したノートPC',
    },
    title: 'ポートフォリオ',
    category: 'デザイン',
  },
  {
    id: 'mitsuba',
    image: {
      src: mitsubaImage,
      alt: '有限会社三つ葉のデザイン資料',
    },
    title: '有限会社三つ葉',
    category: 'デザイン',
  },
  {
    id: 'naniwo-suteru',
    image: {
      src: naniwoSuteruImage,
      alt: '何を捨てる？のビジュアル',
    },
    title: '何を捨てる？',
    category: '運営',
  },
  {
    id: 'dorm-management',
    image: {
      src: dormManagementImage,
      alt: '寮運営に関するホワイトボード',
    },
    title: '寮運営',
    category: '運営',
  },
]

export const worksPageItems = [
  ...homeWorksItems,
  {
    id: 'note',
    image: {
      src: noteImage,
      alt: 'noteのロゴマーク',
    },
    title: 'note',
    category: '言葉',
  },
]
