
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'

import { Inter_Tight } from 'next/font/google'
import { AOSInit } from './aoshook/aoshook';
import ImportBs from './importBs';

const inter = Inter_Tight({ subsets: ['latin'] })
export const metadata = {
  title: "Umer Shauket - Chairman CRESCO Real Estate",
  description:
    "Umer Shauket is the driving force behind CRESCO Real Estate, setting the strategic direction and leading the team toward unparalleled success.",
  icons: {
    icon: ["/us.png?v=4"],
    apple: ["/us.png?v4"],
    shortcut: ["/us.png"],
  },
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>  
      <ImportBs/>
        <div>{children}</div>
      </body>
    </html>
  )
}
