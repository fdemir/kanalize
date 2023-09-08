import { effect, signal } from "@preact/signals";

interface SavedItem {
  id: string;
  content: string;
}

export const saved = signal<SavedItem[]>(
  [],
);

effect(() => {
  if (typeof window === "undefined") return;

  const savedItems = localStorage.getItem("saved");
  if (savedItems) {
    saved.value = JSON.parse(savedItems);
  }
});

effect(() => {
  if (typeof window === "undefined") return;

  localStorage.setItem("saved", JSON.stringify(saved.value));
});

export function save(content: string) {
  saved.value = [...saved.value, { id: Date.now().toString(), content }];
}

export function remove(id: string) {
  saved.value = saved.value.filter((item) => item.id !== id);
}
