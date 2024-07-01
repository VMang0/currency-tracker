import { MouseEvent } from 'react';

export const stopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();
