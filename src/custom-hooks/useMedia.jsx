import React, { useEffect, useState } from "react";

const useMedia = (mediaQuery) => {
	const mediaQueryList = window.matchMedia(mediaQuery);
	const [mediaQueryMatch, setMediaQueryMatch] = useState(
		mediaQueryList.matches
	);

	useEffect(() => {
		const handler = () => setMediaQueryMatch(mediaQueryList.matches);

		mediaQueryList.addEventListener("change", handler);
		return () => mediaQueryList.removeEventListener("change", handler);
	}, []);

	return mediaQueryMatch;
};

export { useMedia };
