// Language types for the Monaco Editor
export const LANGUAGE = [
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
] as const;

export type Language = typeof LANGUAGE[number];

// Component Props interfaces
export interface SelectorProps {
	selectLang: (lang: Language) => void;
	lang: Language;
	theme?: boolean;
}

// Web Vitals type
export type ReportHandler = (metric: any) => void;