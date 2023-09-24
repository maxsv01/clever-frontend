import clsx from 'clsx'
import '../styles/globals.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import ThemeRegistry from '@/components/ThemeRegistry'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500', '700'],
   variable: '--roboto' 
  },
)

export const metadata: Metadata = {
  title: 'Clever',
  description: 'Making Education a Joyful Adventure!',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <ThemeRegistry>
        <body
          className={clsx(
            roboto.variable,
            'font-primary flex flex-col justify-between min-h-[100dvh] ![background-image:linear-gradient(to_right_top,_#051937,_#262a66,_#5c3590,_#a033b0,_#eb12c2)]',
          )}
        >
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
