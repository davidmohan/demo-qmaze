import LayoutRoot from '@/components/LayoutRoot'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/index'
config.autoAddCss = false;

export const metadata = {
  title: 'My App',
  description: 'Created By 40',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutRoot >
          {children}
        </LayoutRoot>
      </body>
    </html>
  )
}
