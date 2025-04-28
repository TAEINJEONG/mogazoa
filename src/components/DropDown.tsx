import Image from 'next/image';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface DropDownProps {
  width: string;
  height: string;
  textClassName?: string;
  children: ReactNode;
  onChange: (value: string | number) => void;
}

interface DropDownOptionProps {
  children: ReactNode;
  value: string | number;
  onSelect?: (value: string | number, optionText: string) => void;
}

export function DropDownOption({ children, value, onSelect }: DropDownOptionProps) {
  return (
    <li
      value={value}
      className="text-[#6E6E82] hover:text-[#F1F1F5] hover:bg-gray-100 cursor-pointer transition"
      onClick={() => onSelect?.(value, String(children))}
    >
      {children}
    </li>
  );
}

export function DropDown({ width, height, textClassName, children, onChange }: DropDownProps) {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const [iconSrc, setIconsrc] = useState<string>('/icon/icon/status=drop_down_300.png');
  const [categoryName, setCategoryName] = useState<string>('');

  const dropDownRef = useRef<HTMLDivElement>(null);

  function handleOutsideClick(e: MouseEvent) {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) setIsopen(false);
  }

  function handleSelect(value: string | number, optionText: string) {
    setCategoryName(optionText);
    onChange(value);
    setIsopen(false);
  }

  const ShowDropDownOptions = () => {
    if (!isOpen) return;
    else
      return (
        <ul
          className="flex flex-col gap-[5px] bg-[#252530] border border-[#353542]"
          style={{ width: width }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement<DropDownOptionProps>(child))
              return React.cloneElement(child, { onSelect: handleSelect });
          })}
        </ul>
      );
  };

  useEffect(() => {
    if (isOpen) {
      setIconsrc('/icon/icon/status=drop_up_300.png');
      document.addEventListener('click', handleOutsideClick);
    } else {
      setIconsrc('/icon/icon/status=drop_down_300.png');

      if (categoryName.length === 0) {
        const childrenArray = React.Children.toArray(children);
        const firstChildren = childrenArray[0];
        if (React.isValidElement<DropDownOptionProps>(firstChildren)) {
          const first_DropDownOption = firstChildren;
          setCategoryName(String(first_DropDownOption.props.children));
        }
      }

      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, children, categoryName, handleOutsideClick]);

  return (
    <>
      <div
        ref={dropDownRef}
        className="flex justify-between items-center cursor-pointer"
        style={{ width: width, height: height }}
        onClick={() => setIsopen(!isOpen)}
      >
        <div className={textClassName}>{categoryName}</div>
        <div className="relative" style={{ width: height, height: height }}>
          <Image src={iconSrc} alt="dropIcon" fill sizes={height} />
        </div>
      </div>
      <ShowDropDownOptions />
    </>
  );
}