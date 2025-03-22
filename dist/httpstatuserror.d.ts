/// <reference types="node" />

/** Simple error class for http operations */
export class HttpStatusError<T> extends Error {
	/** The http result code */
	readonly status: number;
	/** The http result code */
	readonly code: number;
	/** An optional http operation result data */
	readonly res: T;

	/**
	 * Creates a new HttpStatusError object and sets the `error.message`
	 * property to the provided text message.
	 *
	 * @param message - The http result message
	 * @param status - The http result code
	 * @param result - Optional result data of the operation
	 */
	constructor( message: string, status: number, result?: T );
}