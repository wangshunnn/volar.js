import type { CodeInformation } from './types';

export function isHoverEnabled(info: CodeInformation): boolean {
	return !!info.semantic;
}

export function isInlayHintsEnabled(info: CodeInformation): boolean {
	return !!info.semantic;
}

export function isCodeLensEnabled(info: CodeInformation): boolean {
	return !!info.semantic;
}

export function isMonikerEnabled(info: CodeInformation): boolean {
	return !!info.semantic;
}

export function isInlineValueEnabled(info: CodeInformation): boolean {
	return !!info.semantic;
}

export function isSemanticTokensEnabled(info: CodeInformation): boolean {
	return typeof info.semantic === 'object'
		? info.semantic.shouldHighlight?.() ?? true
		: !!info.semantic;
}

export function isCallHierarchyEnabled(info: CodeInformation): boolean {
	return !!info.navigation;
}

export function isTypeHierarchyEnabled(info: CodeInformation): boolean {
	return !!info.navigation;
}

export function isRenameEnabled(info: CodeInformation): boolean {
	return typeof info.navigation === 'object'
		? info.navigation.shouldRename?.() ?? true
		: !!info.navigation;
}

export function isDefinitionEnabled(info: CodeInformation): boolean {
	return !!info.navigation;
}

export function isTypeDefinitionEnabled(info: CodeInformation): boolean {
	return !!info.navigation;
}

export function isReferencesEnabled(info: CodeInformation): boolean {
	return !!info.navigation;
}

export function isImplementationEnabled(info: CodeInformation): boolean {
	return !!info.navigation;
}

export function isHighlightEnabled(info: CodeInformation): boolean {
	return !!info.navigation;
}

export function isSymbolsEnabled(info: CodeInformation): boolean {
	return !!info.structure;
}

export function isFoldingRangesEnabled(info: CodeInformation): boolean {
	return !!info.structure;
}

export function isSelectionRangesEnabled(info: CodeInformation): boolean {
	return !!info.structure;
}

export function isLinkedEditingEnabled(info: CodeInformation): boolean {
	return !!info.structure;
}

export function isColorEnabled(info: CodeInformation): boolean {
	return !!info.structure;
}

export function isDocumentLinkEnabled(info: CodeInformation): boolean {
	return !!info.structure;
}

export function isDiagnosticsEnabled(info: CodeInformation): boolean {
	return !!info.verification;
}

export function isCodeActionsEnabled(info: CodeInformation): boolean {
	return !!info.verification;
}

export function isFormattingEnabled(info: CodeInformation): boolean {
	return !!info.format;
}

export function isCompletionEnabled(info: CodeInformation): boolean {
	return !!info.completion;
}

export function isAutoInsertEnabled(info: CodeInformation): boolean {
	return !!info.completion;
}

export function isSignatureHelpEnabled(info: CodeInformation): boolean {
	return !!info.completion;
}

// should...

export function shouldReportDiagnostics(info: CodeInformation, source: string | undefined, code: string | number | undefined): boolean {
	return typeof info.verification === 'object'
		? info.verification.shouldReport?.(source, code) ?? true
		: !!info.verification;
}
