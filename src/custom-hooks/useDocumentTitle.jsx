import React from "react";

const useDocumentTitle = () => {
	const setDocumentTitle = (title) => (document.title = title);

	return { setDocumentTitle };
};

export { useDocumentTitle };
