export const STORAGE_KEY = "fields";
export const DEFAULT_FIELDS = ["javascript", "game", "web", "dogs"];

export const getField = (): string[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY) as unknown as string;

    if (data.length == 0) {
      throw new Error("No data.");
    }

    return JSON.parse(data);
  } catch {
    setField(DEFAULT_FIELDS);
    return DEFAULT_FIELDS;
  }
};

export const setField = (data: string[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};
