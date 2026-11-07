export type Photo = {
  /** Full / lightbox image URL (local path or external CDN) */
  src: string;
  /** Grid thumbnail; falls back to src if omitted */
  thumb?: string;
  alt: string;
  width: number;
  height: number;
};

export type Album = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  photos: Photo[];
};

/**
 * Albums from WordPress essay pages + year archives for leftover images.
 * Dated blog posts (冰川/雪山/chill pals etc.) were not in the DB backup as posts—
 * only unused image files could be recovered into archive-YYYY albums.
 * No album dates shown. Music / mp3 covers excluded.
 */
export const albums: Album[] = [
  {
    "slug": "aerial",
    "title": "一些航拍",
    "description": "旧站专题「一些航拍」",
    "cover": "/photos/2021/014-1571637828110_-pic_-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/014-1571637828110_-pic_-full.webp",
        "thumb": "/photos/2021/014-1571637828110_-pic_-thumb.webp",
        "alt": "一些航拍",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/053-2491638971628_-pic_hd-full.webp",
        "thumb": "/photos/2021/053-2491638971628_-pic_hd-thumb.webp",
        "alt": "一些航拍",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/054-2501638971629_-pic_hd-full.webp",
        "thumb": "/photos/2021/054-2501638971629_-pic_hd-thumb.webp",
        "alt": "一些航拍",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/055-2511638971630_-pic_hd-full.webp",
        "thumb": "/photos/2021/055-2511638971630_-pic_hd-thumb.webp",
        "alt": "一些航拍",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/052-2481638971627_-pic_hd-full.webp",
        "thumb": "/photos/2021/052-2481638971627_-pic_hd-thumb.webp",
        "alt": "一些航拍",
        "width": 2000,
        "height": 1333
      }
    ]
  },
  {
    "slug": "shanghai",
    "title": "上海",
    "description": "在上海的不到8小时里，遇到了三场突如其来的雨。",
    "cover": "/photos/2021/104-3331639828988_-pic_hd-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/104-3331639828988_-pic_hd-full.webp",
        "thumb": "/photos/2021/104-3331639828988_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/103-3341639828990_-pic_hd-full.webp",
        "thumb": "/photos/2021/103-3341639828990_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/102-3321639828987_-pic_hd-full.webp",
        "thumb": "/photos/2021/102-3321639828987_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/101-3311639828985_-pic_hd-full.webp",
        "thumb": "/photos/2021/101-3311639828985_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/100-3301639828982_-pic_hd-full.webp",
        "thumb": "/photos/2021/100-3301639828982_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/099-3351639828991_-pic_hd-full.webp",
        "thumb": "/photos/2021/099-3351639828991_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/016-DSC08088-full.webp",
        "thumb": "/photos/2021/016-DSC08088-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/095-3401639829000_-pic_hd-full.webp",
        "thumb": "/photos/2021/095-3401639829000_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/094-3411639829001_-pic_hd-full.webp",
        "thumb": "/photos/2021/094-3411639829001_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/076-3391639828999_-pic_hd-full.webp",
        "thumb": "/photos/2021/076-3391639828999_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/096-3381639828994_-pic_hd-full.webp",
        "thumb": "/photos/2021/096-3381639828994_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/097-3371639828993_-pic_hd-full.webp",
        "thumb": "/photos/2021/097-3371639828993_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/098-3361639828992_-pic_hd-full.webp",
        "thumb": "/photos/2021/098-3361639828992_-pic_hd-thumb.webp",
        "alt": "上海",
        "width": 2000,
        "height": 1333
      }
    ]
  },
  {
    "slug": "no-big-deal",
    "title": "哪有那么多事儿",
    "description": "严格意义上的第一次扫街，于杭州使用A7R3+24-105mmG拍摄。",
    "cover": "/photos/2021/085-3271639826784_-pic_hd-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/085-3271639826784_-pic_hd-full.webp",
        "thumb": "/photos/2021/085-3271639826784_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/084-3281639826786_-pic_hd-full.webp",
        "thumb": "/photos/2021/084-3281639826786_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/083-3291639826787_-pic_hd-full.webp",
        "thumb": "/photos/2021/083-3291639826787_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/086-3261639826668_-pic_hd-full.webp",
        "thumb": "/photos/2021/086-3261639826668_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/087-3251639826666_-pic_hd-full.webp",
        "thumb": "/photos/2021/087-3251639826666_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/088-3181639826658_-pic_hd-full.webp",
        "thumb": "/photos/2021/088-3181639826658_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/089-3191639826659_-pic_hd-full.webp",
        "thumb": "/photos/2021/089-3191639826659_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/090-3201639826660_-pic_hd-full.webp",
        "thumb": "/photos/2021/090-3201639826660_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/091-3211639826661_-pic_hd-full.webp",
        "thumb": "/photos/2021/091-3211639826661_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/092-3221639826662_-pic_hd-full.webp",
        "thumb": "/photos/2021/092-3221639826662_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/093-3231639826663_-pic_hd-full.webp",
        "thumb": "/photos/2021/093-3231639826663_-pic_hd-thumb.webp",
        "alt": "哪有那么多事儿",
        "width": 2000,
        "height": 1333
      }
    ]
  },
  {
    "slug": "night-wanderer",
    "title": "夜游神",
    "description": "第一次带着面具夜拍，效果确实8⃣️错，纯图一乐。",
    "cover": "/photos/2021/060-2541638971842_-pic_hd-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/060-2541638971842_-pic_hd-full.webp",
        "thumb": "/photos/2021/060-2541638971842_-pic_hd-thumb.webp",
        "alt": "夜游神",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/059-2551638971843_-pic_hd-full.webp",
        "thumb": "/photos/2021/059-2551638971843_-pic_hd-thumb.webp",
        "alt": "夜游神",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/058-2561638971845_-pic_hd-full.webp",
        "thumb": "/photos/2021/058-2561638971845_-pic_hd-thumb.webp",
        "alt": "夜游神",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/057-2571638971846_-pic_hd-full.webp",
        "thumb": "/photos/2021/057-2571638971846_-pic_hd-thumb.webp",
        "alt": "夜游神",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/056-2581638971848_-pic_hd-full.webp",
        "thumb": "/photos/2021/056-2581638971848_-pic_hd-thumb.webp",
        "alt": "夜游神",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/061-2531638971841_-pic_hd-full.webp",
        "thumb": "/photos/2021/061-2531638971841_-pic_hd-thumb.webp",
        "alt": "夜游神",
        "width": 2000,
        "height": 1333
      }
    ]
  },
  {
    "slug": "renai-road",
    "title": "拍摄于仁爱路111号",
    "description": "大部分照片拍摄于11.21日晚仁爱路附近，独自撑伞雨中遨游，也不失为为一种浪漫。",
    "cover": "/photos/2021/016-1741637835512_-pic_hd-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/016-1741637835512_-pic_hd-full.webp",
        "thumb": "/photos/2021/016-1741637835512_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/026-1751637835515_-pic_hd-full.webp",
        "thumb": "/photos/2021/026-1751637835515_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/025-1731637835510_-pic_hd-full.webp",
        "thumb": "/photos/2021/025-1731637835510_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/024-1721637835507_-pic_hd-full.webp",
        "thumb": "/photos/2021/024-1721637835507_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/023-1711637835506_-pic_hd-full.webp",
        "thumb": "/photos/2021/023-1711637835506_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/022-1701637835504_-pic_hd-full.webp",
        "thumb": "/photos/2021/022-1701637835504_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/020-1681637835500_-pic_hd-full.webp",
        "thumb": "/photos/2021/020-1681637835500_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/021-1691637835502_-pic_hd-full.webp",
        "thumb": "/photos/2021/021-1691637835502_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/017-1661637835499_-pic_hd-full.webp",
        "thumb": "/photos/2021/017-1661637835499_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/015-1651637835498_-pic_hd-full.webp",
        "thumb": "/photos/2021/015-1651637835498_-pic_hd-thumb.webp",
        "alt": "拍摄于仁爱路111号",
        "width": 2000,
        "height": 1333
      }
    ]
  },
  {
    "slug": "tears-in-the-sea",
    "title": "浪潮上岸",
    "description": "2021.5.3 · 由Mavic air 2拍摄于浙江温岭",
    "cover": "/photos/2021/036-2061638504473_-pic_hd-1-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/036-2061638504473_-pic_hd-1-full.webp",
        "thumb": "/photos/2021/036-2061638504473_-pic_hd-1-thumb.webp",
        "alt": "浪潮上岸（tears in the sea）",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/034-2051638504468_-pic_hd-full.webp",
        "thumb": "/photos/2021/034-2051638504468_-pic_hd-thumb.webp",
        "alt": "浪潮上岸（tears in the sea）",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/033-2041638504462_-pic_hd-full.webp",
        "thumb": "/photos/2021/033-2041638504462_-pic_hd-thumb.webp",
        "alt": "浪潮上岸（tears in the sea）",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/032-2031638504459_-pic_hd-full.webp",
        "thumb": "/photos/2021/032-2031638504459_-pic_hd-thumb.webp",
        "alt": "浪潮上岸（tears in the sea）",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/031-2021638504454_-pic_hd-full.webp",
        "thumb": "/photos/2021/031-2021638504454_-pic_hd-thumb.webp",
        "alt": "浪潮上岸（tears in the sea）",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/030-2011638504450_-pic_hd-full.webp",
        "thumb": "/photos/2021/030-2011638504450_-pic_hd-thumb.webp",
        "alt": "浪潮上岸（tears in the sea）",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/029-2001638504447_-pic_hd-full.webp",
        "thumb": "/photos/2021/029-2001638504447_-pic_hd-thumb.webp",
        "alt": "浪潮上岸（tears in the sea）",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/028-1991638504444_-pic_hd-full.webp",
        "thumb": "/photos/2021/028-1991638504444_-pic_hd-thumb.webp",
        "alt": "浪潮上岸（tears in the sea）",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/027-1981638504441_-pic_hd-full.webp",
        "thumb": "/photos/2021/027-1981638504441_-pic_hd-thumb.webp",
        "alt": "浪潮上岸（tears in the sea）",
        "width": 2000,
        "height": 1333
      }
    ]
  },
  {
    "slug": "westbound",
    "title": "西行漫记",
    "description": "旧站专题「西行漫记（？」",
    "cover": "/photos/2021/040-2391638968405_-pic_hd-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/040-2391638968405_-pic_hd-full.webp",
        "thumb": "/photos/2021/040-2391638968405_-pic_hd-thumb.webp",
        "alt": "西行漫记（？",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/007-DSC08033-full.webp",
        "thumb": "/photos/2021/007-DSC08033-thumb.webp",
        "alt": "西行漫记（？",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/005-DSC07950-full.webp",
        "thumb": "/photos/2021/005-DSC07950-thumb.webp",
        "alt": "西行漫记（？",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/004-DSC07949-full.webp",
        "thumb": "/photos/2021/004-DSC07949-thumb.webp",
        "alt": "西行漫记（？",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/013-DSC08003-1-full.webp",
        "thumb": "/photos/2021/013-DSC08003-1-thumb.webp",
        "alt": "西行漫记（？",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/041-2441638968408_-pic_hd-full.webp",
        "thumb": "/photos/2021/041-2441638968408_-pic_hd-thumb.webp",
        "alt": "西行漫记（？",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/044-2411638968406_-pic_hd-full.webp",
        "thumb": "/photos/2021/044-2411638968406_-pic_hd-thumb.webp",
        "alt": "西行漫记（？",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/043-2421638968407_-pic_hd-full.webp",
        "thumb": "/photos/2021/043-2421638968407_-pic_hd-thumb.webp",
        "alt": "西行漫记（？",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/042-2431638968408_-pic_-full.webp",
        "thumb": "/photos/2021/042-2431638968408_-pic_-thumb.webp",
        "alt": "西行漫记（？",
        "width": 2000,
        "height": 1333
      }
    ]
  },
  {
    "slug": "travelogue",
    "title": "遨游记本记",
    "description": "忙里偷闲也好，不可开交也好，用📷记录了这个漫长闷热又令人激动的，总是在路上的100天暑假，以下照片分别拍摄于四个不同的城市。",
    "cover": "/photos/2021/078-3141639821737_-pic_hd-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/078-3141639821737_-pic_hd-full.webp",
        "thumb": "/photos/2021/078-3141639821737_-pic_hd-thumb.webp",
        "alt": "遨游记本记",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/077-3151639821738_-pic_hd-1-full.webp",
        "thumb": "/photos/2021/077-3151639821738_-pic_hd-1-thumb.webp",
        "alt": "遨游记本记",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/075-3161639821739_-pic_hd-full.webp",
        "thumb": "/photos/2021/075-3161639821739_-pic_hd-thumb.webp",
        "alt": "遨游记本记",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/074-3171639821740_-pic_hd-full.webp",
        "thumb": "/photos/2021/074-3171639821740_-pic_hd-thumb.webp",
        "alt": "遨游记本记",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/082-3121639821735_-pic_hd-full.webp",
        "thumb": "/photos/2021/082-3121639821735_-pic_hd-thumb.webp",
        "alt": "遨游记本记",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/081-3111639821734_-pic_hd-full.webp",
        "thumb": "/photos/2021/081-3111639821734_-pic_hd-thumb.webp",
        "alt": "遨游记本记",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/080-3101639821733_-pic_hd-full.webp",
        "thumb": "/photos/2021/080-3101639821733_-pic_hd-thumb.webp",
        "alt": "遨游记本记",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/079-3091639821732_-pic_hd-full.webp",
        "thumb": "/photos/2021/079-3091639821732_-pic_hd-thumb.webp",
        "alt": "遨游记本记",
        "width": 2000,
        "height": 1333
      }
    ]
  },
  {
    "slug": "dusk-red",
    "title": "黄昏的红，映入心肝",
    "description": "This should be a photo collection that will be updated over time. A collection of all the sunsets and everything related to twilight.🌆",
    "cover": "/photos/2021/072-3081639821387_-pic_hd-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/072-3081639821387_-pic_hd-full.webp",
        "thumb": "/photos/2021/072-3081639821387_-pic_hd-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/071-3061639821386_-pic_hd-full.webp",
        "thumb": "/photos/2021/071-3061639821386_-pic_hd-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/070-3051639821386_-pic_hd-full.webp",
        "thumb": "/photos/2021/070-3051639821386_-pic_hd-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/069-3041639821385_-pic_hd-full.webp",
        "thumb": "/photos/2021/069-3041639821385_-pic_hd-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/068-3031639821384_-pic_hd-full.webp",
        "thumb": "/photos/2021/068-3031639821384_-pic_hd-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/067-3021639821383_-pic_-full.webp",
        "thumb": "/photos/2021/067-3021639821383_-pic_-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/066-3011639821383_-pic_hd-full.webp",
        "thumb": "/photos/2021/066-3011639821383_-pic_hd-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/065-3001639821383_-pic_hd-full.webp",
        "thumb": "/photos/2021/065-3001639821383_-pic_hd-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/073-3071639821387_-pic_-full.webp",
        "thumb": "/photos/2021/073-3071639821387_-pic_-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/002-DSC07270-full.webp",
        "thumb": "/photos/2021/002-DSC07270-thumb.webp",
        "alt": "黄昏的红，映入心肝",
        "width": 2000,
        "height": 1333
      }
    ]
  },
  {
    "slug": "archive-2021",
    "title": "2021",
    "description": "旧站按年归档中未归入专题页的照片（部分日期博文正文未包含在本次备份里，仅保留图片）。",
    "cover": "/photos/2021/075-3161639821739_-pic_hd-thumb.webp",
    "photos": [
      {
        "src": "/photos/2021/006-1551637827085_-pic_hd-full.webp",
        "thumb": "/photos/2021/006-1551637827085_-pic_hd-thumb.webp",
        "alt": "2021 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/011-1541637770562_-pic_hd-full.webp",
        "thumb": "/photos/2021/011-1541637770562_-pic_hd-thumb.webp",
        "alt": "2021 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/012-1501637770459_-pic_hd-full.webp",
        "thumb": "/photos/2021/012-1501637770459_-pic_hd-thumb.webp",
        "alt": "2021 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/035-2061638504473_-pic_hd-full.webp",
        "thumb": "/photos/2021/035-2061638504473_-pic_hd-thumb.webp",
        "alt": "2021 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/037-2261638717714_-pic_hd-full.webp",
        "thumb": "/photos/2021/037-2261638717714_-pic_hd-thumb.webp",
        "alt": "2021 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/038-2231638717714_-pic_hd-full.webp",
        "thumb": "/photos/2021/038-2231638717714_-pic_hd-thumb.webp",
        "alt": "2021 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/048-891637227358_-pic_hd-full.webp",
        "thumb": "/photos/2021/048-891637227358_-pic_hd-thumb.webp",
        "alt": "2021 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2021/051-871637223787_-pic_hd-full.webp",
        "thumb": "/photos/2021/051-871637223787_-pic_hd-thumb.webp",
        "alt": "2021 archive",
        "width": 2000,
        "height": 1485
      },
      {
        "src": "/photos/2021/111-3721640522810_-pic_hd-full.webp",
        "thumb": "/photos/2021/111-3721640522810_-pic_hd-thumb.webp",
        "alt": "2021 archive",
        "width": 2000,
        "height": 2667
      }
    ]
  },
  {
    "slug": "archive-2022",
    "title": "2022",
    "description": "旧站按年归档中未归入专题页的照片（部分日期博文正文未包含在本次备份里，仅保留图片）。",
    "cover": "/photos/2022/039-PGH55673-thumb.webp",
    "photos": [
      {
        "src": "/photos/2022/001-_20220101193404-full.webp",
        "thumb": "/photos/2022/001-_20220101193404-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/002-_20220101195232-full.webp",
        "thumb": "/photos/2022/002-_20220101195232-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/003-_20220101195238-full.webp",
        "thumb": "/photos/2022/003-_20220101195238-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/004-_20220101195241-full.webp",
        "thumb": "/photos/2022/004-_20220101195241-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/005-_20220101195247-full.webp",
        "thumb": "/photos/2022/005-_20220101195247-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/007-_20220101195255-full.webp",
        "thumb": "/photos/2022/007-_20220101195255-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/010-DSC09036-full.webp",
        "thumb": "/photos/2022/010-DSC09036-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/018-DSC08821-full.webp",
        "thumb": "/photos/2022/018-DSC08821-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/019-DSC08799-full.webp",
        "thumb": "/photos/2022/019-DSC08799-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/021-_20220118221140-full.webp",
        "thumb": "/photos/2022/021-_20220118221140-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/022-_20220118221114-full.webp",
        "thumb": "/photos/2022/022-_20220118221114-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/023-_20220118221147-full.webp",
        "thumb": "/photos/2022/023-_20220118221147-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/024-_20220118221154-full.webp",
        "thumb": "/photos/2022/024-_20220118221154-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/025-_20220118221132-full.webp",
        "thumb": "/photos/2022/025-_20220118221132-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/028-PGH55455-full.webp",
        "thumb": "/photos/2022/028-PGH55455-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/032-PGH55476-full.webp",
        "thumb": "/photos/2022/032-PGH55476-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/034-PGH55479-full.webp",
        "thumb": "/photos/2022/034-PGH55479-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/035-PGH55482-full.webp",
        "thumb": "/photos/2022/035-PGH55482-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/037-PGH55564-full.webp",
        "thumb": "/photos/2022/037-PGH55564-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/038-PGH55636-full.webp",
        "thumb": "/photos/2022/038-PGH55636-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/039-PGH55673-full.webp",
        "thumb": "/photos/2022/039-PGH55673-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/040-PGH55573-1-full.webp",
        "thumb": "/photos/2022/040-PGH55573-1-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/041-DSC3559-full.webp",
        "thumb": "/photos/2022/041-DSC3559-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/042-DSC3632-full.webp",
        "thumb": "/photos/2022/042-DSC3632-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/043-image-full.webp",
        "thumb": "/photos/2022/043-image-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/045-PGH56348-full.webp",
        "thumb": "/photos/2022/045-PGH56348-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1500
      },
      {
        "src": "/photos/2022/046-PGH56354-full.webp",
        "thumb": "/photos/2022/046-PGH56354-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/047-PGH56379-full.webp",
        "thumb": "/photos/2022/047-PGH56379-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/048-PGH56376-full.webp",
        "thumb": "/photos/2022/048-PGH56376-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 3551
      },
      {
        "src": "/photos/2022/051-uTools_1662395180390-full.webp",
        "thumb": "/photos/2022/051-uTools_1662395180390-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1125
      },
      {
        "src": "/photos/2022/052-PGH56270-full.webp",
        "thumb": "/photos/2022/052-PGH56270-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/058-PGH55775-full.webp",
        "thumb": "/photos/2022/058-PGH55775-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/060-PGH55382-full.webp",
        "thumb": "/photos/2022/060-PGH55382-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/061-P3120106-1-full.webp",
        "thumb": "/photos/2022/061-P3120106-1-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/062-P3120111-1-full.webp",
        "thumb": "/photos/2022/062-P3120111-1-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/063-P3120113-full.webp",
        "thumb": "/photos/2022/063-P3120113-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/064-P3120136-full.webp",
        "thumb": "/photos/2022/064-P3120136-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/065-P3120171-full.webp",
        "thumb": "/photos/2022/065-P3120171-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/066-DJI_0921-HDR-full.webp",
        "thumb": "/photos/2022/066-DJI_0921-HDR-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/067-PGH56669-full.webp",
        "thumb": "/photos/2022/067-PGH56669-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1127
      },
      {
        "src": "/photos/2022/068-PGH56749-full.webp",
        "thumb": "/photos/2022/068-PGH56749-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 3551
      },
      {
        "src": "/photos/2022/070-PGH56734-full.webp",
        "thumb": "/photos/2022/070-PGH56734-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/071-PGH56747-full.webp",
        "thumb": "/photos/2022/071-PGH56747-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 3551
      },
      {
        "src": "/photos/2022/072-_20221008190643-full.webp",
        "thumb": "/photos/2022/072-_20221008190643-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/073-_20221008190647-full.webp",
        "thumb": "/photos/2022/073-_20221008190647-thumb.webp",
        "alt": "2022 archive",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/001-IMG_20221009_202520-full.webp",
        "thumb": "/photos/2022/001-IMG_20221009_202520-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1125
      },
      {
        "src": "/photos/2022/002-IMG_20221009_202538-full.webp",
        "thumb": "/photos/2022/002-IMG_20221009_202538-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1125
      },
      {
        "src": "/photos/2022/003-IMG_20221009_202557-full.webp",
        "thumb": "/photos/2022/003-IMG_20221009_202557-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1125
      },
      {
        "src": "/photos/2022/004-mmexport1667374064304-full.webp",
        "thumb": "/photos/2022/004-mmexport1667374064304-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 3551
      },
      {
        "src": "/photos/2022/005-mmexport1667374066906-full.webp",
        "thumb": "/photos/2022/005-mmexport1667374066906-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 2665
      },
      {
        "src": "/photos/2022/006-mmexport1669485725629-full.webp",
        "thumb": "/photos/2022/006-mmexport1669485725629-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2022/007-mmexport1669485732597-full.webp",
        "thumb": "/photos/2022/007-mmexport1669485732597-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2022/008-mmexport1669537855280-full.webp",
        "thumb": "/photos/2022/008-mmexport1669537855280-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 3006
      },
      {
        "src": "/photos/2022/009-IMG_20221215_013054-full.webp",
        "thumb": "/photos/2022/009-IMG_20221215_013054-thumb.webp",
        "alt": "南通市",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2022/010-mmexport1671462448523-full.webp",
        "thumb": "/photos/2022/010-mmexport1671462448523-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 2668
      },
      {
        "src": "/photos/2022/011-mmexport1671462479205-full.webp",
        "thumb": "/photos/2022/011-mmexport1671462479205-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 3551
      },
      {
        "src": "/photos/2022/012-mmexport1671810796959-full.webp",
        "thumb": "/photos/2022/012-mmexport1671810796959-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 2667
      },
      {
        "src": "/photos/2022/013-mmexport1671810788412-full.webp",
        "thumb": "/photos/2022/013-mmexport1671810788412-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1500
      },
      {
        "src": "/photos/2022/014-mmexport1671810794651-full.webp",
        "thumb": "/photos/2022/014-mmexport1671810794651-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1500
      },
      {
        "src": "/photos/2022/015-mmexport1671810803520-full.webp",
        "thumb": "/photos/2022/015-mmexport1671810803520-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 3056
      },
      {
        "src": "/photos/2022/016-mmexport1672515245729-full.webp",
        "thumb": "/photos/2022/016-mmexport1672515245729-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1405
      },
      {
        "src": "/photos/2022/040-SAVE_20240102_134155-full.webp",
        "thumb": "/photos/2022/040-SAVE_20240102_134155-thumb.webp",
        "alt": "苏州市",
        "width": 1920,
        "height": 1440
      },
      {
        "src": "/photos/2022/090-weixin-2025-04-09_225946_322-full.webp",
        "thumb": "/photos/2022/090-weixin-2025-04-09_225946_322-thumb.webp",
        "alt": "苏州市",
        "width": 1280,
        "height": 2272
      },
      {
        "src": "/photos/2022/092-weixin-20250409225933_47-full.webp",
        "thumb": "/photos/2022/092-weixin-20250409225933_47-thumb.webp",
        "alt": "苏州市",
        "width": 1280,
        "height": 1707
      }
    ]
  },
  {
    "slug": "archive-2023",
    "title": "2023",
    "description": "按年归档。",
    "cover": "/photos/2023/029-mmexport1681569086911-thumb.webp",
    "photos": [
      {
        "src": "/photos/2023/017-mmexport1674313220198-full.webp",
        "thumb": "/photos/2023/017-mmexport1674313220198-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2023/018-mmexport1676650277448-full.webp",
        "thumb": "/photos/2023/018-mmexport1676650277448-thumb.webp",
        "alt": "西安市",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2023/019-IMG_20230218_001228-full.webp",
        "thumb": "/photos/2023/019-IMG_20230218_001228-thumb.webp",
        "alt": "西安市",
        "width": 2000,
        "height": 1409
      },
      {
        "src": "/photos/2023/020-mmexport1676650281335-full.webp",
        "thumb": "/photos/2023/020-mmexport1676650281335-thumb.webp",
        "alt": "西安市",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2023/021-mmexport1676650284098-full.webp",
        "thumb": "/photos/2023/021-mmexport1676650284098-thumb.webp",
        "alt": "西安市",
        "width": 2000,
        "height": 3000
      },
      {
        "src": "/photos/2023/022-mmexport1676650292424-full.webp",
        "thumb": "/photos/2023/022-mmexport1676650292424-thumb.webp",
        "alt": "西安市",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2023/023-mmexport1679497997412-full.webp",
        "thumb": "/photos/2023/023-mmexport1679497997412-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 2155
      },
      {
        "src": "/photos/2023/024-mmexport1679497999648-full.webp",
        "thumb": "/photos/2023/024-mmexport1679497999648-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1376
      },
      {
        "src": "/photos/2023/025-mmexport1679498016164-full.webp",
        "thumb": "/photos/2023/025-mmexport1679498016164-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1146
      },
      {
        "src": "/photos/2023/026-mmexport1679498031870-full.webp",
        "thumb": "/photos/2023/026-mmexport1679498031870-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2023/027-mmexport1680346942396-full.webp",
        "thumb": "/photos/2023/027-mmexport1680346942396-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 706
      },
      {
        "src": "/photos/2023/028-mmexport1681569074004-full.webp",
        "thumb": "/photos/2023/028-mmexport1681569074004-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2023/029-mmexport1681569086911-full.webp",
        "thumb": "/photos/2023/029-mmexport1681569086911-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1671
      },
      {
        "src": "/photos/2023/030-mmexport1681569103969-full.webp",
        "thumb": "/photos/2023/030-mmexport1681569103969-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 1483
      },
      {
        "src": "/photos/2023/031-mmexport1681569132413-full.webp",
        "thumb": "/photos/2023/031-mmexport1681569132413-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 3175
      },
      {
        "src": "/photos/2023/032-IMG_20230419_200903-full.webp",
        "thumb": "/photos/2023/032-IMG_20230419_200903-thumb.webp",
        "alt": "杭州市",
        "width": 2000,
        "height": 2276
      },
      {
        "src": "/photos/2023/033-IMG_20230419_201137-full.webp",
        "thumb": "/photos/2023/033-IMG_20230419_201137-thumb.webp",
        "alt": "杭州市",
        "width": 2000,
        "height": 2000
      },
      {
        "src": "/photos/2023/034-mmexport1681906047452-full.webp",
        "thumb": "/photos/2023/034-mmexport1681906047452-thumb.webp",
        "alt": "杭州市",
        "width": 2000,
        "height": 1502
      },
      {
        "src": "/photos/2023/035-mmexport1681919066249-full.webp",
        "thumb": "/photos/2023/035-mmexport1681919066249-thumb.webp",
        "alt": "上海市",
        "width": 2000,
        "height": 1333
      },
      {
        "src": "/photos/2023/036-mmexport1681919069938-full.webp",
        "thumb": "/photos/2023/036-mmexport1681919069938-thumb.webp",
        "alt": "上海市",
        "width": 2000,
        "height": 2940
      },
      {
        "src": "/photos/2023/037-mmexport1681919086322-full.webp",
        "thumb": "/photos/2023/037-mmexport1681919086322-thumb.webp",
        "alt": "上海市",
        "width": 2000,
        "height": 957
      },
      {
        "src": "/photos/2023/038-mmexport1682827827285-full.webp",
        "thumb": "/photos/2023/038-mmexport1682827827285-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 2664
      },
      {
        "src": "/photos/2023/039-mmexport1682827829971-full.webp",
        "thumb": "/photos/2023/039-mmexport1682827829971-thumb.webp",
        "alt": "苏州市",
        "width": 2000,
        "height": 2055
      },
      {
        "src": "/photos/2023/088-weixin-2025-04-09_225654_403-full.webp",
        "thumb": "/photos/2023/088-weixin-2025-04-09_225654_403-thumb.webp",
        "alt": "青岛市",
        "width": 2000,
        "height": 1125
      },
      {
        "src": "/photos/2023/089-weixin-2025-04-09_225938_655-full.webp",
        "thumb": "/photos/2023/089-weixin-2025-04-09_225938_655-thumb.webp",
        "alt": "温州市",
        "width": 1923,
        "height": 1280
      }
    ]
  },
  {
    "slug": "archive-2024",
    "title": "2024",
    "description": "按年归档。",
    "cover": "/photos/2024/047-weixin-2025-04-09_201437_038-thumb.webp",
    "photos": [
      {
        "src": "/photos/2024/041-mmexport1734753267359-full.webp",
        "thumb": "/photos/2024/041-mmexport1734753267359-thumb.webp",
        "alt": "Estes Park",
        "width": 2000,
        "height": 2895
      },
      {
        "src": "/photos/2024/042-mmexport1734753325057-full.webp",
        "thumb": "/photos/2024/042-mmexport1734753325057-thumb.webp",
        "alt": "Estes Park",
        "width": 2000,
        "height": 1257
      },
      {
        "src": "/photos/2024/043-mmexport1734753351680-full.webp",
        "thumb": "/photos/2024/043-mmexport1734753351680-thumb.webp",
        "alt": "Estes Park",
        "width": 2000,
        "height": 1075
      },
      {
        "src": "/photos/2024/044-mmexport1734753367055-full.webp",
        "thumb": "/photos/2024/044-mmexport1734753367055-thumb.webp",
        "alt": "Estes Park",
        "width": 2000,
        "height": 1237
      },
      {
        "src": "/photos/2024/045-mmexport1734754457722-full.webp",
        "thumb": "/photos/2024/045-mmexport1734754457722-thumb.webp",
        "alt": "Estes Park",
        "width": 2000,
        "height": 1446
      },
      {
        "src": "/photos/2024/046-mmexport1734754503162-full.webp",
        "thumb": "/photos/2024/046-mmexport1734754503162-thumb.webp",
        "alt": "Estes Park",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2024/047-weixin-2025-04-09_201437_038-full.webp",
        "thumb": "/photos/2024/047-weixin-2025-04-09_201437_038-thumb.webp",
        "alt": "Jackson",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2024/048-weixin-2025-04-09_201502_000-full.webp",
        "thumb": "/photos/2024/048-weixin-2025-04-09_201502_000-thumb.webp",
        "alt": "Jackson",
        "width": 2000,
        "height": 1317
      },
      {
        "src": "/photos/2024/049-weixin-2025-04-09_201511_712-full.webp",
        "thumb": "/photos/2024/049-weixin-2025-04-09_201511_712-thumb.webp",
        "alt": "Yellowstone National Park",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2024/050-weixin-2025-04-09_201522_078-full.webp",
        "thumb": "/photos/2024/050-weixin-2025-04-09_201522_078-thumb.webp",
        "alt": "Yellowstone National Park",
        "width": 2000,
        "height": 1294
      },
      {
        "src": "/photos/2024/051-weixin-2025-04-09_201538_504-full.webp",
        "thumb": "/photos/2024/051-weixin-2025-04-09_201538_504-thumb.webp",
        "alt": "Jackson",
        "width": 2000,
        "height": 1125
      },
      {
        "src": "/photos/2024/052-mmexport1735102661567-full.webp",
        "thumb": "/photos/2024/052-mmexport1735102661567-thumb.webp",
        "alt": "Yellowstone National Park",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2024/053-mmexport1735102672516-full.webp",
        "thumb": "/photos/2024/053-mmexport1735102672516-thumb.webp",
        "alt": "Jackson",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2024/054-mmexport1735102676128-full.webp",
        "thumb": "/photos/2024/054-mmexport1735102676128-thumb.webp",
        "alt": "Yellowstone National Park",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2024/055-mmexport1735102716569-full.webp",
        "thumb": "/photos/2024/055-mmexport1735102716569-thumb.webp",
        "alt": "Jackson",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2024/056-mmexport1735102964955-full.webp",
        "thumb": "/photos/2024/056-mmexport1735102964955-thumb.webp",
        "alt": "Jackson",
        "width": 2000,
        "height": 3006
      },
      {
        "src": "/photos/2024/057-mmexport1735102983343-full.webp",
        "thumb": "/photos/2024/057-mmexport1735102983343-thumb.webp",
        "alt": "Yellowstone National Park",
        "width": 2000,
        "height": 3000
      },
      {
        "src": "/photos/2024/058-mmexport1735103001735-full.webp",
        "thumb": "/photos/2024/058-mmexport1735103001735-thumb.webp",
        "alt": "Yellowstone National Park",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2024/059-mmexport1735103008656-full.webp",
        "thumb": "/photos/2024/059-mmexport1735103008656-thumb.webp",
        "alt": "Yellowstone National Park",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2024/091-weixin-2025-04-09_232520_670-full.webp",
        "thumb": "/photos/2024/091-weixin-2025-04-09_232520_670-thumb.webp",
        "alt": "苏州市",
        "width": 1280,
        "height": 1632
      },
      {
        "src": "/photos/2024/085-weixin-2025-04-09_154849_302-full.webp",
        "thumb": "/photos/2024/085-weixin-2025-04-09_154849_302-thumb.webp",
        "alt": "Jackson",
        "width": 2000,
        "height": 1339
      },
      {
        "src": "/photos/2024/086-weixin-2025-04-09_154908_766-full.webp",
        "thumb": "/photos/2024/086-weixin-2025-04-09_154908_766-thumb.webp",
        "alt": "Jackson",
        "width": 1280,
        "height": 1923
      },
      {
        "src": "/photos/2024/087-weixin-2025-04-09_154922_373-full.webp",
        "thumb": "/photos/2024/087-weixin-2025-04-09_154922_373-thumb.webp",
        "alt": "Jackson",
        "width": 1923,
        "height": 1280
      }
    ]
  },
  {
    "slug": "archive-2025",
    "title": "2025",
    "description": "按年归档。",
    "cover": "/photos/2025/075-mmexport1742869403689-thumb.webp",
    "photos": [
      {
        "src": "/photos/2025/060-mmexport1735934869960-full.webp",
        "thumb": "/photos/2025/060-mmexport1735934869960-thumb.webp",
        "alt": "New York City",
        "width": 2000,
        "height": 1841
      },
      {
        "src": "/photos/2025/061-mmexport1735934879721-full.webp",
        "thumb": "/photos/2025/061-mmexport1735934879721-thumb.webp",
        "alt": "New York City",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/062-mmexport1735934888040-full.webp",
        "thumb": "/photos/2025/062-mmexport1735934888040-thumb.webp",
        "alt": "New York City",
        "width": 2000,
        "height": 3006
      },
      {
        "src": "/photos/2025/063-DSC_2711-full.webp",
        "thumb": "/photos/2025/063-DSC_2711-thumb.webp",
        "alt": "Death Valley",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/064-DSC_2786-full.webp",
        "thumb": "/photos/2025/064-DSC_2786-thumb.webp",
        "alt": "Death Valley",
        "width": 2000,
        "height": 1313
      },
      {
        "src": "/photos/2025/065-DSC_2800-full.webp",
        "thumb": "/photos/2025/065-DSC_2800-thumb.webp",
        "alt": "Death Valley",
        "width": 2000,
        "height": 1154
      },
      {
        "src": "/photos/2025/066-DSC_2825-full.webp",
        "thumb": "/photos/2025/066-DSC_2825-thumb.webp",
        "alt": "Death Valley",
        "width": 2000,
        "height": 1428
      },
      {
        "src": "/photos/2025/067-DSC_3032-Copy-full.webp",
        "thumb": "/photos/2025/067-DSC_3032-Copy-thumb.webp",
        "alt": "Los Angeles",
        "width": 2000,
        "height": 1256
      },
      {
        "src": "/photos/2025/068-DSC_3223-full.webp",
        "thumb": "/photos/2025/068-DSC_3223-thumb.webp",
        "alt": "Los Angeles",
        "width": 2000,
        "height": 1373
      },
      {
        "src": "/photos/2025/069-DSC_3230-full.webp",
        "thumb": "/photos/2025/069-DSC_3230-thumb.webp",
        "alt": "Los Angeles",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/070-DSC_3242-full.webp",
        "thumb": "/photos/2025/070-DSC_3242-thumb.webp",
        "alt": "Los Angeles",
        "width": 2000,
        "height": 1490
      },
      {
        "src": "/photos/2025/071-DSC_3292-full.webp",
        "thumb": "/photos/2025/071-DSC_3292-thumb.webp",
        "alt": "Los Angeles",
        "width": 2000,
        "height": 1334
      },
      {
        "src": "/photos/2025/072-DSC_3295-full.webp",
        "thumb": "/photos/2025/072-DSC_3295-thumb.webp",
        "alt": "Los Angeles",
        "width": 2000,
        "height": 1204
      },
      {
        "src": "/photos/2025/073-DSC_3339-full.webp",
        "thumb": "/photos/2025/073-DSC_3339-thumb.webp",
        "alt": "Los Angeles",
        "width": 2000,
        "height": 981
      },
      {
        "src": "/photos/2025/074-IMG_20261101_183936-full.webp",
        "thumb": "/photos/2025/074-IMG_20261101_183936-thumb.webp",
        "alt": "Los Angeles",
        "width": 1980,
        "height": 1360
      },
      {
        "src": "/photos/2025/075-mmexport1742869403689-full.webp",
        "thumb": "/photos/2025/075-mmexport1742869403689-thumb.webp",
        "alt": "Death Valley",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/076-mmexport1742870777156-full.webp",
        "thumb": "/photos/2025/076-mmexport1742870777156-thumb.webp",
        "alt": "San Francisco",
        "width": 2000,
        "height": 1245
      },
      {
        "src": "/photos/2025/077-mmexport1742870787864-full.webp",
        "thumb": "/photos/2025/077-mmexport1742870787864-thumb.webp",
        "alt": "San Francisco",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/078-mmexport1742870797714-full.webp",
        "thumb": "/photos/2025/078-mmexport1742870797714-thumb.webp",
        "alt": "San Francisco",
        "width": 2000,
        "height": 1340
      },
      {
        "src": "/photos/2025/079-mmexport1742870809936-full.webp",
        "thumb": "/photos/2025/079-mmexport1742870809936-thumb.webp",
        "alt": "Big Sur",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/080-mmexport1742870818995-full.webp",
        "thumb": "/photos/2025/080-mmexport1742870818995-thumb.webp",
        "alt": "Big Sur",
        "width": 2000,
        "height": 1394
      },
      {
        "src": "/photos/2025/081-mmexport1742870828449-full.webp",
        "thumb": "/photos/2025/081-mmexport1742870828449-thumb.webp",
        "alt": "Big Sur",
        "width": 2000,
        "height": 1280
      },
      {
        "src": "/photos/2025/082-weixin-2025-04-09_154806_720-full.webp",
        "thumb": "/photos/2025/082-weixin-2025-04-09_154806_720-thumb.webp",
        "alt": "New York City",
        "width": 2000,
        "height": 3215
      },
      {
        "src": "/photos/2025/083-weixin-2025-04-09_154819_247-full.webp",
        "thumb": "/photos/2025/083-weixin-2025-04-09_154819_247-thumb.webp",
        "alt": "New York City",
        "width": 2000,
        "height": 1640
      },
      {
        "src": "/photos/2025/084-weixin-2025-04-09_154837_439-full.webp",
        "thumb": "/photos/2025/084-weixin-2025-04-09_154837_439-thumb.webp",
        "alt": "New York City",
        "width": 2000,
        "height": 3006
      },
      {
        "src": "/photos/2025/093-mmexport1747694610990-full.webp",
        "thumb": "/photos/2025/093-mmexport1747694610990-thumb.webp",
        "alt": "Champaign",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/094-mmexport1747694626703-full.webp",
        "thumb": "/photos/2025/094-mmexport1747694626703-thumb.webp",
        "alt": "Chicago",
        "width": 2000,
        "height": 1591
      },
      {
        "src": "/photos/2025/095-mmexport1756650679266-full.webp",
        "thumb": "/photos/2025/095-mmexport1756650679266-thumb.webp",
        "alt": "桂林市",
        "width": 2000,
        "height": 983
      },
      {
        "src": "/photos/2025/096-mmexport1756650686682-full.webp",
        "thumb": "/photos/2025/096-mmexport1756650686682-thumb.webp",
        "alt": "Hong Kong",
        "width": 2000,
        "height": 939
      },
      {
        "src": "/photos/2025/097-mmexport1756650691542-full.webp",
        "thumb": "/photos/2025/097-mmexport1756650691542-thumb.webp",
        "alt": "深圳市",
        "width": 2000,
        "height": 1355
      },
      {
        "src": "/photos/2025/098-DSC_5080-full.webp",
        "thumb": "/photos/2025/098-DSC_5080-thumb.webp",
        "alt": "深圳市",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/099-DSC_5116-full.webp",
        "thumb": "/photos/2025/099-DSC_5116-thumb.webp",
        "alt": "深圳市",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/100-IMG_20250906_123552-full.webp",
        "thumb": "/photos/2025/100-IMG_20250906_123552-thumb.webp",
        "alt": "深圳市",
        "width": 2000,
        "height": 1500
      },
      {
        "src": "/photos/2025/101-IMG_20250906_123554-full.webp",
        "thumb": "/photos/2025/101-IMG_20250906_123554-thumb.webp",
        "alt": "深圳市",
        "width": 2000,
        "height": 1500
      },
      {
        "src": "/photos/2025/102-DSC_5154-full.webp",
        "thumb": "/photos/2025/102-DSC_5154-thumb.webp",
        "alt": "厦门市",
        "width": 2000,
        "height": 1175
      },
      {
        "src": "/photos/2025/103-DSC_5170-full.webp",
        "thumb": "/photos/2025/103-DSC_5170-thumb.webp",
        "alt": "厦门市",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/104-DSC_5196-full.webp",
        "thumb": "/photos/2025/104-DSC_5196-thumb.webp",
        "alt": "厦门市",
        "width": 2000,
        "height": 1331
      },
      {
        "src": "/photos/2025/105-DSC_5200-full.webp",
        "thumb": "/photos/2025/105-DSC_5200-thumb.webp",
        "alt": "厦门市",
        "width": 2000,
        "height": 1480
      },
      {
        "src": "/photos/2025/106-DSC_5208-full.webp",
        "thumb": "/photos/2025/106-DSC_5208-thumb.webp",
        "alt": "厦门市",
        "width": 2000,
        "height": 1274
      },
      {
        "src": "/photos/2025/107-DSC_5225-full.webp",
        "thumb": "/photos/2025/107-DSC_5225-thumb.webp",
        "alt": "厦门市",
        "width": 2000,
        "height": 3161
      },
      {
        "src": "/photos/2025/108-IMG_20251115_165053-full.webp",
        "thumb": "/photos/2025/108-IMG_20251115_165053-thumb.webp",
        "alt": "厦门市",
        "width": 2000,
        "height": 1506
      },
      {
        "src": "/photos/2025/109-DSC_5276-full.webp",
        "thumb": "/photos/2025/109-DSC_5276-thumb.webp",
        "alt": "厦门市",
        "width": 2000,
        "height": 1334
      },
      {
        "src": "/photos/2025/112-DSC_2618-full.webp",
        "thumb": "/photos/2025/112-DSC_2618-thumb.webp",
        "alt": "Las Vegas",
        "width": 2000,
        "height": 1331
      }
    ]
  },
  {
    "slug": "archive-2026",
    "title": "2026",
    "description": "按年归档。",
    "cover": "/photos/2026/110-DSC_5317-thumb.webp",
    "photos": [
      {
        "src": "/photos/2026/110-DSC_5317-full.webp",
        "thumb": "/photos/2026/110-DSC_5317-thumb.webp",
        "alt": "珠海市",
        "width": 2000,
        "height": 2361
      },
      {
        "src": "/photos/2026/111-DSC_5534-full.webp",
        "thumb": "/photos/2026/111-DSC_5534-thumb.webp",
        "alt": "江门市",
        "width": 2000,
        "height": 1331
      }
    ]
  }
];

export function getAlbum(slug: string): Album | undefined {
  return albums.find((album) => album.slug === slug);
}
