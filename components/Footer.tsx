import siteLocalData from "../siteLocalData";

const Footer = () => {
	const { copyWriteYear, title } = siteLocalData;
	return (
		<footer className="text-center" data-testid="footer">
			<h3>{title} &copy; {copyWriteYear}</h3>
		</footer>
	);
};

export default Footer;
