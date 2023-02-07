import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material"
import { Box } from "@mui/system"

const theme = createTheme({
	palette: {
		primary: {
			main: "#c9959f",
			contrastText: "#000000",
		},
		secondary: {
			main: "#e88f9e",
			contrastText: "#ffffff",
		},
		background: {
			default: "#efd2d2",
		},
	},
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Box
				height={"100%"}
				bgcolor={theme.palette.background.default}
				color={theme.palette.primary.contrastText}>
				<Component {...pageProps} />
			</Box>
		</ThemeProvider>
	)
}
