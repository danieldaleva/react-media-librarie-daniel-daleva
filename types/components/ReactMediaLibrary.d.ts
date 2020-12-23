import * as React from 'react';
import {FileUploadProps} from "./FileUpload";
import {FileLibraryProps} from "./FileLibrary";

export interface ReactMediaLibraryProps extends FileUploadProps, FileLibraryProps {
	show: boolean;
	onHide: () => void;
	modalTitle?: string;
	uploadTitle?: string;
	libraryTitle?: string;
}

export const ReactMediaLibrary: React.FC<ReactMediaLibraryProps>;
