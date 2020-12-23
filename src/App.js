import React, { useState } from "react";
import { ControlledEditor } from "@monaco-editor/react";

import "./App.css";

const LANGUAGE = [
	"javascript",
	"html",
	"css",
	"typescript",
	"json",
	"less",
	"scss",
	"mysql",
	"sql",
	"pgsql",
	"c",
	"cpp",
	"java",
	"csharp",
	"dart",
	"dockerfile",
	"go",
	"graphql",
	"markdown",
	"php",
	"perl",
	"objective-c",
	"python",
	"rust",
	"ruby",
	"rust",
	"shell",
	"swift",
	"coffeescript",
	"kotlin",
	"plaintext",
	"vb",
];

const Selector = ({ selectLang, lang, theme }) => {
	const [showList, setShowList] = useState(false);

	const handleLangList = () => {
		setShowList(!showList);
	};

	const onSelectLang = (selectedLang) => {
		selectLang(selectedLang);
		handleLangList();
	};

	return (
		<div className="SelectLangHolder">
			{showList && (
				<div className="Langs">
					{LANGUAGE.map((el, index) => (
						<p key={index} onClick={() => onSelectLang(el)}>
							{el}
						</p>
					))}
				</div>
			)}
			<div className="SelectLang" onClick={handleLangList}>
				{lang}
			</div>
		</div>
	);
};

const App = () => {
	const [content, setContent] = useState("// Create something awesome");
	const [language, setLanguage] = useState(LANGUAGE[0]);
	const [theme, setTheme] = useState(true);

	const handleContent = (e, value) => {
		setContent(value);
	};

	const handleLang = (e) => {
		setLanguage(e.target.value);
	};

	const handleTheme = () => {
		setTheme(!theme);
	};

	return (
		<div
			className="Main"
			style={{ backgroundColor: theme ? "#FFFFFE" : "#202124" }}
		>
			<div className="EditorHolder">
				<ControlledEditor
					value={content}
					className={"Editor"}
					language={language}
					onChange={handleContent}
					theme={theme ? "light" : "dark"}
					loading={
						<h1 style={{ color: theme ? "gray" : "white" }}>Waiting...</h1>
					}
				/>
			</div>
			<div
				className="SettingHolder"
				style={{ backgroundColor: theme ? "#C9C9C8" : "#1E1E1E" }}
			>
				<div className="Setting">
					<Selector selectLang={(lang) => setLanguage(lang)} lang={language} />
					<button className="ThemeBTN" onClick={handleTheme}>
						{theme ? "dark" : "light"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
