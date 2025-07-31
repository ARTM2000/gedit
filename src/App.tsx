import React, { useRef, useState } from "react";
import { Editor, type Monaco } from "@monaco-editor/react";
import { LANGUAGE, type Language, type SelectorProps } from "./types";

import "./App.css";

const Selector: React.FC<SelectorProps> = ({ selectLang, lang, theme }) => {
	const [showList, setShowList] = useState<boolean>(false);

	const handleLangList = (): void => {
		setShowList(!showList);
	};

	const onSelectLang = (selectedLang: Language): void => {
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

const App: React.FC = () => {
	const [content, setContent] = useState<string>("// Create something awesome");
	const [language, setLanguage] = useState<Language>(LANGUAGE[0]);
	const [theme, setTheme] = useState<boolean>(false);
	const editorRef = useRef<any>(null);

	const handleContent = (value: string | undefined): void => {
		if (value !== undefined) {
			setContent(value);
		}
	};

	const handleLang = (value: Language): void => {
		setLanguage(value);
	};

	const handleTheme = (): void => {
		setTheme(!theme);
	};

	const handleEditorDidMount = (
		editor: any,
		monaco: Monaco
	): void => {
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
					value={content}
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
