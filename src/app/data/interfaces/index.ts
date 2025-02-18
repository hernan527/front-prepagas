export * from './planes';

export interface Ranking {
	id: number;
	image: string;
	interestRate: number;
	approvalTime: number;
	procedures: string;
	rating: number;
	entity: string;
}

export interface Service {
	id: string;
	title: string;
	description: string;
	image: string;
}

export interface Benefit {
	id: number;
	title: string;
	description: string;
}

export interface Option {
	id: string;
	name: string;
	icon: string;
}

export interface Item {
	id: number;
	name: string;
	description: string;
}

export interface SelectOption {
	id: number;
	name: string;
}

export interface Credit {
	id: number;
	loanRate: number;
	financing: number;
	loanAmount: number;
	bankBorrow: number;
	userInitialAmount: number;
	borrowedAmount: number;
	initialAmountNeeded: number;
	monthlyPayment: number;
	numericalTerm: number;
	textTerm: string;
	financialentityId: number;
	financialentityName: string;
	financialentityType: number;
	photoUrl: string;
	info: string;
	paymentTermination: string;
	priority: number;
}

export interface Imagen {
	id: string;
	empresa: string;
	url: string;
	descripcion: string;
}

export interface Ubicacion {
	calle_y_numero: string;
	telefono?: string;
	barrio: string;
	partido: string;
	region: string;
	provincia: string;
	CP: string;
}

export interface Content {
	text: string;
	descripcion: string;
}

export interface Item {
	label?: string;
	icon?: string;
	items?: Item[][];
}

export interface FormData {
	grupo?: string;
	empresa_prepaga?: string;
	edad_1?: number;
	edad_2?: number;
	numkids?: number;
	tipo?: string;
	agree?: boolean;
	aporteOS?: boolean;
	sueldo?: boolean;
	aporte?: number;
	monoadic?: boolean;
	cantAport?: number;
	afinidad?: boolean;
	bonAfinidad?: number;
	supras?: boolean;
	segvida?: boolean;
	segvida1?: boolean;
	region?: string;
	personalData?: PersonalData; // Aquí tienes una referencia a la interfaz PersonalData
}

export interface PersonalData {
	name?: string;
	email?: string;
	phone?: string;
	region?: string;
	// Aquí puedes definir más propiedades si es necesario
}

export interface Quote {
	adultos: number;
	menores: number;
	region: string;
}

export * from './interfaces';
