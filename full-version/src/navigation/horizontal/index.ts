import type { HorizontalNavItems } from '@layouts/types'
import charts from './charts'
import dashboard from './dashboard'
import pages from './pages'

// export default [...dashboard, ...apps, ...pages, ...uiElements, ...forms, ...tables, ...charts, ...misc] as HorizontalNavItems
export default [...charts, ...dashboard, ...pages] as HorizontalNavItems
