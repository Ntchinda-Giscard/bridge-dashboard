"use client"
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';


export default function Providers({
    children,
  }: {
    children: React.ReactNode;
  }) {
  
  const adminSecret = "cBUCi2wfVzpC5j16ede1stHx4nEajfTnWk0V43TRz3gVk0tGrXQ5VcILCqRJ0dkt";
  
    return (
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
        <MantineProvider>
            {children}
        </MantineProvider>
        </body>
      </html>
    );
  }