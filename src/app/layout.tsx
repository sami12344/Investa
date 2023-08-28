import Header from '@/components/Header'
import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'Investa | Empowering Your Financial Future with Intelligent Investments',
  description: "Investa is your partner in achieving a prosperous financial future. Explore a range of investment opportunities backed by data-driven insights and expert guidance. Whether you’re new to investing or an experienced trader, Investa's innovative approach ensures your investments are positioned for success.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
