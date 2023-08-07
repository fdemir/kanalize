// deno-lint-ignore-file no-fallthrough
import { useSignal } from "@preact/signals";
import { useMemo } from "preact/hooks";
import { useCombobox, useMultipleSelection } from "downshift/preact";

interface FieldSelectProps {
  onChange: (newFields: string[]) => void;
  data: string[];
  value: string[];
}

export default function FieldSelect(props: FieldSelectProps) {
  const { onChange, value, data } = props;
  const selectedItems = value;
  const inputValue = useSignal("");

  const items = useMemo(
    () =>
      data.filter((item) =>
        !selectedItems.includes(item) &&
        item.includes(inputValue.value.toLowerCase())
      ),
    [inputValue.value, selectedItems],
  );

  const { getSelectedItemProps, getDropdownProps, removeSelectedItem } =
    useMultipleSelection({
      selectedItems: selectedItems,
      onStateChange({ selectedItems: newSelectedItems, type }) {
        switch (type) {
          case useMultipleSelection.stateChangeTypes
            .SelectedItemKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes
            .SelectedItemKeyDownDelete:
          case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes
            .FunctionRemoveSelectedItem:
            onChange(newSelectedItems as string[]);
            break;
          default:
            break;
        }
      },
    });

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    items,
    defaultHighlightedIndex: 0,
    selectedItem: null,
    inputValue: inputValue.value,
    stateReducer(state, actionAndChanges) {
      const { changes, type } = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true,
            highlightedIndex: 0,
          };
        default:
          return changes;
      }
    },
    onStateChange({
      inputValue: newInputValue,
      type,
      selectedItem: newSelectedItem,
    }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (newSelectedItem) {
            inputValue.value = "";

            onChange([
              ...selectedItems,
              newSelectedItem,
            ]);
          }
          break;

        case useCombobox.stateChangeTypes.InputChange:
          inputValue.value = newInputValue as string;
          break;
      }
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col gap-1">
        <label className="w-fit text-gray-600" {...getLabelProps()}>
          Add a programming language or field to generate more relevant idea
        </label>
        <div className="shadow-sm rounded-md bg-white inline-flex gap-2 items-center flex-wrap p-4">
          {selectedItems.map((
            item,
            index,
          ) => (
            <div
              onClick={(e) => {
                e.stopPropagation();
                removeSelectedItem(item);
              }}
              className="cursor-pointer"
            >
              <span
                className="rounded-full bg-green-600 text-white font-semibold px-2 py-1 flex items-center gap-1"
                key={`selected-item-${index}`}
                {...getSelectedItemProps({
                  selectedItem: item,
                  index,
                })}
              >
                {item}
                <span className="px-1 cursor-pointer">
                  &#10005;
                </span>
              </span>
            </div>
          ))}

          <input
            placeholder="Add a programming language or field"
            className="w-full outline-none"
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
          />
        </div>
      </div>
      <ul
        className={`absolute w-inherit bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 ${
          !(isOpen && items.length) && "hidden"
        }`}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              key={`${item}${index}`}
              className={`py-2 px-3 shadow-sm flex flex-col
              ${
                highlightedIndex === index
                  ? "bg-gray-100"
                  : "bg-white hover:bg-gray-100"
              }
              ${
                selectedItem === item
                  ? "bg-gray-100"
                  : "bg-white hover:bg-gray-100"
              }
              `}
              {...getItemProps({ item, index })}
            >
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
