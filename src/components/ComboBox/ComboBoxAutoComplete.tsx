import { useRef, useState, useLayoutEffect, useEffect, ReactNode } from 'react';
import './ComboBox.scss';
import React from 'react';
import {FaSpinner} from '../../SVG/Icons/FontAwesomeIcons'

interface ComboBoxAutoCompleteProps extends React.HTMLAttributes<HTMLDivElement> {
    /**An array of any type that represents the data source for the dropdown list.*/
    dataSource: any[];
    /** A function that takes an item from the dataSource and returns a JSX element that represents the item in the dropdown list. */
    listItemRender: (item: any) => ReactNode;
    /**A function that is called when an item in the dropdown list is clicked. It receives the click event and the clicked item as parameters. */
    onItemClick: (event: React.MouseEvent, item: any) => void;
    /**A string that represents the current value of the input field. */
    inputValue: string;
    /** A function that is called when the value of the input field changes. It receives the change event as a parameter. */
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**An optional function that is called when the dropdown is closed. */
    onDropdownClosed?: () => void;
    /** The currently selected item from the dataSource. */
    selectedValue: any;
    /**A boolean that indicates whether the data for the dropdown list is currently being loaded. */
    isLoading: boolean;
    /** A string that is displayed when the dataSource is empty or no items match the current filter. */
    EmptyResultMessage: string;
    /**A string that is displayed in the input field when it is empty. */
    placeholder: string;
    /** A string that is used as the aria-label for the list items in the dropdown list. */
    ariaKey: string;
    /**A string that is used as the aria-label for the dropdown button. */
    buttonDropDownAriaKey: string;
}

export function ComboBoxAutoComplete({
    dataSource,
    listItemRender,
    onItemClick,
    inputValue,
    onInputChange,
    onDropdownClosed,
    selectedValue,
    isLoading,
    EmptyResultMessage,
    placeholder,
    ariaKey,
    buttonDropDownAriaKey,
    ...props
}: ComboBoxAutoCompleteProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ComboBoxRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null)
    const DropdownRef = useRef<HTMLUListElement>(null);
    const [index, setIndex] = useState<number>(-2);
    const [startTabbing, setStartTabbing] = useState<boolean>(false);

    function resizeSelectBoxItems() {
        let selectboxHeader = ComboBoxRef.current;
        let headerStyles = selectboxHeader ? getComputedStyle(selectboxHeader) : null;
        let selectboxList = DropdownRef.current;

        if (selectboxList && headerStyles) {
            selectboxList.style.width = headerStyles.width;
        }
    }
    window.addEventListener('resize', resizeSelectBoxItems);

    useLayoutEffect(() => {
        resizeSelectBoxItems();
    }, [DropdownRef, isOpen, dataSource]);

    function useOutsideAlerter(ref: any, callback: () => void) {
        useEffect(() => {
            function handleClickOutside(event: { target: any; }) {
                if (ref.current && !ref.current.contains(event.target)) {
                    callback();
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [callback, ref]);
    }

    useOutsideAlerter(wrapperRef, () => {
        setIsOpen(false);
    });

    useEffect(() => {
        let listitem: HTMLElement;
        if (DropdownRef.current) {
            listitem = DropdownRef.current.children[index] as HTMLElement;
            if (startTabbing) {
                listitem ? listitem.focus() : setIndex(0);
            }
        }
    }, [index, startTabbing]);


    useEffect(() => {
        !isOpen && onDropdownClosed && onDropdownClosed();
        isOpen && inputRef && inputRef.current?.focus();
        isOpen && setStartTabbing(false);

        if (isOpen && selectedValue && dataSource) {
            const indexOfSelected = dataSource.findIndex((x) => x === selectedValue);
            setIndex(indexOfSelected);
        } else {
            setIndex(-2);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);


    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent<HTMLLIElement>, x?: any) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setIndex((prev) => {
                    return dataSource && prev < dataSource.length - 1 ? prev + 1 : prev;
                });
                setStartTabbing(true);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setIndex((prev) => (prev > 0 ? prev - 1 : prev));
                setStartTabbing(true);
                break;
            case 'Enter':
                x ? handleClick(e, x) : dataSource?.length > 0 ? handleClick(e, dataSource[0]) : x && handleClick(e, x);
                break;
            case 'Tab':
                setIsOpen(false);
                break;
            default:
        }
    };

    const handleClick = (e: any, x: any) => {
        onItemClick(e, x);
        setIsOpen(false);
    };

    return (
        <div className="comboBoxWrapper" ref={wrapperRef}  {...props}>
            <div ref={ComboBoxRef} className={`comboBoxWrapper__comboBox`}>
                <input
                    onKeyDown={(e) => { onKeyDown(e) }}
                    ref={inputRef}
                    aria-label="type search value or press arrow down to select value from the dropdown"
                    onChange={onInputChange}
                    value={inputValue ? inputValue : ''}
                    className="comboBoxWrapper__comboBox__input"
                    placeholder={placeholder}
                    onFocus={() => { setIsOpen(true) }}
                    onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (dataSource && target.value) {
                            setIsOpen(true)
                        } else if (dataSource && !target.value) {
                            setIsOpen(false)
                        }
                    }}
                ></input>
                <div
                    className="comboBoxWrapper__comboBox__comboButton"
                >
                    {isLoading && <FaSpinner className="comboBoxWrapper__comboBox__comboButton__spinner"/>}
                </div>
            </div>
            {dataSource?.length > 0 && isOpen && (
                <ul ref={DropdownRef} className={'comboBoxWrapper__dropDown'}>
                    {dataSource && dataSource.length > 0 ? (
                        dataSource.map((x: any, i: number) => {
                            return (
                                <li
                                    onKeyDown={(e) => {
                                        onKeyDown(e, x);
                                    }}
                                    key={i}
                                    tabIndex={i}
                                    className={`comboBoxWrapper__dropDown__listItem ${x === selectedValue ? 'active' : ''}`}
                                    onClick={(e) => {
                                        handleClick(e, x);
                                    }}
                                    aria-label={ariaKey ? x[ariaKey] : null}
                                >
                                    {listItemRender(x)}
                                </li>
                            );
                        })
                    ) : (
                        <p style={{ padding: '0.5rem' }}>{EmptyResultMessage}</p>
                    )}
                </ul>
            )}
        </div>
    );
}
