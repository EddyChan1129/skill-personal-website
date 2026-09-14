export type ProjectLocale = "en" | "zh";

export const projects = {
  "my-bae-gel": {
    liveUrl: "https://my-bae-gel-booking.vercel.app/",
    copy: {
      en: {
        context: "Production administration portal",
        title: "My Bae Gel production admin.",
        summary:
          "A production administration portal for managing café bookings, products and partner access.",
        meta: [
          ["Role", "Full-stack development"],
          ["Stack", "Next.js, Firebase"],
          ["Features", "Calendar booking, catalogue management, café accounts"],
        ],
        galleryTitle: "Product screens.",
        galleryIntro:
          "Booking, catalogue and partner workflows designed as one production system.",
        galleryLabel: "My Bae Gel production administration screens",
        openSite: "Open live site",
      },
      zh: {
        context: "生產管理平台",
        title: "My Bae Gel 生產管理系統。",
        summary: "管理咖啡店預約、產品目錄及合作夥伴帳戶的生產管理平台。",
        meta: [
          ["角色", "全端開發"],
          ["技術", "Next.js、Firebase"],
          ["功能", "日曆預約、產品管理、咖啡店帳戶"],
        ],
        galleryTitle: "產品介面。",
        galleryIntro: "將預約、產品目錄及合作夥伴流程整合成一個生產系統。",
        galleryLabel: "My Bae Gel 生產管理系統畫面",
        openSite: "開啟網站",
      },
    },
    shots: [
      {
        src: "/my-bae-gel-booking.png",
        width: 2428,
        height: 2002,
        featured: true,
        copy: {
          en: {
            alt: "My Bae Gel café booking interface with a production calendar and order builder",
            caption: "Café booking calendar and order builder",
          },
          zh: {
            alt: "My Bae Gel 咖啡店預約介面，顯示生產日曆及訂單建立功能",
            caption: "咖啡店預約日曆及訂單建立",
          },
        },
      },
      {
        src: "/my-bae-gel-date-available.png",
        width: 986,
        height: 1426,
        copy: {
          en: {
            alt: "My Bae Gel admin form for blocking an available production date",
            caption: "Block an available production date",
          },
          zh: {
            alt: "My Bae Gel 管理員封鎖可用生產日期的表格",
            caption: "封鎖可用生產日期",
          },
        },
      },
      {
        src: "/my-bae-gel-date-blocked.png",
        width: 986,
        height: 1188,
        copy: {
          en: {
            alt: "My Bae Gel admin view showing a blocked production date",
            caption: "Blocked date state and reopen action",
          },
          zh: {
            alt: "My Bae Gel 管理員查看已封鎖生產日期的畫面",
            caption: "已封鎖日期及重新開放操作",
          },
        },
      },
      {
        src: "/my-bae-gel-catalogue.png",
        width: 1420,
        height: 1820,
        copy: {
          en: {
            alt: "My Bae Gel catalogue creation and product management interface",
            caption: "Catalogue creation and product availability",
          },
          zh: {
            alt: "My Bae Gel 產品目錄建立及管理介面",
            caption: "產品目錄建立及供應狀態管理",
          },
        },
      },
      {
        src: "/my-bae-gel-account.png",
        width: 1414,
        height: 1564,
        copy: {
          en: {
            alt: "My Bae Gel café account onboarding form",
            caption: "Café account onboarding",
          },
          zh: {
            alt: "My Bae Gel 咖啡店帳戶登記表格",
            caption: "咖啡店帳戶登記",
          },
        },
      },
      {
        src: "/my-bae-gel-booking-success.png",
        width: 1218,
        height: 1738,
        copy: {
          en: {
            alt: "My Bae Gel booking confirmation with an order summary",
            caption: "Booking confirmation and order summary",
          },
          zh: {
            alt: "My Bae Gel 預約成功及訂單摘要畫面",
            caption: "預約確認及訂單摘要",
          },
        },
      },
    ],
  },
  "fowl-to-phoenix": {
    copy: {
      en: {
        context: "Bilingual vocabulary learning",
        title: "Fowl to Phoenix learning platform.",
        summary:
          "A focused vocabulary-learning application with bilingual lessons, spaced review, progress tracking and responsive study flows.",
        meta: [
          ["Role", "Full-stack development"],
          ["Stack", "Next.js, TypeScript, Firebase, IndexedDB"],
          ["Features", "Learning plans, gap-fill review, progress history"],
        ],
        galleryTitle: "Learning flows.",
        galleryIntro:
          "The interface connects daily goals, lesson content, review feedback and progress history.",
        galleryLabel: "Fowl to Phoenix application screens",
      },
      zh: {
        context: "雙語詞彙學習平台",
        title: "Fowl to Phoenix 詞彙學習系統。",
        summary:
          "提供雙語課程、間隔重溫、進度追蹤及跨裝置學習流程的詞彙學習應用程式。",
        meta: [
          ["角色", "全端開發"],
          ["技術", "Next.js、TypeScript、Firebase、IndexedDB"],
          ["功能", "學習計劃、填充題重溫、學習紀錄"],
        ],
        galleryTitle: "學習流程。",
        galleryIntro: "介面連接每日目標、課堂內容、練習回饋及學習紀錄。",
        galleryLabel: "Fowl to Phoenix 應用程式畫面",
      },
    },
    shots: [
      {
        src: "/fowl-dashboard.png",
        width: 1600,
        height: 2000,
        copy: {
          en: {
            alt: "Fowl to Phoenix dashboard showing learning targets, progress and vocabulary stages",
            caption: "Learning targets and progress",
          },
          zh: {
            alt: "Fowl to Phoenix 儀表板，顯示學習目標、進度及詞彙階段",
            caption: "學習目標及進度",
          },
        },
      },
      {
        src: "/fowl-course-library.png",
        width: 1600,
        height: 2000,
        copy: {
          en: {
            alt: "Fowl to Phoenix course library with vocabulary programmes and levels",
            caption: "Course library and levels",
          },
          zh: {
            alt: "Fowl to Phoenix 課程庫，顯示詞彙課程及程度",
            caption: "課程庫及程度",
          },
        },
      },
      {
        src: "/fowl-lesson-content.png",
        width: 1600,
        height: 2000,
        copy: {
          en: {
            alt: "Fowl to Phoenix lesson with bilingual definitions, examples and speech controls",
            caption: "Bilingual lesson content",
          },
          zh: {
            alt: "Fowl to Phoenix 課堂內容，包含雙語解釋、例句及發音功能",
            caption: "雙語課堂內容",
          },
        },
      },
      {
        src: "/fowl-answer-feedback.png",
        width: 1600,
        height: 2000,
        copy: {
          en: {
            alt: "Fowl to Phoenix exercise feedback showing an accepted answer and learning stage",
            caption: "Answer feedback and progression",
          },
          zh: {
            alt: "Fowl to Phoenix 練習回饋，顯示已接納答案及學習階段",
            caption: "答案回饋及學習進程",
          },
        },
      },
      {
        src: "/fowl-learning-history.png",
        width: 1600,
        height: 2000,
        copy: {
          en: {
            alt: "Fowl to Phoenix learning history with vocabulary records and review stages",
            caption: "Vocabulary history and stages",
          },
          zh: {
            alt: "Fowl to Phoenix 學習紀錄，顯示詞彙及重溫階段",
            caption: "詞彙紀錄及重溫階段",
          },
        },
      },
      {
        src: "/fowl-mobile-dashboard.png",
        width: 1600,
        height: 2000,
        copy: {
          en: {
            alt: "Fowl to Phoenix mobile dashboard with navigation and learning progress",
            caption: "Responsive mobile dashboard",
          },
          zh: {
            alt: "Fowl to Phoenix 手機版儀表板，顯示導覽及學習進度",
            caption: "響應式手機介面",
          },
        },
      },
    ],
  },
} as const;

export type ProjectSlug = keyof typeof projects;

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return slug in projects;
}
