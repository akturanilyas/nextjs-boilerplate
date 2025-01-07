import 'server-only';

import { cache } from 'react';

const requestContext = cache(() => new Map<string, unknown>());

export const setRequestContext = (key: string, value: unknown) => requestContext().set(key, value);

export const getRequestContext = (key: string) => requestContext().get(key);
