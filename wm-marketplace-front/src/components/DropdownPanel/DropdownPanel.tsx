import { useCallback, useRef, useState } from "react";
import { DropdownWrapper, Wrapper } from "./styled";
import { useOutsideClick } from "@/helpers/hooks";

interface I_DropdownPanelProps {
  toggler: React.ElementType<{ onClick: () => void }>;
  children: React.ReactNode;
  position: "left" | "right";
}

const DropdownPanel: React.FC<I_DropdownPanelProps> = ({
  toggler,
  children,
  position,
}: I_DropdownPanelProps) => {
  const dropdownWrapperRef = useRef(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    console.log("handleToggle");
    setIsOpen((prev) => !prev);
  }, []);

  const Toggler = toggler;

  useOutsideClick(dropdownWrapperRef, handleToggle);

  return (
    <Wrapper>
      <Toggler onClick={handleToggle} />
      {isOpen && (
        <DropdownWrapper ref={dropdownWrapperRef} $position={position}>
          {children}
        </DropdownWrapper>
      )}
    </Wrapper>
  );
};

export default DropdownPanel;
