/**
 * @param {!number} millis
 * @return {!Timestamp}
 */
export function toTimestamp(millis: number): Timestamp;
/**
 * This function is used for convert the timestamp provided by publisher to
 * milliseconds. Although we required publishers to provide timestamp in
 * milliseconds, but there's a chance they may not follow the instruction.
 * So this function supports the conversion of seconds, milliseconds and
 * microseconds.
 * @param {!number} timestamp represented as seconds, milliseconds or microseconds
 * @return {!number}
 */
export function convertPotentialTimestampToSeconds(timestamp: number): number;
/**
 * @param {!number} timestamp represented as seconds, milliseconds or microseconds
 * @return {!number}
 */
export function convertPotentialTimestampToMilliseconds(timestamp: number): number;
import { Timestamp } from "../proto/api_messages";
//# sourceMappingURL=date-utils.d.ts.map