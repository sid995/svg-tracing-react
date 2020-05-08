import React, { useEffect } from "react";
// import { ReactComponent as SVGdesign } from "./yarn-svg-1.svg";

const SvgComponent = () => {
	useEffect(() => {
		const svg = document.getElementById("prefix__Path_1998");
		const length = svg.getTotalLength();

		// start positioning of svg drawing
		svg.style.strokeDasharray = length;

		// hide svg before scrolling starts
		svg.style.strokeDashoffset = length;

		window.addEventListener("scroll", function () {
			const scrollpercent =
				(document.body.scrollTop + document.documentElement.scrollTop) /
				(document.documentElement.scrollHeight -
					document.documentElement.clientHeight);

			// Reverse the drawing when scroll upwards
			svg.style.strokeDashoffset = Math.floor(length * (1 - scrollpercent));
		});
	}, []);

	return (
		<div
			style={{
				height: "100vh",
				paddingTop: "40vh",
				position: "fixed",
				top: 20,
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1190.407"
				height="493.744"
				viewBox="0 0 1190.407 493.744"
			>
				<g
					id="prefix__yarn_01"
					data-name="yarn 01"
					transform="translate(.65 .039)"
				>
					<path
						id="prefix__Path_1998"
						d="M-1116.985 1281.1c6.844 98.461-61.743 191.275-149.837 235.783s-191.6 48.01-289.514 35.563-193.4-39.756-291.1-53.783a1086.532 1086.532 0 0 0-279.677-3.733c-48.394 5.634-99.166 15.83-135.33 48.477-38.706 34.942-53.565 93.951-36.022 143.056s66.429 85.341 118.513 87.847"
						data-name="Path 1998"
						transform="translate(2305.765 -1281.104)"
						style={{ fill: "none", stroke: "#5f5f5f", strokeMiterlimit: 10 }}
					/>
				</g>
			</svg>
		</div>
	);
};

export default SvgComponent;
