import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";

import "./App.css";

const LANGUAGE = [
	"plaintext",
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
	const [theme, setTheme] = useState(false);
	const editorRef = useRef(null);

	const handleContent = (e, value) => {
		setContent(value);
	};

	const handleLang = (value) => {
		setLanguage(value);
	};

	const handleTheme = () => {
		setTheme(!theme);
	};

	const handleEditorDidMount = (editor, monaco) => {
		editorRef.current = editor;
	};

	return (
		<div
			className="Main"
			style={{ backgroundColor: theme ? "#FFFFFE" : "#202124" }}
		>
			<div className="EditorHolder">
				<Editor
					height="90vh"
					defaultLanguage="javascript"
					defaultValue={content}
					onMount={handleEditorDidMount}
					onChange={handleContent}
					language={language}
					theme={theme ? "light" : "vs-dark"}
				/>
			</div>
			<div
				className="SettingHolder"
				style={{ backgroundColor: theme ? "#C9C9C8" : "#1E1E1E" }}
			>
				<div className="Setting">
					<Selector selectLang={handleLang} lang={language} />
					<button className="ThemeBTN" onClick={handleTheme}>
						{theme ? "dark" : "light"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
