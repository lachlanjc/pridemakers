import base from '@hackclub/theme'
// import { highlight } from '@mdx-deck/themes'
import { merge } from 'theme-ui'

const colors = {
  red: '#F41A3C',
  purple: '#4A258F',
  yellow: '#EFD912',
  pink: '#FF00B8',
  blue: '#1DE0FE',
  deep: '#3a3169',
  dark: '#1A162F',
  muted: '#aaa',
}

const cx = (c) => colors[c] || c
const gx = (from, to) => `radial-gradient(
  ellipse farthest-corner at top left,
  ${cx(from)},
  ${cx(to)}
)`
const gxText = (from, to) => ({
  color: cx(to),
  [base.util.supportsClipText]: {
    backgroundImage: gx(from, to),
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
})

const theme = merge.all(
  base,
  // highlight,
  {
    useColorSchemeMediaQuery: false,
    fonts: {
      heading:
        'WhyteInktrap, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      body:
        'Whyte, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      monospace: 'ui-monospace, "Roboto Mono", Menlo, Consolas, monospace',
    },
    styles: {
      Slide: {
        fontSize: [3, 4],
        textAlign: 'center',
        color: 'deep',
        bg: 'white',
        backgroundImage:
          'url(https://cloud-mrmwglotq-hack-club-bot.vercel.app/0image.png)',
        backgroundSize: '100% auto',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      },
      img: {
        objectFit: 'contain',
      },
      a: {
        ...gxText('blue', 'purple'),
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
      },
      h1: {
        ...gxText('pink', 'blue'),
        fontFamily: 'heading',
        fontSize: [6, 7, 8],
      },
      h2: {
        ...gxText('pink', 'yellow'),
        fontFamily: 'heading',
        fontSize: [5, 6, 7],
      },
      h3: {
        color: 'purple',
        fontFamily: 'heading',
        fontSize: [4, 5, 6],
        maxWidth: '22ch',
      },
      pre: {
        textAlign: 'left',
        fontSize: 3,
        bg: `${colors.dark} !important`,
        color: `${colors.pink} !important`,
        maxWidth: '56ch',
        whiteSpace: 'pre-wrap',
      },
      code: {
        bg: 'sunken',
        px: 1,
        borderRadius: 'default',
        color: `${colors.pink} !important`,
      },
      p: {
        color: 'deep',
        maxWidth: 980,
        mx: 'auto',
        px: 3,
      },
      strong: {
        ...gxText('red', 'purple'),
      },
      li: {
        color: 'deep',
        maxWidth: 980,
        mx: 'auto',
        px: 3,
      },
      small: {
        ...base.text.caption,
        fontSize: 2,
      },
    },
  }
)

delete theme.colors
theme.colors = colors
theme.util = { cx, gx, gxText }

export default theme
