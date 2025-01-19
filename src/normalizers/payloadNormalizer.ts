import { serviceNormalizerHandler } from './serviceNormalizerHandler';

export const payloadNormalizer = ({ data, endpoint }: { data: Record<string, unknown>; endpoint?: string }) => {
  data = serviceNormalizerHandler?.[`${endpoint}Normalizer` as keyof typeof serviceNormalizerHandler]?.(data) || data;

  return data;
};
