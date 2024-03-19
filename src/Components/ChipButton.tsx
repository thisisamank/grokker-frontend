import * as React from "react";

interface ChipButtonProps {
    label: string;
    onClick: () => void;
}

export const ChipButton: React.FC<ChipButtonProps> = ({ label, onClick }) => {
    return (
        <button className="chip-button px-4 py-1 text-gray-500 bg-gray-100 text-sm rounded-full" onClick={onClick}>
            {label}
        </button>
    );
};