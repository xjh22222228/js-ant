import dayjs from 'dayjs'
import MarkdownIt from 'markdown-it';

export function formatDate(date?: dayjs.ConfigType): string;

export function formatDateTime(date?: dayjs.ConfigType): string;

export const markdown: MarkdownIt;
