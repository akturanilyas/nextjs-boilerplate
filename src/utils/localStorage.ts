export function setItem(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export function getItem<T extends Record<string, unknown>>(key: string) {
  try {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) as T : undefined;
  } catch (error) {
    console.log(error);
  }
}
