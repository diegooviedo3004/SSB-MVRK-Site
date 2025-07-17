import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			poppins: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
  			montserrat: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
  			playfair: ['Playfair Display', 'Georgia', 'serif'],
  			sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  			heading: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  			serif: ['Playfair Display', 'Georgia', 'serif']
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			ssb: {
  				'dark-blue': '#1e3a5f',
  				'blue': '#2563eb',
  				'light-blue': '#3b82f6',
  				'cyan': '#06b6d4',
  				'orange': '#ea580c',
  				'gray': '#6b7280'
  			},
  			primary: {
  				DEFAULT: '#1e3a5f',
  				foreground: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: '#2563eb',
  				foreground: '#ffffff'
  			},
  			accent: {
  				DEFAULT: '#ea580c',
  				foreground: '#ffffff'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in-right': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'gradient': {
  				'0%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  				'100%': { backgroundPosition: '0% 50%' },
  			},
            'shimmer': {
                '0%': { 
                    backgroundPosition: '-200% 0',
                },
                '100%': { 
                    backgroundPosition: '200% 0',
                }
            },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'fade-in-right': 'fade-in-right 0.5s ease-out',
  			'gradient': 'gradient 8s ease infinite',
            'shimmer': 'shimmer 8s ease-in-out infinite',
  		},
  		backgroundSize: {
  			'200%': '200% 200%',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config; 