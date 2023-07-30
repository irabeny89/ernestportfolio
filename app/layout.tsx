import Header from "components/Header";
import siteData from "../siteLocalData";
import Footer from "components/Footer";
import "../styles/globals.css";

type Props = Record<"children", React.ReactNode>;

export default function RootLayout({ children }: Props) {
	const { title, description } = siteData;

	return (
		<html lang="en">
			<head>
				<title>{title}</title>
				<meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
			</head>
			<body className="bg-slate-50">
        <Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
