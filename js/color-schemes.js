/**
 * 小窑湾海钓产业园 设计系统
 * 色彩方案数据 — Color Schemes (4-Color System)
 * 每套方案包含：主色 primary(60%)、辅助色 secondary1(25%)、辅助色 secondary2(15%)、点缀色 secondary3(5%)
 * 各色均含 50/100/200/300/400/500/600/700/800/900 十级色阶
 * 中性色保持统一（墨岩灰），语义色保持统一
 */

var DSColorSchemes = [
  {
    id: 'ocean-deep',
    name: '深海蓝',
    nameEn: 'Ocean Deep',
    primaryName: '深海蓝',
    secondary1Name: '暖沙金',
    secondary2Name: '海沫青',
    secondary3Name: '珊瑚橙',
    scene: 'wave',
    desc: '默认方案。以黄海海域的深邃蓝色为根基，传递专业、可靠、海洋原生感。',
    primary: {
      50: '#E8F4F8', 100: '#C5E3ED', 200: '#9DCDE0', 300: '#6FB4CE', 400: '#4A9FBE',
      500: '#1A7FA0', 600: '#156B89', 700: '#105872', 800: '#0B455A', 900: '#063243'
    },
    secondary1: {
      50: '#FDF8F0', 100: '#F9EDD8', 200: '#F3DEBB', 300: '#ECCC98', 400: '#E5BD7A',
      500: '#D4A654', 600: '#C49342', 700: '#A87A35', 800: '#8C6229', 900: '#704B1E'
    },
    secondary2: {
      50: '#EDF7F5', 100: '#CCEBE5', 200: '#A4DCD2', 300: '#74C8BA', 400: '#50B8A6',
      500: '#2BA692', 600: '#249181', 700: '#1C7A6C', 800: '#156358', 900: '#0E4C43'
    },
    secondary3: {
      50: '#FFF0EC', 100: '#FFD9CF', 200: '#FFBFAD', 300: '#FFA08A', 400: '#FF876C',
      500: '#E8644A', 600: '#D4503A', 700: '#B33D2D', 800: '#922B20', 900: '#711A13'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F7F8FA 0%, #C5E3ED 40%, #E5BD7A 100%)',
      deep: 'linear-gradient(180deg, #1A7FA0 0%, #0B455A 60%, #063243 100%)',
      sunset: 'linear-gradient(135deg, #FF876C 0%, #E5BD7A 50%, #1A7FA0 100%)',
      surface: 'linear-gradient(135deg, #E8F4F8 0%, #9DCDE0 50%, #4A9FBE 100%)',
      shimmer: 'linear-gradient(135deg, #D4A654 0%, #E5BD7A 50%, #C49342 100%)'
    }
  },
  {
    id: 'ocean-tide',
    name: '潮汐青',
    nameEn: 'Ocean Tide',
    primaryName: '潮汐青',
    secondary1Name: '森林绿',
    secondary2Name: '石板蓝',
    secondary3Name: '琥珀黄',
    scene: 'wave',
    desc: '灵感来自退潮后露出的礁石与青色海藻，清新而富有生命力。',
    primary: {
      50: '#E6F7F5', 100: '#C0EBE5', 200: '#96DCD2', 300: '#66C9BB', 400: '#42BBAA',
      500: '#1A9E8F', 600: '#158A7D', 700: '#107268', 800: '#0B5A53', 900: '#06423E'
    },
    secondary1: {
      50: '#F0F7F4', 100: '#D6EBE0', 200: '#B8DCC9', 300: '#94C9AD', 400: '#78BA96',
      500: '#52A87D', 600: '#42936B', 700: '#357A58', 800: '#2A6146', 900: '#1F4834'
    },
    secondary2: {
      50: '#F0F2F8', 100: '#DDE2F2', 200: '#C5CEE8', 300: '#A8B5DA', 400: '#92A2D0',
      500: '#7489C2', 600: '#6478B0', 700: '#53659C', 800: '#425288', 900: '#313F74'
    },
    secondary3: {
      50: '#FFF8EB', 100: '#FFECC4', 200: '#FFDD96', 300: '#FFCC64', 400: '#FFBF3D',
      500: '#F0A813', 600: '#D49210', 700: '#B07A0D', 800: '#8C620A', 900: '#684A07'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F0F7F4 0%, #C0EBE5 40%, #FFCC64 100%)',
      deep: 'linear-gradient(180deg, #1A9E8F 0%, #0B5A53 60%, #06423E 100%)',
      sunset: 'linear-gradient(135deg, #FFCC64 0%, #78BA96 50%, #1A9E8F 100%)',
      surface: 'linear-gradient(135deg, #E6F7F5 0%, #96DCD2 50%, #42BBAA 100%)',
      shimmer: 'linear-gradient(135deg, #F0A813 0%, #FFCC64 50%, #D49210 100%)'
    }
  },
  {
    id: 'coral-reef',
    name: '珊瑚礁',
    nameEn: 'Coral Reef',
    primaryName: '暖粉',
    secondary1Name: '橙棕',
    secondary2Name: '天蓝',
    secondary3Name: '奶油白',
    scene: 'reef',
    desc: '以海底珊瑚的暖粉色为灵感，活泼热情，适合亲子与家庭场景。',
    primary: {
      50: '#FDE8EE', 100: '#F9CDD9', 200: '#F3ADBF', 300: '#EC87A0', 400: '#E76A88',
      500: '#D94468', 600: '#C3385A', 700: '#A62D4B', 800: '#89223C', 900: '#6C172D'
    },
    secondary1: {
      50: '#FEF3E2', 100: '#FDE2BA', 200: '#FBCD8E', 300: '#F8B45E', 400: '#F6A03C',
      500: '#E8851A', 600: '#CF7415', 700: '#B06211', 800: '#91500D', 900: '#723E09'
    },
    secondary2: {
      50: '#E8F5F9', 100: '#C5E5EF', 200: '#9DD2E2', 300: '#6FBBD1', 400: '#4DABC4',
      500: '#2B96B6', 600: '#2482A0', 700: '#1D6C85', 800: '#17566A', 900: '#11404F'
    },
    secondary3: {
      50: '#FFFCF5', 100: '#FFF8E8', 200: '#FFF2D4', 300: '#FFEBBC', 400: '#FFE5A8',
      500: '#F5D98E', 600: '#E8C878', 700: '#D4B260', 800: '#BF9B48', 900: '#AA8430'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #FEF3E2 0%, #F9CDD9 40%, #9DD2E2 100%)',
      deep: 'linear-gradient(180deg, #D94468 0%, #89223C 60%, #6C172D 100%)',
      sunset: 'linear-gradient(135deg, #6FBBD1 0%, #F8B45E 50%, #D94468 100%)',
      surface: 'linear-gradient(135deg, #FDE8EE 0%, #F3ADBF 50%, #E76A88 100%)',
      shimmer: 'linear-gradient(135deg, #E8851A 0%, #F8B45E 50%, #CF7415 100%)'
    }
  },
  {
    id: 'golden-hour',
    name: '黄昏金',
    nameEn: 'Golden Hour',
    primaryName: '暖金',
    secondary1Name: '深玫红',
    secondary2Name: '石板灰',
    secondary3Name: '青绿',
    scene: 'sunset',
    desc: '小窑湾夕阳西下时海面被染成暖金色的壮丽景象，高端而温暖。',
    primary: {
      50: '#FBF4E4', 100: '#F5E4BE', 200: '#EDD094', 300: '#E4B86A', 400: '#DDA44A',
      500: '#D08A28', 600: '#BA7822', 700: '#9E641C', 800: '#825016', 900: '#663C10'
    },
    secondary1: {
      50: '#FDE8EE', 100: '#F9CDD9', 200: '#F3ADBF', 300: '#EC87A0', 400: '#E76A88',
      500: '#D94468', 600: '#C3385A', 700: '#A62D4B', 800: '#89223C', 900: '#6C172D'
    },
    secondary2: {
      50: '#F5F5F5', 100: '#E3E3E3', 200: '#CDCDCD', 300: '#B2B2B2', 400: '#9E9E9E',
      500: '#7D7D7D', 600: '#6E6E6E', 700: '#5E5E5E', 800: '#4E4E4E', 900: '#3E3E3E'
    },
    secondary3: {
      50: '#EDF7F5', 100: '#CCEBE5', 200: '#A4DCD2', 300: '#74C8BA', 400: '#50B8A6',
      500: '#2BA692', 600: '#249181', 700: '#1C7A6C', 800: '#156358', 900: '#0E4C43'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F9F0E6 0%, #F5E4BE 40%, #F39D9D 100%)',
      deep: 'linear-gradient(180deg, #D08A28 0%, #825016 60%, #663C10 100%)',
      sunset: 'linear-gradient(135deg, #ED7070 0%, #D6A87E 50%, #D08A28 100%)',
      surface: 'linear-gradient(135deg, #FBF4E4 0%, #EDD094 50%, #DDA44A 100%)',
      shimmer: 'linear-gradient(135deg, #BC7848 0%, #D6A87E 50%, #A8683E 100%)'
    }
  },
  {
    id: 'midnight-fisher',
    name: '夜钓墨',
    nameEn: 'Midnight Fisher',
    primaryName: '靛蓝',
    secondary1Name: '月光银',
    secondary2Name: '深青',
    secondary3Name: '灯塔琥珀',
    scene: 'night',
    desc: '夜钓时分的深蓝墨色，沉稳神秘，适合高端赛事和专业场景。',
    primary: {
      50: '#E8EDF5', 100: '#C5D0E6', 200: '#9DAED3', 300: '#7489BD', 400: '#576DAD',
      500: '#3B519D', 600: '#33478B', 700: '#2A3B76', 800: '#212F61', 900: '#18234C'
    },
    secondary1: {
      50: '#F8F8FA', 100: '#ECEEF2', 200: '#D5D8E0', 300: '#B0B5C2', 400: '#8A90A2',
      500: '#6B7285', 600: '#5A6173', 700: '#494F61', 800: '#383D4F', 900: '#272B3D'
    },
    secondary2: {
      50: '#E6F5F0', 100: '#C0E5D8', 200: '#96D2BD', 300: '#66BC9E', 400: '#44AE88',
      500: '#229B72', 600: '#1C8764', 700: '#167255', 800: '#105D46', 900: '#0A4837'
    },
    secondary3: {
      50: '#FFF8EB', 100: '#FFECC4', 200: '#FFDD96', 300: '#FFCC64', 400: '#FFBF3D',
      500: '#F0A813', 600: '#D49210', 700: '#B07A0D', 800: '#8C620A', 900: '#684A07'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F0EDF5 0%, #C5D0E6 40%, #96D2BD 100%)',
      deep: 'linear-gradient(180deg, #3B519D 0%, #212F61 60%, #18234C 100%)',
      sunset: 'linear-gradient(135deg, #66BC9E 0%, #AD99C7 50%, #3B519D 100%)',
      surface: 'linear-gradient(135deg, #E8EDF5 0%, #9DAED3 50%, #576DAD 100%)',
      shimmer: 'linear-gradient(135deg, #8568AB 0%, #AD99C7 50%, #745B9A 100%)'
    }
  },
  {
    id: 'sea-foam',
    name: '浪花白',
    nameEn: 'Sea Foam',
    primaryName: '薄荷绿',
    secondary1Name: '暖灰',
    secondary2Name: '鼠尾草绿',
    secondary3Name: '灰玫瑰',
    scene: 'foam',
    desc: '海浪拍打礁石溅起的白色泡沫，轻盈通透，适合简约清爽风格。',
    primary: {
      50: '#EDF6F3', 100: '#D0EAE3', 200: '#ADDACE', 300: '#85C7B6', 400: '#67B8A4',
      500: '#44A68E', 600: '#3A917D', 700: '#307A69', 800: '#266355', 900: '#1C4C41'
    },
    secondary1: {
      50: '#F5F5F5', 100: '#E3E3E3', 200: '#CDCDCD', 300: '#B2B2B2', 400: '#9E9E9E',
      500: '#7D7D7D', 600: '#6E6E6E', 700: '#5E5E5E', 800: '#4E4E4E', 900: '#3E3E3E'
    },
    secondary2: {
      50: '#F0F7F2', 100: '#D9EDDF', 200: '#BCDDC6', 300: '#96C9A9', 400: '#78B890',
      500: '#5AA778', 600: '#4D956A', 700: '#3F7D58', 800: '#326546', 900: '#254D34'
    },
    secondary3: {
      50: '#FDF2F4', 100: '#F9DDE3', 200: '#F3C5CF', 300: '#EBA5B7', 400: '#E58DA4',
      500: '#D96E8E', 600: '#C55C7D', 700: '#A94A6A', 800: '#8D3857', 900: '#712644'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F2F5FA 0%, #D0EAE3 40%, #FFCF9E 100%)',
      deep: 'linear-gradient(180deg, #44A68E 0%, #266355 60%, #1C4C41 100%)',
      sunset: 'linear-gradient(135deg, #FFB571 0%, #ACBBDA 50%, #44A68E 100%)',
      surface: 'linear-gradient(135deg, #EDF6F3 0%, #ADDACE 50%, #67B8A4 100%)',
      shimmer: 'linear-gradient(135deg, #FF8A2B 0%, #FFB571 50%, #E67825 100%)'
    }
  },
  {
    id: 'kelp-forest',
    name: '海藻林',
    nameEn: 'Kelp Forest',
    primaryName: '深绿',
    secondary1Name: '橄榄金',
    secondary2Name: '棕土',
    secondary3Name: '天蓝',
    scene: 'kelp',
    desc: '小窑湾海底丰富的海藻群落，深绿与金棕交织，自然生态感。',
    primary: {
      50: '#EDF5EE', 100: '#D0E6D3', 200: '#ADD4B3', 300: '#85BF90', 400: '#66AF73',
      500: '#459D56', 600: '#3C8A4C', 700: '#32753F', 800: '#286033', 900: '#1E4B27'
    },
    secondary1: {
      50: '#F7F2E8', 100: '#EDE0C8', 200: '#E0CBA2', 300: '#D1B27A', 400: '#C59F5C',
      500: '#B58B40', 600: '#A07A38', 700: '#87662F', 800: '#6E5226', 900: '#553E1D'
    },
    secondary2: {
      50: '#F5F0ED', 100: '#E6DAD4', 200: '#D4C0B7', 300: '#BFA296', 400: '#AF8E80',
      500: '#9F7A6A', 600: '#8D6C5E', 700: '#7A5C50', 800: '#674C42', 900: '#543C34'
    },
    secondary3: {
      50: '#EBF5FB', 100: '#C6E3F5', 200: '#9DCDEE', 300: '#6FB3E4', 400: '#4D9FDC',
      500: '#2B8AD3', 600: '#2478BA', 700: '#1D649E', 800: '#165082', 900: '#0F3C66'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F7F2E8 0%, #D0E6D3 40%, #F39DBB 100%)',
      deep: 'linear-gradient(180deg, #459D56 0%, #286033 60%, #1E4B27 100%)',
      sunset: 'linear-gradient(135deg, #ED709A 0%, #D1B27A 50%, #459D56 100%)',
      surface: 'linear-gradient(135deg, #EDF5EE 0%, #ADD4B3 50%, #66AF73 100%)',
      shimmer: 'linear-gradient(135deg, #B58B40 0%, #D1B27A 50%, #A07A38 100%)'
    }
  },
  {
    id: 'arctic-current',
    name: '寒流冰蓝',
    nameEn: 'Arctic Current',
    primaryName: '冰蓝',
    secondary1Name: '极地灰',
    secondary2Name: '深海军蓝',
    secondary3Name: '霜白',
    scene: 'ice',
    desc: '黄海寒流带来的冷冽冰蓝色，科技感与专业感兼具。',
    primary: {
      50: '#EBF5FB', 100: '#C6E3F5', 200: '#9DCDEE', 300: '#6FB3E4', 400: '#4D9FDC',
      500: '#2B8AD3', 600: '#2478BA', 700: '#1D649E', 800: '#165082', 900: '#0F3C66'
    },
    secondary1: {
      50: '#F5F5F5', 100: '#E3E3E3', 200: '#CDCDCD', 300: '#B2B2B2', 400: '#9E9E9E',
      500: '#7D7D7D', 600: '#6E6E6E', 700: '#5E5E5E', 800: '#4E4E4E', 900: '#3E3E3E'
    },
    secondary2: {
      50: '#E8EDF5', 100: '#C5D0E6', 200: '#9DAED3', 300: '#7489BD', 400: '#576DAD',
      500: '#3B519D', 600: '#33478B', 700: '#2A3B76', 800: '#212F61', 900: '#18234C'
    },
    secondary3: {
      50: '#FAFAFA', 100: '#F0F0F0', 200: '#E2E2E2', 300: '#CCCCCC', 400: '#B8B8B8',
      500: '#9E9E9E', 600: '#8A8A8A', 700: '#727272', 800: '#5A5A5A', 900: '#424242'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F0F4FA 0%, #C6E3F5 40%, #F6C29B 100%)',
      deep: 'linear-gradient(180deg, #2B8AD3 0%, #165082 60%, #0F3C66 100%)',
      sunset: 'linear-gradient(135deg, #F1A46E 0%, #9CB4DB 50%, #2B8AD3 100%)',
      surface: 'linear-gradient(135deg, #EBF5FB 0%, #9DCDEE 50%, #4D9FDC 100%)',
      shimmer: 'linear-gradient(135deg, #E87624 0%, #F1A46E 50%, #D06820 100%)'
    }
  },
  {
    id: 'volcanic-rock',
    name: '火山岩',
    nameEn: 'Volcanic Rock',
    primaryName: '炭灰',
    secondary1Name: '火山红',
    secondary2Name: '暖棕',
    secondary3Name: '奶油',
    scene: 'rock',
    desc: '大连沿海火山岩地貌的深灰与暗红，力量感与沉稳并存。',
    primary: {
      50: '#F3F0F0', 100: '#E0D9D9', 200: '#C9BEBE', 300: '#AF9F9F', 400: '#9B8686',
      500: '#876D6D', 600: '#786060', 700: '#675252', 800: '#564444', 900: '#453636'
    },
    secondary1: {
      50: '#FDEAEA', 100: '#F9C5C5', 200: '#F39D9D', 300: '#ED7070', 400: '#E84D4D',
      500: '#DC2626', 600: '#C42020', 700: '#A61B1B', 800: '#8A1616', 900: '#6E1010'
    },
    secondary2: {
      50: '#F9F5F0', 100: '#F0E6D6', 200: '#E4D0B6', 300: '#D6B692', 400: '#CCA074',
      500: '#C28B58', 600: '#B07B4E', 700: '#946840', 800: '#785532', 900: '#5C4224'
    },
    secondary3: {
      50: '#FFFCF5', 100: '#FFF8E8', 200: '#FFF2D4', 300: '#FFEBBC', 400: '#FFE5A8',
      500: '#F5D98E', 600: '#E8C878', 700: '#D4B260', 800: '#BF9B48', 900: '#AA8430'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F5F0ED 0%, #E0D9D9 40%, #F39D9D 100%)',
      deep: 'linear-gradient(180deg, #876D6D 0%, #564444 60%, #453636 100%)',
      sunset: 'linear-gradient(135deg, #ED7070 0%, #BFA296 50%, #876D6D 100%)',
      surface: 'linear-gradient(135deg, #F3F0F0 0%, #C9BEBE 50%, #9B8686 100%)',
      shimmer: 'linear-gradient(135deg, #9F7A6A 0%, #BFA296 50%, #8D6C5E 100%)'
    }
  },
  {
    id: 'starfish',
    name: '海星橘',
    nameEn: 'Starfish',
    primaryName: '海星橘',
    secondary1Name: '沙滩米',
    secondary2Name: '海洋蓝',
    secondary3Name: '珊瑚粉',
    scene: 'star',
    desc: '潮间带海星的明亮橘红色，充满活力与趣味，适合亲子互动场景。',
    primary: {
      50: '#FFF0E6', 100: '#FFD9BF', 200: '#FFBE93', 300: '#FF9E63', 400: '#FF863E',
      500: '#F06B18', 600: '#D45E15', 700: '#B44F12', 800: '#94400F', 900: '#74310C'
    },
    secondary1: {
      50: '#FDFBF5', 100: '#FAF5E8', 200: '#F4EDD4', 300: '#EDE2BC', 400: '#E7D9A8',
      500: '#DFCF92', 600: '#D4BC7E', 700: '#B8A468', 800: '#9C8C52', 900: '#80743C'
    },
    secondary2: {
      50: '#E8F4F8', 100: '#C5E3ED', 200: '#9DCDE0', 300: '#6FB4CE', 400: '#4A9FBE',
      500: '#1A7FA0', 600: '#156B89', 700: '#105872', 800: '#0B455A', 900: '#063243'
    },
    secondary3: {
      50: '#FDE8EE', 100: '#F9CDD9', 200: '#F3ADBF', 300: '#EC87A0', 400: '#E76A88',
      500: '#D94468', 600: '#C3385A', 700: '#A62D4B', 800: '#89223C', 900: '#6C172D'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #E6F7F5 0%, #FFD9BF 40%, #C3AEEB 100%)',
      deep: 'linear-gradient(180deg, #F06B18 0%, #94400F 60%, #74310C 100%)',
      sunset: 'linear-gradient(135deg, #A488E0 0%, #66C9BB 50%, #F06B18 100%)',
      surface: 'linear-gradient(135deg, #FFF0E6 0%, #FFBE93 50%, #FF863E 100%)',
      shimmer: 'linear-gradient(135deg, #1A9E8F 0%, #66C9BB 50%, #158A7D 100%)'
    }
  },
  {
    id: 'lighthouse',
    name: '灯塔白',
    nameEn: 'Lighthouse',
    primaryName: '纯白灰',
    secondary1Name: '航海红',
    secondary2Name: '深海军蓝',
    secondary3Name: '暖金',
    scene: 'beacon',
    desc: '海岸灯塔的纯白与暖光，极简克制，适合高端品牌展示。',
    primary: {
      50: '#FAFAFA', 100: '#F0F0F0', 200: '#E2E2E2', 300: '#CCCCCC', 400: '#B8B8B8',
      500: '#9E9E9E', 600: '#8A8A8A', 700: '#727272', 800: '#5A5A5A', 900: '#424242'
    },
    secondary1: {
      50: '#FDECEC', 100: '#FAD0D0', 200: '#F4AEAE', 300: '#EC8686', 400: '#E66666',
      500: '#DC4646', 600: '#CC3636', 700: '#B02828', 800: '#941C1C', 900: '#781010'
    },
    secondary2: {
      50: '#E8EDF5', 100: '#C5D0E6', 200: '#9DAED3', 300: '#7489BD', 400: '#576DAD',
      500: '#3B519D', 600: '#33478B', 700: '#2A3B76', 800: '#212F61', 900: '#18234C'
    },
    secondary3: {
      50: '#FDF8F0', 100: '#F9EDD8', 200: '#F3DEBB', 300: '#ECCC98', 400: '#E5BD7A',
      500: '#D4A654', 600: '#C49342', 700: '#A87A35', 800: '#8C6229', 900: '#704B1E'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #FDF8F0 0%, #E3E3E3 40%, #9DCDE0 100%)',
      deep: 'linear-gradient(180deg, #7D7D7D 0%, #4E4E4E 60%, #3E3E3E 100%)',
      sunset: 'linear-gradient(135deg, #6FB4CE 0%, #ECCC98 50%, #7D7D7D 100%)',
      surface: 'linear-gradient(135deg, #F5F5F5 0%, #CDCDCD 50%, #9E9E9E 100%)',
      shimmer: 'linear-gradient(135deg, #D4A654 0%, #ECCC98 50%, #C49342 100%)'
    }
  },
  {
    id: 'abyssal',
    name: '深渊靛',
    nameEn: 'Abyssal Indigo',
    primaryName: '深渊靛',
    secondary1Name: '生物荧光青',
    secondary2Name: '暗紫',
    secondary3Name: '电光蓝',
    scene: 'deep',
    desc: '深海最深处神秘的靛蓝色调，极致沉稳，适合夜间模式或高端场景。',
    primary: {
      50: '#EEEDF5', 100: '#D5D2E8', 200: '#B8B3D8', 300: '#968EC4', 400: '#7D72B5',
      500: '#6456A6', 600: '#594D96', 700: '#4D4185', 800: '#413574', 900: '#352963'
    },
    secondary1: {
      50: '#E6FAF8', 100: '#C0F0EA', 200: '#96E4DA', 300: '#66D5C6', 400: '#44C9B6',
      500: '#22BCA6', 600: '#1CA692', 700: '#168D7C', 800: '#107466', 900: '#0A5B50'
    },
    secondary2: {
      50: '#F3EDF5', 100: '#DDD5E8', 200: '#C7B9D9', 300: '#AD99C7', 400: '#9A82BA',
      500: '#8568AB', 600: '#745B9A', 700: '#624D87', 800: '#503F74', 900: '#3E3161'
    },
    secondary3: {
      50: '#EDF5FF', 100: '#D4EAFF', 200: '#B3D9FF', 300: '#7CC3FF', 400: '#4DB0FF',
      500: '#1A9DFF', 600: '#008AE5', 700: '#0075C4', 800: '#0060A3', 900: '#004B82'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F0EDF8 0%, #D5D2E8 40%, #96D2BD 100%)',
      deep: 'linear-gradient(180deg, #6456A6 0%, #413574 60%, #352963 100%)',
      sunset: 'linear-gradient(135deg, #66BC9E 0%, #AD9BD6 50%, #6456A6 100%)',
      surface: 'linear-gradient(135deg, #EEEDF5 0%, #B8B3D8 50%, #7D72B5 100%)',
      shimmer: 'linear-gradient(135deg, #866DC0 0%, #AD9BD6 50%, #765EAD 100%)'
    }
  },
  {
    id: 'pearl-shell',
    name: '珍珠贝',
    nameEn: 'Pearl Shell',
    primaryName: '珍珠粉',
    secondary1Name: '幻彩薰衣草',
    secondary2Name: '贝壳奶油',
    secondary3Name: '金色',
    scene: 'shell',
    desc: '潮间带贝壳的温润珠光，优雅柔和，适合女性向与高端休闲场景。',
    primary: {
      50: '#FDF2F4', 100: '#F9DDE3', 200: '#F3C5CF', 300: '#EBA5B7', 400: '#E58DA4',
      500: '#D96E8E', 600: '#C55C7D', 700: '#A94A6A', 800: '#8D3857', 900: '#712644'
    },
    secondary1: {
      50: '#F3EDF8', 100: '#E0D5F0', 200: '#C9B8E5', 300: '#AE96D8', 400: '#9A80CE',
      500: '#866AC2', 600: '#755CB0', 700: '#634D9C', 800: '#513E88', 900: '#3F2F74'
    },
    secondary2: {
      50: '#FFFCF5', 100: '#FFF8E8', 200: '#FFF2D4', 300: '#FFEBBC', 400: '#FFE5A8',
      500: '#F5D98E', 600: '#E8C878', 700: '#D4B260', 800: '#BF9B48', 900: '#AA8430'
    },
    secondary3: {
      50: '#FDF8F0', 100: '#F9EDD8', 200: '#F3DEBB', 300: '#ECCC98', 400: '#E5BD7A',
      500: '#D4A654', 600: '#C49342', 700: '#A87A35', 800: '#8C6229', 900: '#704B1E'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #FDF2F4 0%, #F9DDE3 40%, #E7C784 100%)',
      deep: 'linear-gradient(180deg, #D96E8E 0%, #A94A6A 60%, #712644 100%)',
      sunset: 'linear-gradient(135deg, #D42E52 0%, #E7C784 50%, #D96E8E 100%)',
      surface: 'linear-gradient(135deg, #FDF2F4 0%, #F3C5CF 50%, #E58DA4 100%)',
      shimmer: 'linear-gradient(135deg, #DFBB6B 0%, #E7C784 50%, #D1A95A 100%)'
    }
  },
  {
    id: 'driftwood',
    name: '浮木棕',
    nameEn: 'Driftwood',
    primaryName: '浮木棕',
    secondary1Name: '海绿',
    secondary2Name: '石灰',
    secondary3Name: '落日橙',
    scene: 'wood',
    desc: '海浪冲刷后的浮木色调，质朴温暖，适合自然生态与露营主题。',
    primary: {
      50: '#F8F4F0', 100: '#EFE6DB', 200: '#E3D0BF', 300: '#D5B69F', 400: '#C9A088',
      500: '#B88A6E', 600: '#A57A60', 700: '#8A6650', 800: '#6F5240', 900: '#543E30'
    },
    secondary1: {
      50: '#EDF7F5', 100: '#CCEBE5', 200: '#A4DCD2', 300: '#74C8BA', 400: '#50B8A6',
      500: '#2BA692', 600: '#249181', 700: '#1C7A6C', 800: '#156358', 900: '#0E4C43'
    },
    secondary2: {
      50: '#F5F5F5', 100: '#E3E3E3', 200: '#CDCDCD', 300: '#B2B2B2', 400: '#9E9E9E',
      500: '#7D7D7D', 600: '#6E6E6E', 700: '#5E5E5E', 800: '#4E4E4E', 900: '#3E3E3E'
    },
    secondary3: {
      50: '#FFF5ED', 100: '#FFE4CC', 200: '#FFCEAA', 300: '#FFB382', 400: '#FF9E60',
      500: '#FF8940', 600: '#F07830', 700: '#CC6326', 800: '#A64E1C', 900: '#803A12'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F8F4F0 0%, #EFE6DB 40%, #8FACD0 100%)',
      deep: 'linear-gradient(180deg, #B88A6E 0%, #6F5240 60%, #543E30 100%)',
      sunset: 'linear-gradient(135deg, #4A9F70 0%, #8FACD0 50%, #B88A6E 100%)',
      surface: 'linear-gradient(135deg, #F8F4F0 0%, #E3D0BF 50%, #C9A088 100%)',
      shimmer: 'linear-gradient(135deg, #7699C5 0%, #8FACD0 50%, #6888B5 100%)'
    }
  },
  {
    id: 'jellyfish',
    name: '水母紫',
    nameEn: 'Jellyfish',
    primaryName: '水母紫',
    secondary1Name: '深蓝',
    secondary2Name: '半透明粉',
    secondary3Name: '青色',
    scene: 'jellyfish',
    desc: '深海中水母的半透明紫色调，梦幻空灵，适合夜间活动与艺术场景。',
    primary: {
      50: '#F4F0F8', 100: '#E6DCF0', 200: '#D5B8E5', 300: '#C090D6', 400: '#B074CC',
      500: '#9F58C2', 600: '#8E4DAE', 700: '#7A3F9A', 800: '#663186', 900: '#522372'
    },
    secondary1: {
      50: '#E8EDF5', 100: '#C5D0E6', 200: '#9DAED3', 300: '#7489BD', 400: '#576DAD',
      500: '#3B519D', 600: '#33478B', 700: '#2A3B76', 800: '#212F61', 900: '#18234C'
    },
    secondary2: {
      50: '#FDF2F4', 100: '#FADCE2', 200: '#F4C2CE', 300: '#EDA3B6', 400: '#E78BA2',
      500: '#DF738F', 600: '#D0627E', 700: '#B05068', 800: '#903E52', 900: '#702C3C'
    },
    secondary3: {
      50: '#E6FAF8', 100: '#C0F0EA', 200: '#96E4DA', 300: '#66D5C6', 400: '#44C9B6',
      500: '#22BCA6', 600: '#1CA692', 700: '#168D7C', 800: '#107466', 900: '#0A5B50'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F4F0F8 0%, #E6DCF0 40%, #E78BA2 100%)',
      deep: 'linear-gradient(180deg, #9F58C2 0%, #663186 60%, #522372 100%)',
      sunset: 'linear-gradient(135deg, #2DA4EB 0%, #E78BA2 50%, #9F58C2 100%)',
      surface: 'linear-gradient(135deg, #F4F0F8 0%, #D5B8E5 50%, #B074CC 100%)',
      shimmer: 'linear-gradient(135deg, #DF738F 0%, #EDA3B6 50%, #D0627E 100%)'
    }
  },
  {
    id: 'seagull',
    name: '海鸥白',
    nameEn: 'Seagull',
    primaryName: '天空浅蓝',
    secondary1Name: '云白',
    secondary2Name: '海洋灰',
    secondary3Name: '沙滩米',
    scene: 'seagull',
    desc: '海面上翱翔的海鸥，灰白与天蓝的极简搭配，清爽专业。',
    primary: {
      50: '#F0F6FC', 100: '#DCEAF8', 200: '#C2D9F2', 300: '#9EC4EA', 400: '#7BB3E2',
      500: '#58A2DA', 600: '#4A90C8', 700: '#3C7AB6', 800: '#2E64A4', 900: '#204E92'
    },
    secondary1: {
      50: '#FAFAFA', 100: '#F0F0F0', 200: '#E2E2E2', 300: '#CCCCCC', 400: '#B8B8B8',
      500: '#9E9E9E', 600: '#8A8A8A', 700: '#727272', 800: '#5A5A5A', 900: '#424242'
    },
    secondary2: {
      50: '#F5F5F5', 100: '#E3E3E3', 200: '#CDCDCD', 300: '#B2B2B2', 400: '#9E9E9E',
      500: '#7D7D7D', 600: '#6E6E6E', 700: '#5E5E5E', 800: '#4E4E4E', 900: '#3E3E3E'
    },
    secondary3: {
      50: '#FDFBF5', 100: '#FAF5E8', 200: '#F4EDD4', 300: '#EDE2BC', 400: '#E7D9A8',
      500: '#DFCF92', 600: '#D4BC7E', 700: '#B8A468', 800: '#9C8C52', 900: '#80743C'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F8F9FA 0%, #DCEAF8 40%, #FFAD88 100%)',
      deep: 'linear-gradient(180deg, #6B7285 0%, #494F61 60%, #272B3D 100%)',
      sunset: 'linear-gradient(135deg, #FF7D44 0%, #FFAD88 50%, #6B7285 100%)',
      surface: 'linear-gradient(135deg, #F8F9FA 0%, #D5D8E0 50%, #B0B5C2 100%)',
      shimmer: 'linear-gradient(135deg, #58A2DA 0%, #9EC4EA 50%, #4A90C8 100%)'
    }
  },
  {
    id: 'sailboat',
    name: '帆船白',
    nameEn: 'Sailboat',
    primaryName: '帆布白',
    secondary1Name: '航海蓝',
    secondary2Name: '甲板棕',
    secondary3Name: '信号红',
    scene: 'sail',
    desc: '港口停泊的白帆与棕绳，经典航海配色，适合俱乐部与赛事品牌。',
    primary: {
      50: '#FAFAFA', 100: '#F0F0F0', 200: '#E2E2E2', 300: '#CCCCCC', 400: '#B8B8B8',
      500: '#9E9E9E', 600: '#8A8A8A', 700: '#727272', 800: '#5A5A5A', 900: '#424242'
    },
    secondary1: {
      50: '#E8F4F8', 100: '#C5E3ED', 200: '#9DCDE0', 300: '#6FB4CE', 400: '#4A9FBE',
      500: '#1A7FA0', 600: '#156B89', 700: '#105872', 800: '#0B455A', 900: '#063243'
    },
    secondary2: {
      50: '#FAF6F0', 100: '#F0E6D4', 200: '#E2CCAF', 300: '#D2B086', 400: '#C69C66',
      500: '#BA8A4A', 600: '#A87A40', 700: '#8C6534', 800: '#705028', 900: '#543B1C'
    },
    secondary3: {
      50: '#FDECEC', 100: '#FAD0D0', 200: '#F4AEAE', 300: '#EC8686', 400: '#E66666',
      500: '#DC4646', 600: '#CC3636', 700: '#B02828', 800: '#941C1C', 900: '#781010'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 40%, #D2B086 100%)',
      deep: 'linear-gradient(180deg, #9E9E9E 0%, #727272 60%, #424242 100%)',
      sunset: 'linear-gradient(135deg, #DC4646 0%, #D2B086 50%, #9E9E9E 100%)',
      surface: 'linear-gradient(135deg, #FAFAFA 0%, #E2E2E2 50%, #CCCCCC 100%)',
      shimmer: 'linear-gradient(135deg, #BA8A4A 0%, #D2B086 50%, #A87A40 100%)'
    }
  },
  {
    id: 'mangrove',
    name: '红树林',
    nameEn: 'Mangrove',
    primaryName: '红树林绿',
    secondary1Name: '咸水棕',
    secondary2Name: '天蓝',
    secondary3Name: '花卉粉',
    scene: 'mangrove',
    desc: '海岸红树林湿地，绿棕交织的生态色彩，自然和谐。',
    primary: {
      50: '#F0F7F2', 100: '#D9EDDF', 200: '#BCDDC6', 300: '#96C9A9', 400: '#78B890',
      500: '#5AA778', 600: '#4D956A', 700: '#3F7D58', 800: '#326546', 900: '#254D34'
    },
    secondary1: {
      50: '#F9F5F0', 100: '#F0E6D6', 200: '#E4D0B6', 300: '#D6B692', 400: '#CCA074',
      500: '#C28B58', 600: '#B07B4E', 700: '#946840', 800: '#785532', 900: '#5C4224'
    },
    secondary2: {
      50: '#F0F6FC', 100: '#DCEAF8', 200: '#C2D9F2', 300: '#9EC4EA', 400: '#7BB3E2',
      500: '#58A2DA', 600: '#4A90C8', 700: '#3C7AB6', 800: '#2E64A4', 900: '#204E92'
    },
    secondary3: {
      50: '#FDE8EE', 100: '#F9CDD9', 200: '#F3ADBF', 300: '#EC87A0', 400: '#E76A88',
      500: '#D94468', 600: '#C3385A', 700: '#A62D4B', 800: '#89223C', 900: '#6C172D'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F0F7F2 0%, #D9EDDF 40%, #D6B692 100%)',
      deep: 'linear-gradient(180deg, #5AA778 0%, #3F7D58 60%, #254D34 100%)',
      sunset: 'linear-gradient(135deg, #FF8940 0%, #D6B692 50%, #5AA778 100%)',
      surface: 'linear-gradient(135deg, #F0F7F2 0%, #BCDDC6 50%, #78B890 100%)',
      shimmer: 'linear-gradient(135deg, #C28B58 0%, #D6B692 50%, #B07B4E 100%)'
    }
  },
  {
    id: 'bioluminescence',
    name: '荧光海',
    nameEn: 'Bioluminescence',
    primaryName: '深暗蓝',
    secondary1Name: '荧光青',
    secondary2Name: '暗青',
    secondary3Name: '霓虹绿',
    scene: 'bioluminescence',
    desc: '夜间海面荧光生物的神秘蓝光，科技感与未来感兼具。',
    primary: {
      50: '#0D1B2A', 100: '#0F2035', 200: '#122840', 300: '#15304B', 400: '#183856',
      500: '#1B4061', 600: '#1E486C', 700: '#215077', 800: '#245882', 900: '#27608D'
    },
    secondary1: {
      50: '#E6FAF8', 100: '#C0F0EA', 200: '#96E4DA', 300: '#66D5C6', 400: '#44C9B6',
      500: '#22BCA6', 600: '#1CA692', 700: '#168D7C', 800: '#107466', 900: '#0A5B50'
    },
    secondary2: {
      50: '#0E2A2A', 100: '#103030', 200: '#133838', 300: '#164040', 400: '#194848',
      500: '#1C5050', 600: '#1F5858', 700: '#226060', 800: '#256868', 900: '#287070'
    },
    secondary3: {
      50: '#EDFFF5', 100: '#C8FFE6', 200: '#96FFD4', 300: '#60FFC0', 400: '#33FFB0',
      500: '#00F5A0', 600: '#00D98E', 700: '#00BC7A', 800: '#009966', 900: '#00764E'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 40%, #1A9DFF 100%)',
      deep: 'linear-gradient(180deg, #1A9DFF 0%, #0075C4 60%, #004B82 100%)',
      sunset: 'linear-gradient(135deg, #00F5A0 0%, #1A9DFF 50%, #424242 100%)',
      surface: 'linear-gradient(135deg, #0D0D0D 0%, #333333 50%, #424242 100%)',
      shimmer: 'linear-gradient(135deg, #00F5A0 0%, #60FFC0 50%, #00D98E 100%)'
    }
  },
  {
    id: 'conch',
    name: '海螺粉',
    nameEn: 'Conch',
    primaryName: '海螺粉',
    secondary1Name: '绿松石',
    secondary2Name: '沙滩米',
    secondary3Name: '珊瑚红',
    scene: 'conch',
    desc: '海滩上捡到的粉色海螺壳，柔和浪漫，适合婚庆与度假场景。',
    primary: {
      50: '#FDF2F6', 100: '#FADCE8', 200: '#F4C1D5', 300: '#ECA0BF', 400: '#E685AD',
      500: '#DE6A9C', 600: '#CE5A8C', 700: '#B04A78', 800: '#923A64', 900: '#742A50'
    },
    secondary1: {
      50: '#E6F7F5', 100: '#C0EBE5', 200: '#96DCD2', 300: '#66C9BB', 400: '#42BBAA',
      500: '#1A9E8F', 600: '#158A7D', 700: '#107268', 800: '#0B5A53', 900: '#06423E'
    },
    secondary2: {
      50: '#FDFBF5', 100: '#FAF5E8', 200: '#F4EDD4', 300: '#EDE2BC', 400: '#E7D9A8',
      500: '#DFCF92', 600: '#D4BC7E', 700: '#B8A468', 800: '#9C8C52', 900: '#80743C'
    },
    secondary3: {
      50: '#FDE8EE', 100: '#F9CDD9', 200: '#F3ADBF', 300: '#EC87A0', 400: '#E76A88',
      500: '#D94468', 600: '#C3385A', 700: '#A62D4B', 800: '#89223C', 900: '#6C172D'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #FDF2F6 0%, #FADCE8 40%, #E7D57C 100%)',
      deep: 'linear-gradient(180deg, #DE6A9C 0%, #B04A78 60%, #742A50 100%)',
      sunset: 'linear-gradient(135deg, #1A7FA0 0%, #E7D57C 50%, #DE6A9C 100%)',
      surface: 'linear-gradient(135deg, #FDF2F6 0%, #F4C1D5 50%, #E685AD 100%)',
      shimmer: 'linear-gradient(135deg, #DFCA62 0%, #EDE098 50%, #D1B852 100%)'
    }
  },
  {
    id: 'tidepool',
    name: '潮汐池',
    nameEn: 'Tidepool',
    primaryName: '潮汐池蓝',
    secondary1Name: '岩灰',
    secondary2Name: '海绿',
    secondary3Name: '海星橙',
    scene: 'tidepool',
    desc: '退潮后潮汐池中丰富的小生态，蓝绿橙三色活泼交织。',
    primary: {
      50: '#EFF6FC', 100: '#D6EAFA', 200: '#B5D8F5', 300: '#88C1EE', 400: '#62AEE8',
      500: '#3D9BE2', 600: '#2E8AD0', 700: '#2276BC', 800: '#1762A8', 900: '#0C4E94'
    },
    secondary1: {
      50: '#F5F5F5', 100: '#E3E3E3', 200: '#CDCDCD', 300: '#B2B2B2', 400: '#9E9E9E',
      500: '#7D7D7D', 600: '#6E6E6E', 700: '#5E5E5E', 800: '#4E4E4E', 900: '#3E3E3E'
    },
    secondary2: {
      50: '#EDF7F5', 100: '#CCEBE5', 200: '#A4DCD2', 300: '#74C8BA', 400: '#50B8A6',
      500: '#2BA692', 600: '#249181', 700: '#1C7A6C', 800: '#156358', 900: '#0E4C43'
    },
    secondary3: {
      50: '#FFF0E6', 100: '#FFD9BF', 200: '#FFBE93', 300: '#FF9E63', 400: '#FF863E',
      500: '#F06B18', 600: '#D45E15', 700: '#B44F12', 800: '#94400F', 900: '#74310C'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #EFF6FC 0%, #D2EBE0 40%, #FFB680 100%)',
      deep: 'linear-gradient(180deg, #3D9BE2 0%, #2276BC 60%, #0C4E94 100%)',
      sunset: 'linear-gradient(135deg, #FF8A3A 0%, #88C8AD 50%, #3D9BE2 100%)',
      surface: 'linear-gradient(135deg, #EFF6FC 0%, #B5D8F5 50%, #62AEE8 100%)',
      shimmer: 'linear-gradient(135deg, #48A884 0%, #88C8AD 50%, #3C9674 100%)'
    }
  },
  {
    id: 'squid-ink',
    name: '墨鱼汁',
    nameEn: 'Squid Ink',
    primaryName: '墨色',
    secondary1Name: '深紫',
    secondary2Name: '海洋蓝',
    secondary3Name: '金色点缀',
    scene: 'ink',
    desc: '深海墨鱼的极致黑白，配以一抹钴蓝点缀，极简高级。',
    primary: {
      50: '#F5F5F5', 100: '#E0E0E0', 200: '#BDBDBD', 300: '#9E9E9E', 400: '#757575',
      500: '#424242', 600: '#333333', 700: '#252525', 800: '#1A1A1A', 900: '#0D0D0D'
    },
    secondary1: {
      50: '#F3EDF5', 100: '#DDD5E8', 200: '#C7B9D9', 300: '#AD99C7', 400: '#9A82BA',
      500: '#8568AB', 600: '#745B9A', 700: '#624D87', 800: '#503F74', 900: '#3E3161'
    },
    secondary2: {
      50: '#E8F4F8', 100: '#C5E3ED', 200: '#9DCDE0', 300: '#6FB4CE', 400: '#4A9FBE',
      500: '#1A7FA0', 600: '#156B89', 700: '#105872', 800: '#0B455A', 900: '#063243'
    },
    secondary3: {
      50: '#FDF8F0', 100: '#F9EDD8', 200: '#F3DEBB', 300: '#ECCC98', 400: '#E5BD7A',
      500: '#D4A654', 600: '#C49342', 700: '#A87A35', 800: '#8C6229', 900: '#704B1E'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #FAFAFA 0%, #E0E0E0 40%, #5A98DD 100%)',
      deep: 'linear-gradient(180deg, #424242 0%, #252525 60%, #0D0D0D 100%)',
      sunset: 'linear-gradient(135deg, #3482D6 0%, #9E9E9E 50%, #424242 100%)',
      surface: 'linear-gradient(135deg, #F5F5F5 0%, #BDBDBD 50%, #757575 100%)',
      shimmer: 'linear-gradient(135deg, #3482D6 0%, #82AEE4 50%, #2B72C2 100%)'
    }
  },
  {
    id: 'coral-sunset',
    name: '珊瑚落日',
    nameEn: 'Coral Sunset',
    primaryName: '落日橘',
    secondary1Name: '深珊瑚',
    secondary2Name: '暮光紫',
    secondary3Name: '金黄',
    scene: 'sunset',
    desc: '珊瑚海上落日余晖的绚烂色彩，热烈浪漫，适合活动与节庆场景。',
    primary: {
      50: '#FFF4ED', 100: '#FFE2D0', 200: '#FFC9AD', 300: '#FFAB86', 400: '#FF9268',
      500: '#FF7A4A', 600: '#F06838', 700: '#CC552C', 800: '#A64220', 900: '#802F14'
    },
    secondary1: {
      50: '#FDE8EE', 100: '#F9CDD9', 200: '#F3ADBF', 300: '#EC87A0', 400: '#E76A88',
      500: '#D94468', 600: '#C3385A', 700: '#A62D4B', 800: '#89223C', 900: '#6C172D'
    },
    secondary2: {
      50: '#F5F0FA', 100: '#E6D8F4', 200: '#D3B8EB', 300: '#BC94DE', 400: '#AA78D4',
      500: '#985CCA', 600: '#874EB8', 700: '#7240A6', 800: '#5D3294', 900: '#482482'
    },
    secondary3: {
      50: '#FDF8EE', 100: '#FAEED4', 200: '#F4DEB6', 300: '#EDCC96', 400: '#E7BC7C',
      500: '#DFAC64', 600: '#D19A52', 700: '#B08342', 800: '#8F6C32', 900: '#6E5522'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #FFF4ED 0%, #FFE2D0 40%, #E7BC7C 100%)',
      deep: 'linear-gradient(180deg, #FF7A4A 0%, #CC552C 60%, #802F14 100%)',
      sunset: 'linear-gradient(135deg, #DFAC64 0%, #BC94DE 50%, #FF7A4A 100%)',
      surface: 'linear-gradient(135deg, #FFF4ED 0%, #FFC9AD 50%, #FF9268 100%)',
      shimmer: 'linear-gradient(135deg, #985CCA 0%, #BC94DE 50%, #874EB8 100%)'
    }
  },
  {
    id: 'deep-current',
    name: '深海洋流',
    nameEn: 'Deep Current',
    primaryName: '深海蓝',
    secondary1Name: '洋流青',
    secondary2Name: '海藻绿',
    secondary3Name: '浪沫白',
    scene: 'current',
    desc: '深海洋流带来的蓝绿色调，沉稳而富有层次感，适合专业展示。',
    primary: {
      50: '#E8F4F8', 100: '#C5E3ED', 200: '#9DCDE0', 300: '#6FB4CE', 400: '#4A9FBE',
      500: '#1A7FA0', 600: '#156B89', 700: '#105872', 800: '#0B455A', 900: '#063243'
    },
    secondary1: {
      50: '#E6F7F5', 100: '#C0EBE5', 200: '#96DCD2', 300: '#66C9BB', 400: '#42BBAA',
      500: '#1A9E8F', 600: '#158A7D', 700: '#107268', 800: '#0B5A53', 900: '#06423E'
    },
    secondary2: {
      50: '#EDF5EE', 100: '#D0E6D3', 200: '#ADD4B3', 300: '#85BF90', 400: '#66AF73',
      500: '#459D56', 600: '#3C8A4C', 700: '#32753F', 800: '#286033', 900: '#1E4B27'
    },
    secondary3: {
      50: '#FAFAFA', 100: '#F0F0F0', 200: '#E2E2E2', 300: '#CCCCCC', 400: '#B8B8B8',
      500: '#9E9E9E', 600: '#8A8A8A', 700: '#727272', 800: '#5A5A5A', 900: '#424242'
    },
    gradients: {
      dawn: 'linear-gradient(135deg, #F8F8FA 0%, #D2ECEC 40%, #E68AA0 100%)',
      deep: 'linear-gradient(180deg, #3C9E9E 0%, #267474 60%, #124444 100%)',
      sunset: 'linear-gradient(135deg, #DE7088 0%, #8A90A2 50%, #3C9E9E 100%)',
      surface: 'linear-gradient(135deg, #EDF6F6 0%, #ADD9D9 50%, #5FB0B0 100%)',
      shimmer: 'linear-gradient(135deg, #6B7285 0%, #B0B5C2 50%, #5A6173 100%)'
    }
  }
];
